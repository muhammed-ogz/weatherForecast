import type { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex bg-gray-900">
        <div className="flex pl-6 justify-center items-center">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
