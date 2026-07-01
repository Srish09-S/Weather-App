"use client";

import { Sunrise, Sunset, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  weather: any;
}

export default function SunCard({ weather }: Props) {
  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);

  const sunriseTime = sunrise.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunsetTime = sunset.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const diff = sunset.getTime() - sunrise.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="
      mt-8
      rounded-3xl
      bg-white/10
      backdrop-blur-2xl
      border
      border-white/10
      p-6
      shadow-xl
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <Sun className="text-yellow-300 w-8 h-8" />
        <h2 className="text-2xl font-bold text-white">
          Sun Cycle
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="rounded-2xl bg-white/5 p-5">
          <Sunrise className="text-orange-300 mb-3" />
          <p className="text-slate-400">Sunrise</p>
          <h3 className="text-2xl font-bold mt-2">
            {sunriseTime}
          </h3>
        </div>

        <div className="rounded-2xl bg-white/5 p-5">
          <Sunset className="text-red-300 mb-3" />
          <p className="text-slate-400">Sunset</p>
          <h3 className="text-2xl font-bold mt-2">
            {sunsetTime}
          </h3>
        </div>

        <div className="rounded-2xl bg-white/5 p-5">
          <Sun className="text-yellow-300 mb-3" />
          <p className="text-slate-400">Day Length</p>
          <h3 className="text-2xl font-bold mt-2">
            {hours}h {minutes}m
          </h3>
        </div>

      </div>
    </motion.div>
  );
}