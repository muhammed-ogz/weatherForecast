import { FaSun, FaTemperatureHigh } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

const DetailedInfo = () => {
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
          <div className="text-lg sm:text-2xl font-bold text-white">8°C</div>
        </div>

        <div className="bg-gray-600 rounded-lg p-3 sm:p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center text-gray-300 text-xs sm:text-base mb-2">
            <WiHumidity className="mr-2 text-lg sm:text-2xl" />
            <span>Nem Oranı</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white">12%</div>
        </div>

        <div className="bg-gray-600 rounded-lg p-3 sm:p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center text-gray-300 text-xs sm:text-base mb-2">
            <FaSun className="mr-2 text-base sm:text-xl" />
            <span>UV İndex</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white">1</div>
        </div>

        <div className="bg-gray-600 rounded-lg p-3 sm:p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center text-gray-300 text-xs sm:text-base mb-2">
            <GiWindsock className="mr-2 text-base sm:text-xl" />
            <span>Rüzgar</span>
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white">
            45 km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
