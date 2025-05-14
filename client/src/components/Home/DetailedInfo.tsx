import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

interface OwmWeatherInfo {
  description: string;
  feels_like: number;
  humidity: number;
  windSpeed: number;
  windUnit: string; // örn. "m/s"
}

interface DetailedInfoProps {
  weather: OwmWeatherInfo;
}

const DetailedInfo: React.FC<DetailedInfoProps> = ({ weather }) => {
  return (
    <div className="relative w-full sm:w-auto max-w-3xl bg-gray-700 rounded-4xl shadow-lg shadow-black p-4 sm:p-6">
      <div className="text-lg sm:text-xl text-white mb-4">Detaylı bilgi</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Hissedilen Sıcaklık */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <FaTemperatureHigh className="mr-2" />
            Hissedilen
          </div>
          <div className="text-white text-xl font-bold">
            {weather.feels_like}
            {"°C"}
          </div>
        </div>

        {/* Durum */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <FaTemperatureHigh className="mr-2" />
            Durum
          </div>
          <div className="text-white text-xl font-bold">
            {weather.description}
          </div>
        </div>

        {/* Nem */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <WiHumidity className="mr-2" />
            Nem
          </div>
          <div className="text-white text-xl font-bold">
            {weather.humidity}%
          </div>
        </div>

        {/* Rüzgar */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <GiWindsock className="mr-2" />
            Rüzgar
          </div>
          <div className="text-white text-xl font-bold">
            {weather.windSpeed}
            {weather.windUnit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
