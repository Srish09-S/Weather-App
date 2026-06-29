"use client";

import { CloudSun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center py-8"
    >
      <div className="flex items-center gap-4">
        <CloudSun size={42} className="text-yellow-300" />

        <div>
          <h1 className="text-4xl font-black text-white">
            Weather Dashboard
          </h1>

          <p className="text-slate-400">
            Live Forecast
          </p>
        </div>
      </div>

      <button
        className="
        h-14
        w-14
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        flex
        items-center
        justify-center
        hover:rotate-12
        transition
        "
      >
        <Moon />
      </button>
    </motion.header>
  );
}