import DetailedWeather from "../components/Home/detailedWeather";
import HourlyReport from "../components/Home/HourlyReport";
import WeeklyReport from "../components/Home/WeeklyReport";

const Home = () => {
  return (
    <div className="items-center min-h-screen bg-gray-900 text-white">
      <DetailedWeather />
      <HourlyReport />
      <WeeklyReport />
    </div>
  );
};

export default Home;
