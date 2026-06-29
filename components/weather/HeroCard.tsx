"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  CloudRain,
  CloudSun,
  Sun,
  Wind,
  Droplets,
  Eye,
  Thermometer,
  MapPin,
} from "lucide-react";

interface Props {
  weather: any;
}

export default function HeroCard({ weather }: Props) {
  const condition = weather.weather[0].main;

  function WeatherIcon() {
    switch (condition) {
      case "Clear":
        return <Sun size={160} className="text-yellow-300 drop-shadow-2xl" />;

      case "Rain":
        return <CloudRain size={160} className="text-cyan-300" />;

      case "Clouds":
        return <Cloud size={160} className="text-white" />;

      default:
        return <CloudSun size={160} className="text-yellow-300" />;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      whileHover={{ scale: 1.01 }}
      className="
      mt-10
      rounded-[35px]
      bg-white/10
      backdrop-blur-3xl
      border
      border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,.4)]
      overflow-hidden
      "
    >
      <div className="grid lg:grid-cols-2 gap-10 p-10">

        {/* LEFT */}

        <div>

          <p className="text-cyan-300 flex items-center gap-2">
            <MapPin size={18} />
            {weather.name}
          </p>

          <h1 className="text-8xl font-black mt-5">
            {Math.round(weather.main.temp)}°
          </h1>

          <h2 className="text-3xl mt-4 capitalize text-slate-200">
            {weather.weather[0].description}
          </h2>

          <p className="text-slate-400 mt-3">
            Feels Like {Math.round(weather.main.feels_like)}°
          </p>

        </div>

        {/* RIGHT */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="flex justify-center items-center"
        >
          <WeatherIcon />
        </motion.div>

      </div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-8 border-t border-white/10">

        <Stat
          icon={<Droplets className="text-cyan-300" />}
          label="Humidity"
          value={`${weather.main.humidity}%`}
        />

        <Stat
          icon={<Wind className="text-green-300" />}
          label="Wind"
          value={`${weather.wind.speed} km/h`}
        />

        <Stat
          icon={<Eye className="text-violet-300" />}
          label="Visibility"
          value={`${weather.visibility / 1000} km`}
        />

        <Stat
          icon={<Thermometer className="text-orange-300" />}
          label="Pressure"
          value={`${weather.main.pressure} hPa`}
        />

      </div>

    </motion.div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
      rounded-3xl
      bg-white/5
      p-6
      border
      border-white/10
      "
    >
      <div className="mb-4">{icon}</div>

      <p className="text-slate-400">
        {label}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {value}
      </h3>

    </motion.div>
  );
}