const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export async function getWeather(city: string) {
  if (!API_KEY) {
    throw new Error("Missing OpenWeather API Key");
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "City not found");
  }

  return await res.json();
}