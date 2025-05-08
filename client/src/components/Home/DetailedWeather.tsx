import severeThunderstorm from "../../assets/animatedIcons/severe-thunderstorm.svg";
const DetailedWeather = () => {
  return (
    <div className="relative flex justify-between left-0 ml-5 w-200 h-50 rounded-4xl p-8">
      <div className="text-4xl ml-1 leading-normal inline-block">İstanbul</div>
      <div className="absolute ml-1 mt-13 text-sm text-gray-400">
        Yağmur ihtimali : %100
      </div>
      <img
        src={severeThunderstorm}
        alt="Weather Icon"
        className="w-40 h-40 mr-0"
      />
      <div className="absolute bottom-0 left-0 m-9 text-4xl">12°C</div>
    </div>
  );
};

export default DetailedWeather;
