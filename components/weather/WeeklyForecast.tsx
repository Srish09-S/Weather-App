"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  CloudRain,
  CloudSun,
  Sun,
} from "lucide-react";

interface Props {
  forecast: any;
}

function WeatherIcon({ condition }: { condition: string }) {
  switch (condition) {
    case "Clear":
      return <Sun className="text-yellow-300 w-8 h-8" />;

    case "Clouds":
      return <Cloud className="text-white w-8 h-8" />;

    case "Rain":
      return <CloudRain className="text-cyan-300 w-8 h-8" />;

    default:
      return <CloudSun className="text-yellow-300 w-8 h-8" />;
  }
}

export default function WeeklyForecast({ forecast }: Props) {
  if (!forecast) return null;

  const daily = forecast.list.filter(
    (_: any, index: number) => index % 8 === 0
  );

  return (
    <div className="mt-8 rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/10 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        7 Day Forecast
      </h2>

      <div className="grid md:grid-cols-7 gap-4">

        {daily.map((day: any, index: number) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -6,
            }}
            className="bg-white/10 rounded-3xl p-4 text-center border border-white/10"
          >
            <p className="text-white font-semibold">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <div className="flex justify-center my-4">
              <WeatherIcon
                condition={day.weather[0].main}
              />
            </div>

            <p className="text-2xl font-bold text-white">
              {Math.round(day.main.temp)}°
            </p>

            <p className="text-slate-400 text-sm capitalize mt-2">
              {day.weather[0].description}
            </p>
          </motion.div>
        ))}

      </div>

    </div>
  );
}