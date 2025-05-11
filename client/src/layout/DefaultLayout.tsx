import type { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/Sidebar/MobileSidebar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block ml-5 mt-10">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
        <MobileSidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 pb-16">{children}</main>
        <footer className="text-center text-gray-500 py-4">
          {new Date().getFullYear()}© Powered by Accuweather
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
