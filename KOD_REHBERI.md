# Kodları anlama rehberi

## Dosyalar
- `index.html`: Sayfa iskeleti, açılış bilgilendirmesi ve butonlar.
- `css/style.css`: Renkler, yerleşim ve telefon/tablet uyumu.
- `js/app.js`: Eğitim adımları, arama, tıklamalar, ilerleme ve ses kontrolleri.
- `js/assets.js`: Gömülü ikon/görsel verileri. Otomatik oluşturulur; elle düzenlemeyin.
- `sounds/`: İsteğe bağlı MP3 kayıtları.

## `app.js` içindeki temel parçalar
1. `ST`: Beş ana aşamanın başlıkları.
2. `S`: Eğitim adımlarının verileri. Her satır başlık, açıklama, ipucu ve beklenen kullanıcı hareketini tanımlar.
3. `W`: Yanlış yere tıklanınca gösterilen açıklamalar.
4. `SERVICE_ITEMS`: Arama alanında listelenen örnek hizmetler.
5. `searchResults()`: Yazılan kelimelere göre sonuçları filtreler.
6. `screen()`: Telefon simülasyonunda gösterilecek ekranı üretir.
7. `render()`: Mevcut adımı ve ilerleme durumunu ekrana çizer.
8. `done()`: Doğru hareket yapıldığında adımı tamamlar.
9. Sesli anlatım bölümü: Önce ilgili MP3'ü çalar; MP3 yoksa tarayıcının Türkçe metin okumasını kullanır.

## Trafik cezası araması
Arama sekmesine gidin, kutuya `trafik cezası sorgulama` yazın. Sonuçlar her harfte filtrelenir. Arama metni tamamlanınca sonraki adıma geçilir ve kullanıcı listeden **Araç Plakasına Yazılan Ceza Sorgulama** hizmetini seçer. Simülasyonda ayrı bir “Hizmeti Ara” düğmesi bulunmaz.

## Kendi sesinizi ekleme
Dosya adları `sounds/README.md` içinde listelenmiştir. Kendi MP3 kayıtlarınızı eklemek isteğe bağlıdır; kayıt yoksa tarayıcı seslendirmesi çalışır.
