# Dijital Adım – Trafik Cezası Sorgulama Eğitimi

## Nasıl çalıştırılır?
1. ZIP dosyasını bir klasöre çıkarın.
2. `index.html` dosyasını güncel Chrome veya Edge tarayıcısında açın.
3. Açılış bilgilendirmesini okuyup **Eğitime başla** düğmesine basın.

## Klasör yapısı
- `index.html` – sayfa yapısı ve başlangıç bilgilendirmesi
- `css/style.css` – görünüm ve mobil uyumluluk
- `js/app.js` – eğitim adımları, arama, etkileşimler ve ses kontrolleri
- `js/assets.js` – uygulamanın görsel verileri (elle düzenlemeyin)
- `KOD_REHBERI.md` – kodların görevlerini açıklayan rehber
- `sounds/` – isteğe bağlı kişisel MP3 kayıtları

## Sesler
Kendi seslerinizi eklemek için `sounds/README.md` dosyasındaki adları kullanın. MP3 yoksa tarayıcının Türkçe seslendirmesi devreye girer.

## Eğitim güvenliği
Bu uygulama yalnızca eğitim simülasyonudur. Gerçek e-Devlet hesabına bağlanmaz ve gerçek kimlik/şifre bilgisi girilmemelidir.

## Son ekran düzenlemeleri
- Deneme telefonunun içeriği kaydırılabilir; kaydırma çubuğu görsel olarak gizlidir.
- Eğitim tamamlandığında başarı ekranı tam ekran açılır.
- Telefon/tablet düzeninde metin boyutları küçültülmek yerine okunabilir kalacak şekilde yeniden ayarlanmıştır.
- Masaüstünde telefon simülasyonu ekran yüksekliğine uyum sağlar.

## Son erişilebilirlik ve mobil düzen güncellemesi
- Mobil görünüm, telefonun kullanılabilir yüksekliğini tamamen kullanacak şekilde yeniden düzenlendi. Yönerge kartı ve etkileşimli deneme ekranı ayrı kaydırılabilir alanlar olarak çalışır.
- Mobilde metinler en az 24 px, ana başlıklar yaklaşık 28 px olacak şekilde büyütüldü. Masaüstündeki temel metinler de 24 px ölçeğine çıkarıldı.
- Aşama çubuğunun altındaki bilgi artık bir sonraki adımın talimatını önceden göstermiyor; mevcut aşamayı ve mevcut adım numarasını gösteriyor.
- Dar ve kısa telefon ekranlarında taşmayı azaltmak için alanlar kendi içinde kaydırılabilir.
