import { useEffect, useState } from "react";
import clearDay from "../../assets/animatedIcons/clear-day.svg";
import cloudy from "../../assets/animatedIcons/cloudy.svg";
import fog from "../../assets/animatedIcons/fog.svg";
import rainy1 from "../../assets/animatedIcons/rainy-1.svg";
import scatteredThunderstormsDay from "../../assets/animatedIcons/scattered-thunderstorms-day.svg";
import snowy1 from "../../assets/animatedIcons/snowy-1.svg";

interface HourlyForecast {
  hour: string;
  weather: string;
  temperature: number;
}

const fetchForecastData = async (): Promise<HourlyForecast[]> => {
  return [
    { hour: "09:00", weather: "Güneşli", temperature: 22 },
    { hour: "12:00", weather: "Güneşli", temperature: 24 },
    { hour: "15:00", weather: "Bulutlu", temperature: 25 },
    { hour: "17:00", weather: "Yağmurlu", temperature: 21 },
    { hour: "19:00", weather: "Gök Gürültülü", temperature: 20 },
    { hour: "21:00", weather: "Karlı", temperature: -1 },
    { hour: "23:00", weather: "Sisli", temperature: 10 },
  ];
};

const HourlyReport = () => {
  const [forecastData, setForecastData] = useState<HourlyForecast[]>([]);

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
        w-full 
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
                <div className="text-xs text-gray-400 mb-3 sm:text-sm font-medium">
                  {forecast.hour}
                </div>
                <img
                  src={weatherIcon}
                  alt={forecast.weather}
                  className="w-12 h-12 sm:w-14 sm:h-14 mb-2"
                />
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
