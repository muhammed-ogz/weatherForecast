import React from "react";
import { FaSun, FaTemperatureHigh } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

export interface WeatherType {
  LocalObservationDateTime?: string;
  WeatherText: string;
  Temperature: {
    Metric: { Value: number; Unit: string };
    Imperial: { Value: number; Unit: string };
  };
  RealFeelTemperature: {
    Metric: { Value: number; Unit: string };
    Imperial: { Value: number; Unit: string };
  };
  RelativeHumidity: number;
  Wind: {
    Speed: {
      Metric: { Value: number; Unit: string };
      Imperial: { Value: number; Unit: string };
    };
  };
}

interface DetailedInfoProps {
  weather: WeatherType;
}

const DetailedInfo: React.FC<DetailedInfoProps> = ({ weather }) => {
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
        {/* Hissedilen Sıcaklık */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <FaTemperatureHigh className="mr-2" />
            Hissedilen
          </div>
          <div className="text-white text-xl font-bold">
            {weather.RealFeelTemperature.Metric.Value}
            {weather.RealFeelTemperature.Metric.Unit}
          </div>
        </div>

        {/* Gerçek Hava Durumu */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <FaSun className="mr-2" />
            Durum
          </div>
          <div className="text-white text-xl font-bold">
            {weather.WeatherText}
          </div>
        </div>

        {/* Nem */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <WiHumidity className="mr-2" />
            Nem
          </div>
          <div className="text-white text-xl font-bold">
            {weather.RelativeHumidity}%
          </div>
        </div>

        {/* Rüzgar */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center text-gray-300 mb-1">
            <GiWindsock className="mr-2" />
            Rüzgar
          </div>
          <div className="text-white text-xl font-bold">
            {weather.Wind.Speed.Metric.Value}
            {weather.Wind.Speed.Metric.Unit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
