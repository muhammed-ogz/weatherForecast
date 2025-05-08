import type { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex bg-gray-900">
        <div className="pl-6 pt-8 top-0">
          <Sidebar />
        </div>
        <div>
          <Header />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
