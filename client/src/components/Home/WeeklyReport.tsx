import { useEffect, useState } from "react";
import clearDay from "../../assets/animatedIcons/clear-day.svg";
import cloudy from "../../assets/animatedIcons/cloudy.svg";
import fog from "../../assets/animatedIcons/fog.svg";
import rainy1 from "../../assets/animatedIcons/rainy-1.svg";
import scatteredThunderstormsDay from "../../assets/animatedIcons/scattered-thunderstorms-day.svg";
import snowy1 from "../../assets/animatedIcons/snowy-1.svg";

interface Forecast {
  day: string;
  weather: string;
  temperature: number;
}

const fetchForecastData = async (): Promise<Forecast[]> => {
  return [
    { day: "Pazartesi", weather: "Güneşli", temperature: 25 },
    { day: "Salı", weather: "Yağmurlu", temperature: 18 },
    { day: "Çarşamba", weather: "Bulutlu", temperature: 20 },
    { day: "Perşembe", weather: "Gök Gürültülü", temperature: 22 },
    { day: "Cuma", weather: "Rüzgarlı", temperature: 19 },
    { day: "Cumartesi", weather: "Karlı", temperature: -2 },
    { day: "Pazar", weather: "Sisli", temperature: 10 },
  ];
};

const WeeklyReport = () => {
  const [forecastData, setForecastData] = useState<Forecast[]>([]);

  useEffect(() => {
    const getForecastData = async () => {
      const data = await fetchForecastData();
      setForecastData(data);
    };
    getForecastData();
  }, []);

  const getWeatherIcon = (weather: string): string => {
    switch (weather) {
      case "Güneşli":
        return clearDay;
      case "Yağmurlu":
        return rainy1;
      case "Bulutlu":
        return cloudy;
      case "Sisli":
        return fog;
      case "Karlı":
        return snowy1;
      case "Gök Gürültülü":
        return scatteredThunderstormsDay;
      default:
        return clearDay;
    }
  };

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
        md:w-3/4 lg:w-3/4 xl:w-200 
        bg-gray-700 rounded-4xl shadow-lg
        p-6
        lg:h-[600px]
      "
    >
      <h3 className="text-gray-400 text-xl sm:text-2xl mb-4">
        7 Günlük Tahmin
      </h3>
      <ul className="divide-y divide-gray-500 text-white max-h-[400px] sm:max-h-[650px] overflow-y-auto">
        {forecastData.map((forecast, index) => (
          <li
            key={index}
            className="flex flex-wrap items-center justify-between py-3 gap-4"
          >
            <div className="flex-shrink-0 text-sm sm:text-base w-20 sm:w-28">
              {forecast.day}
            </div>
            <img
              src={getWeatherIcon(forecast.weather)}
              alt={forecast.weather}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="flex-grow text-sm sm:text-base text-center">
              {forecast.weather}
            </div>
            <div className="flex-shrink-0 text-sm sm:text-base text-right w-12 sm:w-16">
              {forecast.temperature}°C
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyReport;
