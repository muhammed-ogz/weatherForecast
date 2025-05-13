import { useEffect, useState } from "react";

// Haftalık tahmin için API’den dönecek tip
interface WeeklyForecast {
  date: string; // ISO string örn. "2025-05-15T07:00:00+03:00"
  WeatherIcon: number;
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: { Value: number; Unit: string };
      Maximum: { Value: number; Unit: string };
    };
  };
}

// AccuWeather ikonu URL’sini oluşturur
const getAccuIcon = (iconId: number): string => {
  const id = String(iconId).padStart(2, "0");
  return `https://developer.accuweather.com/sites/default/files/${id}-s.png`;
};

interface WeeklyReportProps {
  city: string;
}

const WeeklyReport: React.FC<WeeklyReportProps> = ({ city }) => {
  const [forecast, setForecast] = useState<WeeklyForecast[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/weather-weekly?city=${encodeURIComponent(
            city
          )}`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data: WeeklyForecast[] = await res.json();
        setForecast(data);
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, [city]);

  if (error) return <div className="text-red-400 p-4">{error}</div>;

  return (
    <div
      className="
        relative
        w-full
        min-h-100
        sm:min-h-56
        sm:absolute sm:right-10 sm:top-6 xl:top-30
        sm:m-4
        mt-10 sm:mt-0
        md:w-3/4 lg:w-1/2 xl:w-[600px]
        bg-gray-700 rounded-4xl shadow-lg
        p-6
        lg:h-[600px]
      "
    >
      <h3 className="text-gray-400 text-xl sm:text-2xl mb-4">
        7 Günlük Tahmin
      </h3>
      <ul className="divide-y divide-gray-500 text-white max-h-[400px] sm:max-h-[650px] overflow-y-auto">
        {forecast.map((f, i) => {
          // Gün adını TR olarak al
          const dayName = new Date(f.date).toLocaleDateString("tr-TR", {
            weekday: "long",
          });
          // İkon URL’si
          const iconUrl = getAccuIcon(f.WeatherIcon);
          // Min / Max
          const { Minimum, Maximum } = f.TemperatureSummary.Past6HourRange;
          return (
            <li
              key={i}
              className="flex flex-wrap items-center justify-between py-3 gap-4"
            >
              <div className="flex-shrink-0 text-sm sm:text-base w-20 sm:w-28">
                {dayName}
              </div>
              <img src={iconUrl} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="flex-shrink-0 text-sm sm:text-base text-right w-12 sm:w-16">
                {Math.round(Minimum.Value)}° / {Math.round(Maximum.Value)}°
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeeklyReport;
