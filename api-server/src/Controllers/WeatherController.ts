import { Request, Response, Router } from "express";
import { Logger } from "pino";
import { INTERNAL_SERVER_ERROR_API_ERROR } from "../api";


export class WeatherController {
    public constructor(private readonly logger : Logger) {}
    public registerRoutes(router: Router) {
        router.get('/weather', this.getWeatherInformation.bind(this));
    }

    public async getWeatherInformation(_req: Request, _res: Response) {
        const city = _req.query.city as string || "Istanbul";
        const apiKey = process.env.ACCUWEATHER_API_KEY;
    
        if (!apiKey) {
            this.logger.error("AccuWeather API key is missing");
            return _res.status(500).json({ error: INTERNAL_SERVER_ERROR_API_ERROR });
        }
    
        try {
            // 1. Şehir anahtarını bul
            const locationRes = await fetch(
                `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${encodeURIComponent(city)}`
            );
    
            if (!locationRes.ok) {
                this.logger.error(`Location API error: ${locationRes.statusText}`);
                return _res.status(locationRes.status).json({ error: "Failed to fetch location data" });
            }
    
            const locations = await locationRes.json();
            if (!locations.length) {
                return _res.status(404).json({ error: "City not found" });
            }
            const locationKey = locations[0].Key;
    
            // 2. Hava durumu bilgisini al
            const weatherRes = await fetch(
                `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
            );
    
            if (!weatherRes.ok) {
                this.logger.error(`Weather API error: ${weatherRes.statusText}`);
                return _res.status(weatherRes.status).json({ error: "Failed to fetch weather data" });
            }
    
            const weather = await weatherRes.json();
            return _res.json({
                city: locations[0].LocalizedName,
                weather: weather[0],
            });
        } catch (error) {
            this.logger.error(error);
            return _res.status(500).json({ error: "Internal server error" });
        }
    }
    
}