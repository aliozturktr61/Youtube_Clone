## Youtube_Clone
 **Bu proje reavt-vite yapısı ile oluşturlmuştur.**
- Proje İçerisinde RapidApi APİ kullanılmıştır.
- Context Yapı Kullanılmıştır.
 Bu projede kullandığımız kütüphaneler
## Tailwind
## Kütüphaneler

- tailwind(stillendirme,kurulumu sitesinde)
- axios
- react-player
- react-icons
- millify(sayı formatlama)
- moment(zaman formatlama)
- react-router-dom
- - Kurulum:
- https://tailwindcss.com/

tailwind.config.js, postcss.config.js eklemek için komutları gir:

- npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

tailwind.config.js ekleme yap:

- content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],

index.css

- @tailwind base;
  @tailwind components;
  @tailwind utilities;



## Enviroment Variables (Ortam Değişkenleri)

- Çalışma ortamı için gerekli ama projeyi githuba gönderdiğimiz zaman herkes tarafından erişilebilir olmasını istemediğimiz değişkenleri ortam değişkenleri olarak tanımlarız.

- Örn:API_KEY admin giriş bilgileri, yayılmasını istemediğimiz herhangi bir değişken.
# Youtube_Clone
