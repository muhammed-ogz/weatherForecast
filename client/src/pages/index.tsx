import { useEffect, useState } from "react";
import DetailedInfo from "../components/Home/DetailedInfo";
import DetailedWeather from "../components/Home/DetailedWeather";
import HourlyReport from "../components/Home/HourlyReport";
import WeeklyReport from "../components/Home/WeeklyReport";

type WeatherApiResponse = {
  city: string;
  weather: {
    Temperature: { Metric: { Value: number; Unit: string } };
    PrecipitationSummary: { PastHour: { Metric: { Value: number } } };
    WeatherIcon: number;
  };
};

const DashboardLayout = () => {
  // Başlangıçta Istanbul, sonradan SearchBar ile setCity yapılacak
  const [city] = useState<string>("Istanbul");
  const [data, setData] = useState<WeatherApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `http://localhost:5000/weather?city=${encodeURIComponent(city)}`
        );
        if (!res.ok) throw new Error(res.statusText);
        const json: WeatherApiResponse = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // city değiştiğinde yeniden fetch eder

  if (error) return <div className="text-red-400 p-4">{error}</div>;
  if (loading || !data)
    return <div className="text-white p-4">Veri yükleniyor...</div>;

  const precipitationChance = Math.min(
    100,
    Math.round(data.weather.PrecipitationSummary.PastHour.Metric.Value * 10)
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-4 sm:px-6 xl:px-20 rounded-xl">
      {/* Sol Panel */}
      <div className="xl:col-span-1 space-y-4 w-full">
        <DetailedWeather
          city={data.city}
          temperature={{
            value: data.weather.Temperature.Metric.Value,
            unit: data.weather.Temperature.Metric.Unit,
          }}
          precipitationChance={precipitationChance}
          weatherIconId={data.weather.WeatherIcon}
        />

        <HourlyReport />

        <DetailedInfo weather={data.weather as any} />
      </div>

      {/* Sağ Panel */}
      <div className="xl:col-span-2">
        <WeeklyReport city={city} />
      </div>
    </div>
  );
};

export default DashboardLayout;
