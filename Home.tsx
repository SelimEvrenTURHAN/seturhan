import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ExternalLink, Code, Cpu, Brain, BookOpen, Zap, Award, Users, Globe } from "lucide-react";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";

export default function Home() {
  const { user, logout } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    
    try {
      // E-posta gönderme simülasyonu
      // Gerçek uygulamada backend API'ye gönderilecek
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const workAreas = [
    { icon: Cpu, title: "Donanım", description: "Bilgisayar donanımı ve sistem mimarisi" },
    { icon: Brain, title: "Yapay Zeka", description: "AI ve makine öğrenmesi uygulamaları" },
    { icon: BookOpen, title: "Araştırma", description: "Araştırma izinleri ve akademik çalışmalar" },
    { icon: Code, title: "Yazılım", description: "Yazılım geliştirme ve programlama" },
    { icon: Globe, title: "Projeler", description: "Yerel, ulusal ve uluslararası projeler" },
    { icon: Award, title: "Sertifikalar", description: "TEKNOFEST, Tübitak, eTwinning" }
  ];

  const projects = [
    {
      title: "eTwinning Projesi",
      description: "Uluslararası öğrenci işbirliği projesi",
      tags: ["Eğitim", "İşbirliği", "Uluslararası"]
    },
    {
      title: "TEKNOFEST Katılımı",
      description: "Teknoloji ve tasarım yarışmasında proje sunumu",
      tags: ["Teknoloji", "Yarışma", "İnovasyon"]
    },
    {
      title: "Tübitak Araştırması",
      description: "Bilimsel araştırma ve geliştirme projesi",
      tags: ["Araştırma", "Bilim", "Geliştirme"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-lg hidden sm:inline">Selim Evren TURHAN</span>
          </div>
          <nav className="flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-accent transition">Hakkımda</a>
            <a href="#expertise" className="text-sm hover:text-accent transition">Uzmanlık</a>
            <a href="#projects" className="text-sm hover:text-accent transition">Projeler</a>
            <a href="/yz-calismalari" className="text-sm hover:text-accent transition">YZ Çalışmaları</a>
            <a href="/dosya-depolama" className="text-sm hover:text-accent transition">Dosya Depolama</a>
            <a href="#contact" className="text-sm hover:text-accent transition">İletişim</a>
            {user ? (
              <button
                onClick={() => logout()}
                className="text-sm px-3 py-1 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition"
              >
                Çıkış
              </button>
            ) : (
              <a
                href={getLoginUrl()}
                className="text-sm px-3 py-1 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition"
              >
                Giriş
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }} />
        
        <div className="relative container mx-auto px-4 py-20 text-center max-w-4xl">
          <div className="mb-8 inline-block">
            <img src={APP_LOGO} alt="Logo" className="w-24 h-24 mx-auto mb-6 drop-shadow-lg" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">
            Selim Evren TURHAN
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Bilgisayar ve Öğretim Teknolojileri Öğretmeni
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Donanım, yapay zeka, araştırma, yazılım ve uluslararası projeler alanlarında çalışan, dijital yeterliliği yüksek bir eğitimci.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition">
              <Mail className="w-5 h-5" />
              İletişime Geç
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:bg-accent hover:text-accent-foreground font-medium transition">
              <ExternalLink className="w-5 h-5" />
              Projelerim
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Hakkımda</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Bilgisayar ve Öğretim Teknolojileri öğretmeni olarak, eğitim ve teknoloji alanında yenilikçi çözümler geliştirmeye ve öğrencileri dijital çağa hazırlamaya adanmış bir profesyonelim.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Donanım mimarisi, yapay zeka uygulamaları, yazılım geliştirme ve araştırma projelerinde geniş deneyime sahibim. Ulusal ve uluslararası platformlarda (TEKNOFEST, Tübitak, eTwinning) aktif olarak yer almaktayım.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stratejik planlama ve brifing konularında da uzmanlaşmış, eğitim kurumlarının dijital dönüşümüne liderlik eden bir eğitimciyim.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition">
                <Zap className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Donanım</h3>
                <p className="text-sm text-muted-foreground">Sistem mimarisi ve donanım tasarımı</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition">
                <Brain className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Yapay Zeka</h3>
                <p className="text-sm text-muted-foreground">AI ve makine öğrenmesi</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition">
                <Code className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Yazılım</h3>
                <p className="text-sm text-muted-foreground">Yazılım geliştirme ve programlama</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition">
                <Globe className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Projeler</h3>
                <p className="text-sm text-muted-foreground">Uluslararası işbirliği</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Çalışma Alanlarım</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg hover:border-accent transition">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sertifikalar ve Ödüller</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ TEKNOFEST katılımı ve projeleri</li>
                <li>✓ Tübitak araştırma projeleri</li>
                <li>✓ eTwinning projelerine liderlik</li>
                <li>✓ Stratejik plan ve brifing uzmanı</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
              <Users className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Uzmanlık Alanları</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Eğitim teknolojileri ve inovasyonu</li>
                <li>✓ Dijital yeterliliğin geliştirilmesi</li>
                <li>✓ Uluslararası proje yönetimi</li>
                <li>✓ Kurumsal dijital dönüşüm</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Projelerim</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg hover:border-accent transition flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center">İletişime Geçin</h2>
          
          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Adınız</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Adınız"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">E-posta Adresiniz</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-posta adresiniz"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Mesajınız</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mesajınızı yazınız..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {submitStatus === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
              </Button>
              
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Veya doğrudan e-posta gönderin:
              </p>
              <div className="flex justify-center">
                <a href="mailto:selimturhan9@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition">
                  <Mail className="w-4 h-4" />
                  E-posta Gönder
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Selim Evren TURHAN</h3>
              <p className="text-sm text-muted-foreground">
                Bilgisayar ve Öğretim Teknolojileri Öğretmeni
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition">Hakkımda</a></li>
                <li><a href="#expertise" className="hover:text-accent transition">Uzmanlık</a></li>
                <li><a href="#projects" className="hover:text-accent transition">Projeler</a></li>
                <li><a href="#contact" className="hover:text-accent transition">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Selim Evren TURHAN. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
