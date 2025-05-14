import { Request, Response, Router } from "express";
import { Logger } from "pino";
import { INTERNAL_SERVER_ERROR_API_ERROR } from "../api";

export class WeatherController {
  constructor(private readonly logger: Logger) {}

  public registerRoutes(router: Router) {
    router.get('/weather', this.getWeatherInformation.bind(this));
    router.get('/weather-weekly', this.getWeeklyWeather.bind(this));
    router.get('/airpollution-hourly', this.getHourlyAirPollution.bind(this));
  }

  // --- Mevcut tekil hava durumu ---
  public async getWeatherInformation(req: Request, res: Response) {
    const city = (req.query.city as string) || "Istanbul";
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    if (!apiKey) {
      this.logger.error("OpenWeatherMap API key is missing");
      return res.status(500).json({ error: INTERNAL_SERVER_ERROR_API_ERROR });
    }
    try {
      const owmRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
      );
      if (!owmRes.ok) {
        const txt = await owmRes.text();
        this.logger.error(`OpenWeatherMap weather error (${owmRes.status}): ${txt}`);
        return res.status(owmRes.status).json({ error: "Failed to fetch weather data" });
      }
      const weatherData = await owmRes.json();
      return res.json(weatherData);
    } catch (error) {
      this.logger.error("Unexpected error fetching weather:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // --- 5 Günlük Tahmin endpoint’i ---
  public async getWeeklyWeather(req: Request, res: Response) {
    const city = (req.query.city as string) || "Istanbul";
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    if (!apiKey) {
      this.logger.error("OpenWeatherMap API key is missing");
      return res.status(500).json({ error: INTERNAL_SERVER_ERROR_API_ERROR });
    }
    try {
      // 1) 5 günlük / 3 saatlik tahmin verisini çek
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
      );
      if (!forecastRes.ok) {
        const txt = await forecastRes.text();
        this.logger.error(`Forecast API error (${forecastRes.status}): ${txt}`);
        return res.status(forecastRes.status).json({ error: "Failed to fetch 5-day forecast" });
      }
      const forecastData = await forecastRes.json();

      // 2) Listeden ilk 5 günü temsil edecek şekilde özet çıkar
      //    (Her günün ilk 3 saatlik dilimini alıyoruz)
      const dailyMap: Record<string, any> = {};
      for (const entry of forecastData.list as any[]) {
        const date = entry.dt_txt.split(' ')[0];
        if (!dailyMap[date]) {
          dailyMap[date] = {
            date: new Date(entry.dt * 1000).toISOString(),
            weatherIcon: entry.weather[0].icon,
            weatherMain: entry.weather[0].main,
            description: entry.weather[0].description,
            tempMin: entry.main.temp_min,
            tempMax: entry.main.temp_max
          };
        } else {
          // Gün içindeki min/max güncellemeleri
          dailyMap[date].tempMin = Math.min(dailyMap[date].tempMin, entry.main.temp_min);
          dailyMap[date].tempMax = Math.max(dailyMap[date].tempMax, entry.main.temp_max);
        }
      }

      // Map’i array’e çevirip en fazla 5 gün al
      const dailyArray = Object.values(dailyMap).slice(0, 5);

      return res.json(dailyArray);
    } catch (err) {
      this.logger.error("Unexpected error fetching 5-day forecast:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // --- Saatlik hava durumu verileri ---
  public async getHourlyAirPollution(req: Request, res: Response) {
    const lat = req.query.lat || 41.0351; // Varsayılan: İstanbul
    const lon = req.query.lon || 28.9833;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    if (!apiKey) {
      this.logger.error("OpenWeatherMap API key is missing");
      return res.status(500).json({ error: INTERNAL_SERVER_ERROR_API_ERROR });
    }

    try {
      // API isteği
      const pollutionRes = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      if (!pollutionRes.ok) {
        const txt = await pollutionRes.text();
        this.logger.error(`Air Pollution API error (${pollutionRes.status}): ${txt}`);
        return res.status(pollutionRes.status).json({ error: "Failed to fetch air pollution data" });
      }

      const pollutionData = await pollutionRes.json();

      // İlk 6 saati işleyin
      const hourlyData = (pollutionData.list as any[]).slice(0, 6).map((entry) => ({
        time: new Date(entry.dt * 1000).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        aqi: entry.main.aqi, // 1–5 arası hava kalitesi indeksi
        pm2_5: entry.components.pm2_5, // PM2.5 değeri
      }));

      return res.json(hourlyData);
    } catch (err) {
      this.logger.error("Unexpected error fetching air pollution data:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

}
