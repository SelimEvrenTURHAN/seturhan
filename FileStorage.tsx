import { useAuth } from "@/_core/hooks/useAuth";
import FileManager from "@/components/FileManager";
import { Button } from "@/components/ui/button";
import { Cloud, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function FileStorage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Giriş Gerekli</h1>
          <p className="text-muted-foreground mb-6">Dosya depolama özelliğini kullanmak için giriş yapmanız gerekir.</p>
          <Button onClick={() => navigate("/")} className="bg-accent hover:bg-accent/90">
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cloud className="w-6 h-6 text-accent" />
            <h1 className="font-bold text-lg">Dosya Depolama</h1>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri Dön
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dosya Yönetimi</h2>
          <p className="text-muted-foreground">
            Dosyalarınızı güvenli bir şekilde depolayın, yönetin ve paylaşın.
          </p>
        </div>

        <FileManager />
      </main>
    </div>
  );
}
