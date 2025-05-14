// src/icons.ts
// Clear-day/night
import { default as clearDay, default as defaultIcon } from "./assets/animatedIcons/clear-day.svg";
import clearNight from "./assets/animatedIcons/clear-night.svg";
// Cloudy variants
import cloudy1Day from "./assets/animatedIcons/cloudy-1-day.svg";
import cloudy1Night from "./assets/animatedIcons/cloudy-1-night.svg";
import cloudy2Day from "./assets/animatedIcons/cloudy-2-day.svg";
import cloudy2Night from "./assets/animatedIcons/cloudy-2-night.svg";
import cloudy3Day from "./assets/animatedIcons/cloudy-3-day.svg";
import cloudy3Night from "./assets/animatedIcons/cloudy-3-night.svg";
import dust from "./assets/animatedIcons/dust.svg";
// Others
import fogDay from "./assets/animatedIcons/fog-day.svg";
import fogNight from "./assets/animatedIcons/fog-night.svg";
import mist from "./assets/animatedIcons/haze.svg";
// Rain variants
import rainy1Day from "./assets/animatedIcons/rainy-1-day.svg";
import rainy1Night from "./assets/animatedIcons/rainy-1-night.svg";
import rainy2Day from "./assets/animatedIcons/rainy-2-day.svg";
import rainy2Night from "./assets/animatedIcons/rainy-2-night.svg";
import scatteredThunderstormsDay from "./assets/animatedIcons/scattered-thunderstorms-day.svg";
import scatteredThunderstormsNight from "./assets/animatedIcons/scattered-thunderstorms-night.svg";
// Snow variants
import snowy1Day from "./assets/animatedIcons/snowy-1-day.svg";
import snowy1Night from "./assets/animatedIcons/snowy-1-night.svg";

// Map OpenWeatherMap icon codes to SVG imports
export const iconMap: Record<string, string> = {
  "01d": clearDay,
  "01n": clearNight,
  "02d": cloudy1Day,
  "02n": cloudy1Night,
  "03d": cloudy2Day,
  "03n": cloudy2Night,
  "04d": cloudy3Day,
  "04n": cloudy3Night,
  "09d": rainy1Day,
  "09n": rainy1Night,
  "10d": rainy2Day,
  "10n": rainy2Night,
  "11d": scatteredThunderstormsDay,
  "11n": scatteredThunderstormsNight,
  "13d": snowy1Day,
  "13n": snowy1Night,
  "50d": fogDay,
  "50n": fogNight,
  // fallback for additional codes
  mist: mist,
  dust: dust,
};

// Default export fallback
export const getIconByCode = (code: string): string => iconMap[code] || defaultIcon;
