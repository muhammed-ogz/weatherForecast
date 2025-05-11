import { useEffect, useState } from "react";
import { FaSun, FaTemperatureHigh } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

type WeatherData = {
  RealFeelTemperature: {
    Metric: {
      Value: number;
      Unit: string;
    };
    Imperial: {
      Value: number;
      Unit: string;
    };
  };
  WeatherText: string;
  RelativeHumidity: number;
  Wind: {
    Speed: {
      Metric: {
        Value: number;
        Unit: string;
      };
      Imperial: {
        Value: number;
        Unit: string;
      };
    };
  };
};

const DetailedInfo = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_KEY = import.meta.env.REACT_APP_ACCUWEATHER_API_KEY; // AccuWeather API anahtarını buraya ekleyin
  const LOCATION_KEY = "318251"; // İstanbul'un locationKey değeri

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://dataservice.accuweather.com/currentconditions/v1/${LOCATION_KEY}?apikey=${API_KEY}&language=tr-tr`
        );
        const data = await response.json();
        setWeatherData(data[0]);
      } catch (error) {
        console.error("Hava durumu verisi alınamadı:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weatherData) {
    return <div className="text-white">Veriler yükleniyor...</div>;
  }

  return (
    <div
      className="
        relative 
        w-full sm:w-auto
        max-w-3xl 
        bg-gray-700 
        rounded-4xl 
        shadow-lg 
        shadow-black 
        p-4 sm:p-6
      "
    >
      <div className="text-lg sm:text-xl text-white mb-4">Detaylı bilgi</div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-600 rounded-lg p-3 sm:p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center text-gray-300 text-xs sm:text-base mb-2">
            <FaTemperatureHigh className="mr-2 text-base sm:text-xl" />
            <span>Hissedilen Sıcaklık</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white">
            {weatherData.RealFeelTemperature.Metric.Value}°C
          </div>
        </div>

        <div className="bg-gray-600 rounded-lg p-3 sm:p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center text-gray-300 text-xs sm:text-base mb-2">
            <FaSun className="mr-2 text-base sm:text-xl" />
            <span>Hava Durumu</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white">
            {weatherData.WeatherText}
          </div>
        </div>

        <div className="bg-gray-600 rounded-lg p-3 sm:p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center text-gray-300 text-xs sm:text-base mb-2">
            <WiHumidity className="mr-2 text-lg sm:text-2xl" />
            <span>Nem Oranı</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white">
            {weatherData.RelativeHumidity}%
          </div>
        </div>

        <div className="bg-gray-600 rounded-lg p-3 sm:p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center text-gray-300 text-xs sm:text-base mb-2">
            <GiWindsock className="mr-2 text-base sm:text-xl" />
            <span>Rüzgar</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white">
            {weatherData.Wind.Speed.Metric.Value} km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
