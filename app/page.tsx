"use client";

import { useState, useEffect } from "react";
import TemperatureChart from "@/components/charts/TemperatureChart";
import WeatherStats from "@/components/weather/WeatherStats";
import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import SearchBar from "@/components/weather/SearchBar";
import HeroCard from "@/components/weather/HeroCard";

import { getWeather } from "@/lib/weather";

export default function Home() {
  const [city, setCity] = useState("Bhopal");
  const [weather, setWeather] = useState<any>(null);

  async function search() {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
      alert("City not found");
    }
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <Background />

      <main className="max-w-7xl mx-auto px-6 pb-16">
        <Navbar />

        <SearchBar
          city={city}
          setCity={setCity}
          search={search}
        />

        {weather && (
  <>
    <HeroCard weather={weather} />

    <WeatherStats weather={weather} />

    <TemperatureChart />
  </>
)}
      </main>
    </>
  );
}