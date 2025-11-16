# Selim Evren TURHAN - Kişisel Web Sayfası | Proje Yapısı

## 📋 Proje Özeti

**Proje Adı:** selim_evren_portfolio  
**Tür:** Full-Stack Web Uygulaması (React + Express + MySQL)  
**Özellikler:** Kimlik Doğrulama, Dosya Depolama (S3), tRPC API, Responsive Design

---

## 📁 Klasör Yapısı

```
selim_evren_portfolio/
├── client/                          # Frontend (React 19 + Tailwind 4)
│   ├── public/                      # Statik dosyalar
│   │   ├── hero-bg.jpg             # Hero bölümü arka plan görseli
│   │   ├── logo.png                # Kişisel logo
│   │   └── .gitkeep
│   │
│   ├── src/
│   │   ├── _core/
│   │   │   └── hooks/
│   │   │       └── useAuth.ts       # Kimlik doğrulama hook'u
│   │   │
│   │   ├── components/
│   │   │   ├── AIChatBox.tsx        # AI sohbet bileşeni (template)
│   │   │   ├── DashboardLayout.tsx  # Dashboard layout (template)
│   │   │   ├── DashboardLayoutSkeleton.tsx
│   │   │   ├── ErrorBoundary.tsx    # Hata sınırlandırması
│   │   │   ├── FileManager.tsx      # Dosya yönetimi bileşeni
│   │   │   ├── ManusDialog.tsx      # Manus diyalog bileşeni
│   │   │   ├── Map.tsx              # Google Maps entegrasyonu
│   │   │   └── ui/                  # shadcn/ui bileşenleri
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── table.tsx
│   │   │       └── ... (40+ UI bileşeni)
│   │   │
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx     # Tema yönetimi (light/dark)
│   │   │
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   │
│   │   ├── lib/
│   │   │   ├── trpc.ts              # tRPC client yapılandırması
│   │   │   └── utils.ts             # Yardımcı fonksiyonlar
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Ana sayfa (hero, hakkımda, projeler)
│   │   │   ├── YZCalismalari.tsx    # YZ Çalışmaları sayfası
│   │   │   ├── FileStorage.tsx      # Dosya Depolama sayfası
│   │   │   ├── NotFound.tsx         # 404 sayfası
│   │   │   └── ComponentShowcase.tsx # Bileşen vitrin (template)
│   │   │
│   │   ├── App.tsx                  # Ana uygulama ve routing
│   │   ├── main.tsx                 # React giriş noktası
│   │   ├── index.css                # Global stiller ve tema değişkenleri
│   │   └── const.ts                 # Sabitler (APP_TITLE, APP_LOGO)
│   │
│   ├── index.html                   # HTML şablonu
│   └── tsconfig.json                # TypeScript yapılandırması
│
├── server/                          # Backend (Express + tRPC)
│   ├── _core/                       # Framework çekirdeği
│   │   ├── context.ts               # tRPC context (kullanıcı bilgisi)
│   │   ├── cookies.ts               # Oturum cookie yönetimi
│   │   ├── dataApi.ts               # Veri API entegrasyonu
│   │   ├── env.ts                   # Ortam değişkenleri
│   │   ├── imageGeneration.ts       # Görüntü oluşturma (LLM)
│   │   ├── index.ts                 # Express sunucusu başlatma
│   │   ├── llm.ts                   # LLM entegrasyonu
│   │   ├── map.ts                   # Google Maps API
│   │   ├── notification.ts          # Bildirim sistemi
│   │   ├── oauth.ts                 # Manus OAuth
│   │   ├── sdk.ts                   # SDK yapılandırması
│   │   ├── systemRouter.ts          # Sistem tRPC router'ı
│   │   ├── trpc.ts                  # tRPC yapılandırması
│   │   ├── types/                   # TypeScript tipleri
│   │   ├── vite.ts                  # Vite SSR yapılandırması
│   │   └── voiceTranscription.ts    # Ses transkripsiyon
│   │
│   ├── db.ts                        # Veritabanı query helper'ları
│   ├── routers.ts                   # tRPC prosedürleri (API endpoints)
│   └── storage.ts                   # S3 dosya depolama helper'ları
│
├── drizzle/                         # Veritabanı şeması ve migrasyonlar
│   ├── schema.ts                    # Tablo tanımları
│   │   ├── users                    # Kullanıcı tablosu
│   │   └── files                    # Dosya depolama tablosu
│   │
│   ├── relations.ts                 # Tablo ilişkileri
│   ├── migrations/                  # SQL migrasyonları
│   │   ├── 0000_absurd_nova.sql     # İlk migration (users tablosu)
│   │   └── 0001_mute_vengeance.sql  # İkinci migration (files tablosu)
│   │
│   └── meta/                        # Drizzle metadata
│       ├── _journal.json
│       ├── 0000_snapshot.json
│       └── 0001_snapshot.json
│
├── shared/                          # Paylaşılan kod
│   ├── _core/
│   │   └── errors.ts                # Hata tanımları
│   ├── const.ts                     # Paylaşılan sabitler
│   └── types.ts                     # Paylaşılan tipler
│
├── patches/                         # NPM paket yamaları
│   └── wouter@3.7.1.patch
│
├── .gitignore                       # Git ignore kuralları
├── .prettierrc                      # Prettier kod formatı
├── .prettierignore                  # Prettier ignore kuralları
├── components.json                  # shadcn/ui yapılandırması
├── drizzle.config.ts                # Drizzle ORM yapılandırması
├── package.json                     # NPM bağımlılıkları ve scripts
├── pnpm-lock.yaml                   # pnpm lock dosyası
├── tailwind.config.ts               # Tailwind CSS yapılandırması
├── tsconfig.json                    # TypeScript yapılandırması
├── vite.config.ts                   # Vite yapılandırması
├── vitest.config.ts                 # Vitest test yapılandırması
└── todo.md                          # Proje görev listesi

```

---

## 🔧 Temel Dosyalar ve İşlevleri

### Frontend Sayfaları

| Dosya | Rota | İşlev |
|-------|------|-------|
| `Home.tsx` | `/` | Ana sayfa - Hero, hakkımda, uzmanlık, projeler, iletişim |
| `YZCalismalari.tsx` | `/yz-calismalari` | YZ Çalışmaları - Padlet embed linki |
| `FileStorage.tsx` | `/dosya-depolama` | Dosya depolama - Kimlik doğrulama gerekli |
| `NotFound.tsx` | `/*` | 404 sayfası |

### Backend API Prosedürleri (tRPC)

| Router | Prosedür | Tür | İşlev |
|--------|----------|-----|-------|
| `auth` | `me` | Query | Mevcut kullanıcı bilgisi |
| `auth` | `logout` | Mutation | Oturumu kapat |
| `files` | `upload` | Mutation | Dosya yükle (S3'e) |
| `files` | `list` | Query | Kullanıcı dosyalarını listele |
| `files` | `get` | Query | Belirli dosyayı getir |
| `files` | `delete` | Mutation | Dosyayı sil |

### Veritabanı Tabloları

#### `users` Tablosu
- `id`: Birincil anahtar
- `openId`: Manus OAuth ID (benzersiz)
- `name`: Kullanıcı adı
- `email`: E-posta adresi
- `role`: admin | user
- `createdAt`, `updatedAt`, `lastSignedIn`: Tarihler

#### `files` Tablosu
- `id`: Birincil anahtar
- `userId`: Dosya sahibi (users.id)
- `fileName`: Dosya adı
- `fileKey`: S3 anahtar yolu
- `fileUrl`: S3 genel URL
- `mimeType`: MIME tipi
- `fileSize`: Dosya boyutu (bytes)
- `description`: Dosya açıklaması
- `isPublic`: Herkese açık mı? (0/1)
- `createdAt`, `updatedAt`: Tarihler

---

## 🚀 Önemli Komutlar

```bash
# Geliştirme sunucusunu başlat
pnpm dev

# Üretim için derle
pnpm build

# Veritabanı şemasını güncelle
pnpm db:push

# Testleri çalıştır
pnpm test

# Kodu formatla
pnpm format

# TypeScript kontrol et
pnpm tsc
```

---

## 🔐 Ortam Değişkenleri (Otomatik Enjekte Edilir)

```
VITE_APP_TITLE=Selim Evren TURHAN - Kişisel Web Sayfası
VITE_APP_LOGO=/logo.png
VITE_APP_ID=<Manus OAuth App ID>
VITE_OAUTH_PORTAL_URL=<OAuth Portal URL>
VITE_FRONTEND_FORGE_API_URL=<Forge API URL>
VITE_FRONTEND_FORGE_API_KEY=<Frontend API Key>

DATABASE_URL=<MySQL Connection String>
JWT_SECRET=<Session Secret>
OAUTH_SERVER_URL=<OAuth Server URL>
BUILT_IN_FORGE_API_URL=<Server Forge API URL>
BUILT_IN_FORGE_API_KEY=<Server API Key>
OWNER_NAME=<Owner Name>
OWNER_OPEN_ID=<Owner OAuth ID>
```

---

## 📦 Bağımlılıklar

### Frontend
- **React 19**: UI framework
- **Tailwind CSS 4**: Utility-first CSS
- **shadcn/ui**: UI bileşen kütüphanesi
- **tRPC**: Type-safe RPC
- **Wouter**: Hafif routing
- **Lucide React**: İkonlar

### Backend
- **Express 4**: Web sunucusu
- **tRPC 11**: RPC framework
- **Drizzle ORM**: Veritabanı ORM
- **MySQL2**: MySQL driver
- **Zod**: Schema validation

---

## 🎨 Tasarım Özellikleri

- **Tema**: Light mode (açık tema)
- **Renkler**: Mavi-mor gradyanı (accent colors)
- **Responsive**: Mobile-first design
- **Animasyonlar**: Smooth transitions ve hover effects
- **Tipografi**: Google Fonts (Poppins, Inter)

---

## 🔒 Güvenlik Özellikleri

- **OAuth 2.0**: Manus OAuth ile kimlik doğrulama
- **JWT**: Oturum yönetimi
- **Protected Routes**: Dosya depolama sadece kimlik doğrulaması yapan kullanıcılara
- **S3 Storage**: Dosyalar güvenli bulut depolamada
- **Role-based Access**: Admin ve user rolleri

---

## 📝 Dosya Depolama Akışı

1. **Yükleme**: Kullanıcı dosya seçer → FileManager bileşeni
2. **Encoding**: Dosya base64'e kodlanır
3. **API Call**: `trpc.files.upload` mutation çağrılır
4. **S3 Upload**: Backend `storagePut()` ile S3'e yükler
5. **DB Save**: Dosya metadata veritabanına kaydedilir
6. **URL Return**: S3 genel URL frontend'e döndürülür

---

## 🛠️ Geliştirme Notları

- **Node.js**: v22.13.0
- **pnpm**: v10.4.1
- **TypeScript**: 5.9.3
- **Vite**: 6.x (build tool)

---

## 📞 İletişim Bilgileri

- **E-posta**: selimturhan9@gmail.com (form aracılığıyla)
- **Dosya Depolama**: /dosya-depolama (kimlik doğrulama gerekli)
- **YZ Çalışmaları**: /yz-calismalari (Padlet linki)

---

**Son Güncelleme**: 16 Kasım 2025  
**Proje Versiyonu**: 5f52fa07 (Full-Stack + Dosya Depolama)
