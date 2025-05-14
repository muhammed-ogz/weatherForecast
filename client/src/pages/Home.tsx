import { useEffect, useState } from "react";
import AirPollution from "../components/Home/AirPollution";
import DetailedInfo from "../components/Home/DetailedInfo";
import DetailedWeather from "../components/Home/DetailedWeather";
import WeeklyReport from "../components/Home/WeeklyReport";
import { useCity } from "../context/CityContext"; // CityContext'ten city değerini alıyoruz

type WeatherApiResponse = {
  city: string;
  coords: { lat: number; lon: number };
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  temperature: {
    current: number;
    feels_like: number;
    min: number;
    max: number;
  };
  humidity: number;
  pressure: number;
  wind: { speed: number; deg: number };
  precipitation: number; // mm
};
const Home: React.FC<{ city: string }> = () => {
  const [data, setData] = useState<WeatherApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { city } = useCity(); // city değerini CityContext'ten alıyoruz
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      console.log("Şehir: ", city); // city'yi buradaki console.log ile kontrol edelim
      try {
        const res = await fetch(
          `http://localhost:5000/weather?city=${encodeURIComponent(city)}`
        );
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();

        const formattedData: WeatherApiResponse = {
          city: json.name,
          coords: { lat: json.coord.lat, lon: json.coord.lon },
          weather: {
            main: json.weather[0].main,
            description: json.weather[0].description,
            icon: json.weather[0].icon,
          },
          temperature: {
            current: json.main.temp,
            feels_like: json.main.feels_like,
            min: json.main.temp_min,
            max: json.main.temp_max,
          },
          humidity: json.main.humidity,
          pressure: json.main.pressure,
          wind: { speed: json.wind.speed, deg: json.wind.deg },
          precipitation: json.rain?.["1h"] || 0,
        };

        setData(formattedData);
      } catch (err: any) {
        console.error("Hata:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]); // city değiştiğinde istek yapılacak

  if (loading || !data)
    return <div className="text-white p-4">Veri yükleniyor...</div>;

  const precipitationChance = Math.min(
    100,
    Math.round((data.precipitation / 5) * 100)
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-4 sm:px-6 xl:px-20 rounded-xl">
      <div className="xl:col-span-1 space-y-4 w-full">
        <DetailedWeather
          city={data.city}
          temperature={{
            value: data.temperature.current,
            unit: "°C",
          }}
          precipitationChance={precipitationChance}
          weatherIconCode={data.weather.icon}
        />
        <AirPollution />
        <DetailedInfo
          weather={{
            description: data.weather.description,
            feels_like: data.temperature.feels_like,
            humidity: data.humidity,
            windSpeed: data.wind.speed,
            windUnit: "m/s",
          }}
        />
      </div>
      <div className="xl:col-span-2">
        <WeeklyReport city={city} />
      </div>
    </div>
  );
};

export default Home;
