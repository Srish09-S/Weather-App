"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Wind,
  Eye,
  Gauge,
} from "lucide-react";

interface Props {
  weather: any;
}

export default function WeatherStats({ weather }: Props) {
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
  ];

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            y: -8,
            scale: 1.03,
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

          <h2 className="text-3xl font-bold mt-2">
            {item.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
}