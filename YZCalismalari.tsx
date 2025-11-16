import { ArrowLeft } from "lucide-react";
import { APP_LOGO } from "@/const";

export default function YZCalismalari() {
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
            <a href="/" className="text-sm hover:text-accent transition flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Ana Sayfa
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-12">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">
              YZ Çalışmaları
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Yapay Zeka ve makine öğrenmesi alanındaki çalışmalarım, projelerim ve araştırmalarım
            </p>
          </div>

          {/* Padlet Link Button */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <a
              href="https://padlet.com/selimturhan9/selim-evren-turhan-puq8ll4ztb1yoci5"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-card to-card/50 hover:border-accent transition p-12 text-center hover:shadow-accent/20">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto text-accent group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-accent">Padlet Panosunu Aç</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  YZ çalışmalarımın detaylı görselleri, projelerim ve araştırmalarımı Padlet panosunda inceleyin
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium group-hover:bg-accent/90 transition">
                  <span>Padlet Panosunu Ziyaret Et</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg bg-card border border-border hover:border-accent transition">
                <h3 className="text-2xl font-bold mb-4 text-accent">Yapay Zeka Uzmanlığı</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yapay zeka ve makine öğrenmesi teknolojilerinin eğitim alanında uygulanması konusunda çalışmalar yapıyorum. Modern AI araçlarını öğrencilere tanıtmak ve pratik uygulamalar geliştirmek benim temel hedeflerim.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-card border border-border hover:border-accent transition">
                <h3 className="text-2xl font-bold mb-4 text-accent">Araştırma ve Geliştirme</h3>
                <p className="text-muted-foreground leading-relaxed">
                  YZ teknolojilerinin eğitim kurumlarında nasıl daha etkili kullanılabileceği konusunda araştırmalar yürütüyorum. Bu çalışmalar TEKNOFEST, Tübitak ve diğer bilimsel platformlarda sunulmaktadır.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Ana Sayfaya Dön
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Selim Evren TURHAN. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
