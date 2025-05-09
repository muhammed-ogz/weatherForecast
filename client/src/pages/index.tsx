import DetailedInfo from "../components/Home/DetailedInfo";
import DetailedWeather from "../components/Home/DetailedWeather";
import HourlyReport from "../components/Home/HourlyReport";
import WeeklyReport from "../components/Home/WeeklyReport";

const DashboardLayout = () => {
  return (
    <div
      className="
        grid 
        grid-cols-1 xl:grid-cols-2 
        gap-4  
        px-4 sm:px-6 xl:px-20  
        justify-items-center xl:justify-items-start 
        rounded-xl"
    >
      {/* Sol Panel */}
      <div className="xl:col-span-1 space-y-4 w-full">
        <DetailedWeather />
        <HourlyReport />
        <DetailedInfo />
      </div>

      {/* Sağ Panel */}
      <div className="xl:col-span-2">
        <WeeklyReport />
      </div>
    </div>
  );
};

export default DashboardLayout;
