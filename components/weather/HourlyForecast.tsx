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
      return <Sun className="w-8 h-8 text-yellow-300" />;

    case "Clouds":
      return <Cloud className="w-8 h-8 text-white" />;

    case "Rain":
      return <CloudRain className="w-8 h-8 text-cyan-300" />;

    default:
      return <CloudSun className="w-8 h-8 text-yellow-300" />;
  }
}

export default function HourlyForecast({ forecast }: Props) {
  if (!forecast) return null;

  const hourly = forecast.list.slice(0, 8);

  return (
    <div className="mt-8 rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/10 p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-6">
        Hourly Forecast
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-2">

        {hourly.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            className="
              min-w-[120px]
              rounded-3xl
              bg-white/10
              border
              border-white/10
              p-5
              text-center
            "
          >
            <p className="text-slate-300 text-sm">
              {new Date(item.dt * 1000).toLocaleTimeString([], {
                hour: "numeric",
              })}
            </p>

            <div className="flex justify-center my-4">
              <WeatherIcon
                condition={item.weather[0].main}
              />
            </div>

            <h3 className="text-2xl font-bold text-white">
              {Math.round(item.main.temp)}°
            </h3>

            <p className="text-slate-400 text-sm mt-2 capitalize">
              {item.weather[0].description}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
}