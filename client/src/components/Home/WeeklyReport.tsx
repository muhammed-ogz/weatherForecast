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
  return (
    <div className="absolute flex justify-between right-10 top-25 m-4 shadow-lg shadow-black w-110 h-170 bg-gray-700 rounded-4xl p-8">
      <h3 className="text-gray-400 text-xl leading-none inline-block">
        7 Günlük Tahmin
      </h3>
      <div>
        <ul className="absolute left-5 flex mt-10 flex-col items-center justify-center">
          {forecastData.map((forecast, index) => {
            let weatherIcon = clearDay;
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
                className="flex items-center w-95 h-16 m-2 bg-gray-600 rounded-lg p-4"
              >
                <img
                  src={weatherIcon}
                  alt={forecast.weather}
                  className="w-12 h-12 mt-4 mr-4"
                />
                <div className="text-sm">{forecast.day}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WeeklyReport;
