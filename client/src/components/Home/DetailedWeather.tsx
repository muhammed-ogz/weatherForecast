import React from "react";

interface DetailedWeatherProps {
  city: string;
  temperature: {
    value: number;
    unit: string;
  };
  precipitationChance: number; // yüzde 0-100
  weatherIconId: number; // AccuWeather'ın döndürdüğü WeatherIcon ID'si
}

const DetailedWeather: React.FC<DetailedWeatherProps> = ({
  city,
  temperature,
  precipitationChance,
  weatherIconId,
}) => {
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${String(
    weatherIconId
  ).padStart(2, "0")}-s.png`;

  return (
    <div
      className={`
      relative 
      w-full sm:w-180 max-w-4xl 
      min-h-40 xl:min-h-60 sm:min-h-40 
      text-white  
      rounded-4xl 
      sm:p-6 
      shadow-lg
      `}
    >
      {/* Şehir */}
      <div className="absolute top-4 left-4 text-xl sm:text-3xl font-semibold">
        {city}
      </div>

      {/* Yağış İhtimali */}
      <div className="absolute top-12 left-4 text-xs sm:text-sm text-gray-200">
        Yağmur ihtimali: %{precipitationChance}
      </div>

      {/* Hava Durumu İkonu */}
      <img
        src={iconUrl}
        alt="Weather Icon"
        className="absolute right-10 top-1/2 w-35 transform -translate-y-1/2"
      />

      {/* Sıcaklık */}
      <div className="absolute bottom-4 left-7 text-xl sm:text-xl text-gray-400">
        Sıcaklık : {temperature.value}°{temperature.unit}
      </div>
    </div>
  );
};

export default DetailedWeather;
