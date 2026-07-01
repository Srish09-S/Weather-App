"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Wind,
  Eye,
  Gauge,
  Leaf,
} from "lucide-react";

interface Props {
  weather: any;
  aqi: any;
}

export default function WeatherStats({ weather, aqi }: Props) {
  const aqiValue = aqi?.list?.[0]?.main?.aqi ?? 1;

  const aqiStatus = ["Good", "Fair", "Moderate", "Poor", "Very Poor"][aqiValue - 1];

  const aqiColor = [
    "text-green-400",
    "text-lime-400",
    "text-yellow-400",
    "text-orange-400",
    "text-red-500",
  ][aqiValue - 1];

  const stats = [
    {
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      icon: <Droplets className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Wind Speed",
      value: `${weather.wind.speed} km/h`,
      icon: <Wind className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Visibility",
      value: `${weather.visibility / 1000} km`,
      icon: <Eye className="w-8 h-8 text-violet-400" />,
    },
    {
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      icon: <Gauge className="w-8 h-8 text-orange-400" />,
    },
    {
      title: "Air Quality",
      value: aqiStatus,
      icon: <Leaf className={`w-8 h-8 ${aqiColor}`} />,
      color: aqiColor,
    },
  ];

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -8,
            scale: 1.04,
          }}
          className="
            rounded-3xl
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            p-6
            shadow-xl
          "
        >
          <div className="mb-5">{item.icon}</div>

          <p className="text-slate-400 text-sm">
            {item.title}
          </p>

          <h2
            className={`text-2xl font-bold mt-2 ${
              item.color ?? "text-white"
            }`}
          >
            {item.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
}