import { useEffect, useState } from "react";
import { getIconByCode } from "../../icons";

interface WeeklyForecast {
  date: string;
  weatherIcon: string;
  weatherMain: string;
  description: string;
}

// İkon açıklama eşleştirmesi
const weatherIconText: Record<string, string> = {
  Clear: "Güneşli",
  Clouds: "Bulutlu",
  Rain: "Yağmurlu",
  Snow: "Karlı",
  Thunderstorm: "Gök Gürültülü",
  Fog: "Sisli",
  "Partly Cloudy": "Parçalı Bulutlu",
  Sunny: "Güneşli",
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
        lg:h-[500px]
      "
    >
      <h3 className="text-gray-400 text-xl sm:text-2xl mb-4">
        5 Günlük Tahmin
      </h3>
      <ul className="divide-y divide-gray-500 text-white max-h-[400px] overflow-y-auto">
        {forecast.map((f, i) => {
          const dayName = new Date(f.date).toLocaleDateString("tr-TR", {
            weekday: "long",
          });
          const desc = weatherIconText[f.weatherMain] || f.description;
          const iconSrc = getIconByCode(f.weatherIcon);

          return (
            <li key={i} className="flex items-center justify-between py-3">
              {/* Gün adı */}
              <div className="w-1/4 text-sm sm:text-base">{dayName}</div>

              {/* İkon */}
              <img
                src={iconSrc}
                alt={desc}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />

              {/* Hava durumu metni */}
              <div className="flex-1 text-sm sm:text-base text-gray-200 ml-4">
                {desc}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WeeklyReport;
