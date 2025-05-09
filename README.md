# Weather Forecast App

Bu proje, **ReactJS** kullanılarak geliştirilmiş ve **Accuweather API** ile entegre edilmiş, mobil uyumlu bir hava durumu uygulamasıdır.

## Özellikler

- Güncel hava durumu bilgilerini görüntüleme
- 7 günlük ve saatlik hava tahmini
- Mobil uyumlu tasarım
- Kullanıcı dostu arayüz

## Kullanılan Teknolojiler

- **ReactJS**: Kullanıcı arayüzü geliştirme
- **Accuweather API**: Hava durumu verilerinin sağlanması
- **TailwindCSS**: Mobil uyumlu tasarım

## Kurulum

1. Bu projeyi klonlayın:
  ```bash
  git clone https://github.com/kullaniciAdi/weatherForecast.git
  ```
2. Proje dizinine gidin:
  ```bash
  cd weatherForecast/client
  ```
3. Gerekli bağımlılıkları yükleyin:
  ```bash
  npm install
  ```
4. Accuweather API anahtarınızı `.env` dosyasına ekleyin:
  ```env
  REACT_APP_ACCUWEATHER_API_KEY=your_api_key
  ```
5. Uygulamayı başlatın:
  ```bash
  npm start
  ```

## Kullanım

- Uygulama açıldığında, bulunduğunuz konumun hava durumu otomatik olarak görüntülenir.
- Arama çubuğunu kullanarak farklı şehirlerin hava durumunu görüntüleyebilirsiniz.

## Katkıda Bulunma

Katkıda bulunmak için lütfen bir **pull request** gönderin veya bir **issue** açın.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına göz atabilirsiniz.