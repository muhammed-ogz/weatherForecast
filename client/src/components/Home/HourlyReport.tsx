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

const HourlyReport = () => {
  const [forecastData, setForecastData] = useState<Forecast[]>([]);

  useEffect(() => {
    const getForecastData = async () => {
      const data = await fetchForecastData();
      setForecastData(data);
    };
    getForecastData();
  }, []);

  return (
    <div
      className="
        relative  
        w-200 
        max-w-3xl 
        bg-gray-700 
        rounded-4xl  
        p-6
      "
    >
      <div className="text-lg font-semibold text-white mb-4">
        Saatlik tahmin
      </div>
      <div className="flex justify-between overflow-x-auto">
        <ul className="flex space-x-4 sm:space-x-6">
          {forecastData.map((forecast, index) => {
            let weatherIcon = clearDay;

            // Hava durumuna göre ikon belirleme
            switch (forecast.weather) {
              case "Güneşli":
                weatherIcon = clearDay;
                break;
              case "Yağmurlu":
                weatherIcon = rainy1;
                break;
              case "Bulutlu":
                weatherIcon = cloudy;
                break;
              case "Sisli":
                weatherIcon = fog;
                break;
              case "Karlı":
                weatherIcon = snowy1;
                break;
              case "Gök Gürültülü":
                weatherIcon = scatteredThunderstormsDay;
                break;
              default:
                weatherIcon = clearDay;
            }

            return (
              <li
                key={index}
                className="
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  min-w-[70px] sm:w-23 
                  h-35 
                  m-1 
                  bg-gray-600 
                  rounded-lg 
                  text-white 
                  p-4 
                  shadow-md
                "
              >
                <img
                  src={weatherIcon}
                  alt={forecast.weather}
                  className="w-12 h-12 sm:w-14 sm:h-14 mb-2"
                />
                <div className="text-xs sm:text-sm font-medium">
                  {forecast.day}
                </div>
                <div className="text-sm sm:text-lg font-bold">
                  {forecast.temperature}°C
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HourlyReport;
