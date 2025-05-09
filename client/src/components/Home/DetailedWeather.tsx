import severeThunderstorm from "../../assets/animatedIcons/severe-thunderstorm.svg";

const DetailedWeather = () => {
  return (
    <div
      className={`
      relative 
      w-full sm:w-180 max-w-4xl 
      min-h-40 xl:min-h-60 sm:min-h-40 
      text-white  
      rounded-4xl 
      sm:p-6 
      shadow-lg
      `}
    >
      {/* Sol üst: Şehir */}
      <div className="absolute top-4 left-4 text-xl sm:text-3xl font-semibold">
        İstanbul
      </div>

      {/* Şehir altındaki yağış ihtimali */}
      <div className="absolute top-16 left-4 text-xs sm:text-sm text-gray-400">
        Yağmur ihtimali: %100
      </div>

      {/* Sağ üst: Hava ikonu */}
      <img
        src={severeThunderstorm}
        alt="Weather Icon"
        className="absolute top-4 right-6 sm:right-10 w-16 h-16 sm:w-40 sm:h-40"
      />

      {/* Sol alt: Sıcaklık */}
      <div className="absolute bottom-4 left-4 text-xl sm:text-4xl font-bold">
        12°C
      </div>
    </div>
  );
};

export default DetailedWeather;
