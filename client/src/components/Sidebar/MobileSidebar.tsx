import { FaList, FaMap } from "react-icons/fa";
import { RxHome } from "react-icons/rx";
import { TbSettingsCog } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";

const MobileSidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-700 text-white p-3 shadow-lg z-50 lg:hidden">
      <ul className="flex justify-around items-center">
        <li className="group">
          <a href="/" className="flex flex-col items-center">
            <RxHome className="text-2xl group-hover:text-gray-300 transition-colors duration-300" />
            <span className="text-xs mt-1">Anasayfa</span>
          </a>
        </li>
        <li className="group">
          <a href="/" className="flex flex-col items-center">
            <TiWeatherPartlySunny className="text-2xl group-hover:text-gray-300 transition-colors duration-300" />
            <span className="text-xs mt-1">Hava Durumu</span>
          </a>
        </li>
        <li className="group">
          <a href="/favoriteCities" className="flex flex-col items-center">
            <FaList className="text-2xl group-hover:text-gray-300 transition-colors duration-300" />
            <span className="text-xs mt-1">Şehirler</span>
          </a>
        </li>
        <li className="group">
          <a href="/map" className="flex flex-col items-center">
            <FaMap className="text-2xl group-hover:text-gray-300 transition-colors duration-300" />
            <span className="text-xs mt-1">Harita</span>
          </a>
        </li>
        <li className="group">
          <a href="/settings" className="flex flex-col items-center">
            <TbSettingsCog className="text-2xl group-hover:text-gray-300 transition-colors duration-300" />
            <span className="text-xs mt-1">Ayarlar</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileSidebar;
