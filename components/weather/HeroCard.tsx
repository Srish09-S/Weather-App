"use client";

import { motion } from "framer-motion";
import {
  Wind,
  Droplets,
  Eye,
  Thermometer,
  MapPin,
  Sunrise,
  Sunset,
} from "lucide-react";

interface Props {
  weather: any;
}

export default function HeroCard({ weather }: Props) {
  const icon = weather.weather[0].icon;
  const condition = weather.weather[0].main;

  const bg = () => {
    switch (condition) {
      case "Clear":
        return "from-yellow-500/30 via-orange-500/20 to-amber-400/20";

      case "Rain":
      case "Drizzle":
        return "from-blue-700/40 via-sky-700/20 to-cyan-500/20";

      case "Thunderstorm":
        return "from-violet-700/40 via-slate-900/40 to-purple-600/30";

      case "Snow":
        return "from-cyan-200/20 via-sky-300/20 to-blue-200/20";

      case "Clouds":
        return "from-slate-600/30 via-slate-700/20 to-slate-800/20";

      default:
        return "from-cyan-600/20 via-blue-600/20 to-indigo-600/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.6 }}
      className={`mt-10 rounded-[35px] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br ${bg()} backdrop-blur-3xl`}
    >
      <div className="grid lg:grid-cols-2 gap-10 p-10">

        <div>

          <p className="flex items-center gap-2 text-cyan-300">
            <MapPin size={18}/>
            {weather.name}
          </p>

          <p className="text-slate-300 mt-2">
            {new Date().toLocaleDateString(undefined,{
              weekday:"long",
              month:"long",
              day:"numeric"
            })}
          </p>

          <h1 className="text-8xl font-black mt-6">
            {Math.round(weather.main.temp)}°
          </h1>

          <h2 className="text-3xl capitalize mt-4 text-white">
            {weather.weather[0].description}
          </h2>

          <p className="text-slate-300 mt-3">
            Feels Like {Math.round(weather.main.feels_like)}°
          </p>

          <div className="flex gap-8 mt-8">

            <div>
              <p className="text-slate-400 text-sm">High</p>
              <p className="font-bold text-xl">
                {Math.round(weather.main.temp_max)}°
              </p>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Low</p>
              <p className="font-bold text-xl">
                {Math.round(weather.main.temp_min)}°
              </p>
            </div>

          </div>

        </div>

        <motion.div
          animate={{
            y:[0,-15,0],
            rotate:[0,2,-2,0],
          }}
          transition={{
            repeat:Infinity,
            duration:5,
          }}
          className="flex justify-center items-center"
        >
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={condition}
            className="w-60 h-60 drop-shadow-[0_0_35px_rgba(255,255,255,.35)]"
          />
        </motion.div>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 p-8 border-t border-white/10">

        <Stat
          icon={<Droplets className="text-cyan-300"/>}
          label="Humidity"
          value={`${weather.main.humidity}%`}
        />

        <Stat
          icon={<Wind className="text-green-300"/>}
          label="Wind"
          value={`${weather.wind.speed} km/h`}
        />

        <Stat
          icon={<Eye className="text-violet-300"/>}
          label="Visibility"
          value={`${weather.visibility/1000} km`}
        />

        <Stat
          icon={<Thermometer className="text-orange-300"/>}
          label="Pressure"
          value={`${weather.main.pressure} hPa`}
        />

        <Stat
          icon={<Sunrise className="text-yellow-300"/>}
          label="Sunrise"
          value={new Date(weather.sys.sunrise*1000).toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
          })}
        />

        <Stat
          icon={<Sunset className="text-pink-300"/>}
          label="Sunset"
          value={new Date(weather.sys.sunset*1000).toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
          })}
        />

      </div>

    </motion.div>
  );
}

function Stat({
  icon,
  label,
  value,
}:{
  icon:React.ReactNode;
  label:string;
  value:string;
}){

  return(
    <motion.div
      whileHover={{
        scale:1.05,
        y:-6,
      }}
      className="rounded-3xl bg-white/5 border border-white/10 p-5"
    >
      <div className="mb-4">
        {icon}
      </div>

      <p className="text-slate-400 text-sm">
        {label}
      </p>

      <h3 className="text-xl font-bold mt-2">
        {value}
      </h3>

    </motion.div>
  )
}