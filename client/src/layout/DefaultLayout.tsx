import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/Sidebar/MobileSidebar";
import { useCity } from "../context/CityContext";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useCity();

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 min-h-screen">
      <div className="hidden md:block ml-5 mt-10">
        <Sidebar />
      </div>

      <div className="block md:hidden">
        <MobileSidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 pb-16">{children}</main>
        <footer className="text-center text-gray-500 py-4">
          {new Date().getFullYear()}© Powered by OpenWeatherMap
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
