"use client";

import { useState, useEffect } from "react";

import WeatherEffects from "@/components/layout/WeatherEffects";
import HeroCard from "@/components/weather/HeroCard";
import SearchBar from "@/components/weather/SearchBar";
import WeatherStats from "@/components/weather/WeatherStats";
import HourlyForecast from "@/components/weather/HourlyForecast";
import TemperatureChart from "@/components/charts/TemperatureChart";
import SunCard from "@/components/weather/SunCard";
import WeeklyForecast from "@/components/weather/WeeklyForecast";

import Navbar from "@/components/layout/Navbar";
import Background from "@/components/layout/Background";

import {
  getCurrentWeather,
  getForecast,
  getAQI,
  getWeatherByCoords,
  getForecastByCoords,
} from "@/lib/weather";

export default function Home() {
  const [city, setCity] = useState("Bhopal");

  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [aqi, setAQI] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  async function search() {
    try {
      setLoading(true);

      const current = await getCurrentWeather(city);
      setWeather(current);

      const forecastData = await getForecast(city);
      setForecast(forecastData);

      const aqiData = await getAQI(
        current.coord.lat,
        current.coord.lon
      );

      setAQI(aqiData);
    } catch (error) {
      console.error(error);
      alert("City not found");
    } finally {
      setLoading(false);
    }
  }

  async function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);

          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const current = await getWeatherByCoords(lat, lon);
          setWeather(current);

          setCity(current.name);

          const forecastData = await getForecastByCoords(lat, lon);
          setForecast(forecastData);

          const aqiData = await getAQI(lat, lon);
          setAQI(aqiData);
        } catch (error) {
          console.error(error);
          alert("Unable to fetch location weather.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        alert("Location permission denied.");
      }
    );
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <Background
       condition={weather?.weather?.[0]?.main}
       icon={weather?.weather?.[0]?.icon}
      />
      <WeatherEffects
        condition={weather?.weather?.[0]?.main}
      />

      <main className="max-w-7xl mx-auto px-6 pb-16">
        <Navbar />

        <SearchBar
          city={city}
          setCity={setCity}
          search={search}
          getCurrentLocation={getCurrentLocation}
        />

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="text-white text-2xl font-semibold animate-pulse">
              Loading Weather...
            </div>
          </div>
        ) : (
          weather && (
            <>
              <HeroCard weather={weather} />

              <WeatherStats
                weather={weather}
                aqi={aqi}
              />

              <HourlyForecast
                forecast={forecast}
              />

              <TemperatureChart
                forecast={forecast}
              />

              <SunCard
                weather={weather}
              />

              <WeeklyForecast
                forecast={forecast}
              />
            </>
          )
        )}
      </main>
    </>
  );
}