import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Trash2, Download, File as FileIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function FileManager() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const { data: files = [], isLoading, refetch } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Lütfen bir dosya seçin");
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = (e.target?.result as string).split(",")[1];
        
        await uploadMutation.mutateAsync({
          fileName: selectedFile.name,
          fileData: base64,
          mimeType: selectedFile.type,
          description: description || undefined,
          isPublic,
        });

        toast.success("Dosya başarıyla yüklendi!");
        setSelectedFile(null);
        setDescription("");
        setIsPublic(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        refetch();
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      toast.error("Dosya yükleme başarısız");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (fileId: number) => {
    if (!confirm("Dosyayı silmek istediğinize emin misiniz?")) return;

    try {
      await deleteMutation.mutateAsync({ fileId });
      toast.success("Dosya başarıyla silindi");
      refetch();
    } catch (error) {
      toast.error("Dosya silme başarısız");
      console.error(error);
    }
  };

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
        <h3 className="text-lg font-semibold mb-4">Dosya Yükle</h3>
        
        <div className="space-y-4">
          <div className="border-2 border-dashed border-accent/30 rounded-lg p-6 text-center hover:border-accent/50 transition cursor-pointer"
            onClick={() => fileInputRef.current?.click()}>
            <Upload className="w-8 h-8 mx-auto mb-2 text-accent" />
            <p className="text-sm text-muted-foreground">
              {selectedFile ? selectedFile.name : "Dosya seçmek için tıklayın veya sürükleyin"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Açıklama (İsteğe bağlı)</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Dosya hakkında bilgi yazın..."
              rows={3}
              className="w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isPublic"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="isPublic" className="text-sm font-medium cursor-pointer">
              Bu dosyayı herkese açık yap
            </label>
          </div>

          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="w-full bg-accent hover:bg-accent/90"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Yükleniyor...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Dosyayı Yükle
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Files List */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Yüklenen Dosyalar</h3>
        
        {isLoading ? (
          <div className="text-center py-8">
            <Loader2 className="w-6 h-6 animate-spin mx-auto text-accent" />
          </div>
        ) : files.length === 0 ? (
          <Card className="p-8 text-center text-muted-foreground">
            <FileIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Henüz dosya yüklenmemiş</p>
          </Card>
        ) : (
          <div className="grid gap-4">
            {files.map((file) => (
              <Card key={file.id} className="p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <FileIcon className="w-5 h-5 text-accent flex-shrink-0" />
                      <h4 className="font-semibold truncate">{file.fileName}</h4>
                      {file.isPublic === 1 && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded whitespace-nowrap">
                          Herkese Açık
                        </span>
                      )}
                    </div>
                    {file.description && (
                      <p className="text-sm text-muted-foreground mb-2">{file.description}</p>
                    )}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span>Boyut: {formatFileSize(file.fileSize)}</span>
                      <span>Tür: {file.mimeType}</span>
                      <span>Tarih: {formatDate(file.createdAt)}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={file.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-accent/10 rounded transition"
                      title="İndir"
                    >
                      <Download className="w-5 h-5 text-accent" />
                    </a>
                    <button
                      onClick={() => handleDelete(file.id)}
                      disabled={deleteMutation.isPending}
                      className="p-2 hover:bg-red-50 rounded transition disabled:opacity-50"
                      title="Sil"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
