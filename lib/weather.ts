const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0";

// Current Weather by City
export async function getCurrentWeather(city: string) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
}

// 5-Day Forecast by City
export async function getForecast(city: string) {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Forecast unavailable");
  }

  return res.json();
}

// Air Quality Index
export async function getAQI(lat: number, lon: number) {
  const res = await fetch(
    `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("AQI unavailable");
  }

  return res.json();
}

// Convert City → Coordinates
export async function getCoordinates(city: string) {
  const res = await fetch(
    `${GEO_URL}/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Coordinates unavailable");
  }

  return res.json();
}

// Current Weather by Coordinates
export async function getWeatherByCoords(lat: number, lon: number) {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Location weather failed");
  }

  return res.json();
}

// Forecast by Coordinates
export async function getForecastByCoords(lat: number, lon: number) {
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Forecast unavailable");
  }

  return res.json();
}