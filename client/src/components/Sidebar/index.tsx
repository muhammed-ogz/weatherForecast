import { FaList, FaMap } from "react-icons/fa";
import { RxHome } from "react-icons/rx";
import { TbSettingsCog } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div className="w-16 fixed rounded-2xl lg:min-h-[670px] min-h[870px] bg-gray-700 text-white p-5 shadow-lg">
      <ul className="list-none opacity-60 p-0 space-y-8">
        <li className="group">
          <a href="/" className="flex flex-col items-center">
            <RxHome className="text-4xl group-hover:text-gray-900 transition-colors duration-300" />
          </a>
        </li>
        <li className="group hover:text-gray-900">
          <a href="/" className="flex flex-col items-center">
            <TiWeatherPartlySunny className="text-xl  transition-colors duration-300" />
            <span className="text-xs mt-1 transition-opacity duration-300">
              Hava Durumu
            </span>
          </a>
        </li>
        <li className="group hover:text-gray-900">
          <a href="/favoriteCities" className="flex flex-col items-center">
            <FaList className="text-xl transition-colors duration-300" />
            <span className="text-xs mt-1 transition-opacity duration-300">
              Şehirler
            </span>
          </a>
        </li>
        <li className="group hover:text-gray-900">
          <a href="/map" className="flex flex-col items-center">
            <FaMap className="text-xl transition-colors duration-300" />
            <span className="text-xs mt-1 transition-opacity duration-300">
              Harita
            </span>
          </a>
        </li>
        <li className="group hover:text-gray-900">
          <a href="/settings" className="flex flex-col items-center">
            <TbSettingsCog className="text-xl transition-colors duration-300" />
            <span className="text-xs mt-1 transition-opacity duration-300">
              Ayarlar
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
