import { useEffect, useState } from "react";

interface AirQualityHour {
  hour: string; // "14:00"
  aqi: number; // 1–5
  pm2_5: number; // µg/m³
}

const AirPollution = () => {
  const [data, setData] = useState<AirQualityHour[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState("Istanbul");
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        setError(null);
        const res = await fetch(
          `http://localhost:5000/airpollution-hourly?city=${encodeURIComponent(
            city
          )}`
        );
        if (!res.ok) throw new Error(`API error ${res.status}`);
        const json = await res.json();

        // Gelen diziyi kontrol et
        if (!Array.isArray(json)) {
          throw new Error("Geçersiz API yanıtı: bir dizi bekleniyordu");
        }

        // İlk 6 saati al
        const list = json.slice(0, 6).map((item) => ({
          hour: item.time, // Saat
          aqi: item.aqi, // AQI
          pm2_5: item.pm2_5, // PM2.5
        }));

        setData(list);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Bilinmeyen bir hata oluştu");
      }
    };

    fetchAirQuality();
  }, [city]);

  if (error) {
    return (
      <div className="bg-red-600 text-white p-4 rounded-xl">
        Hava kirliliği verisi alınamadı: {error}
      </div>
    );
  }

  if (!data.length) {
    return <div className="text-white p-4">Veri yükleniyor...</div>;
  }

  // AQI tanımı
  const aqiText = (aqi: number) => {
    switch (aqi) {
      case 1:
        return "İyi";
      case 2:
        return "Orta";
      case 3:
        return "Hassas"; // duyarlı gruplar
      case 4:
        return "Kötü";
      case 5:
        return "Çok Kötü";
      default:
        return "Bilinmiyor";
    }
  };

  return (
    <div
      className="
        relative  
        w-full 
        max-w-3xl 
        bg-gray-700 
        rounded-4xl  
        p-6
      "
    >
      <div className="text-lg font-semibold text-white mb-4">
        Saatlik Hava Kirliliği (AQI)
      </div>
      <div className="flex justify-between overflow-x-auto">
        <ul className="flex space-x-4 sm:space-x-6">
          {data.map((hourData, idx) => (
            <li
              key={idx}
              className="
                flex 
                flex-col 
                items-center 
                justify-center 
                min-w-[70px] 
                sm:w-23 
                h-35 
                m-1 
                bg-gray-600 
                rounded-lg 
                text-white 
                p-4 
                shadow-md
              "
            >
              <div className="text-xs text-gray-400 mb-2 sm:text-sm">
                {hourData.hour}
              </div>
              <div className="text-sm font-bold mb-1">AQI: {hourData.aqi}</div>
              <div className="text-xs text-gray-300 mb-2">
                {aqiText(hourData.aqi)}
              </div>
              <div className="text-sm">
                PM2.5: {Math.round(hourData.pm2_5)} µg/m³
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AirPollution;
