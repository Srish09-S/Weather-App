"use client";

import { motion } from "framer-motion";

interface Props {
  condition?: string;
  icon?: string;
}

export default function Background({
  condition = "Clear",
  icon,
}: Props) {

  const isNight = icon?.includes("n");

  const backgrounds = {
    Clear: {
      base: isNight
        ? "bg-gradient-to-br from-slate-950 via-indigo-950 to-black"
        : "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-800",
      blob1: isNight ? "bg-indigo-500/25" : "bg-yellow-300/30",
      blob2: isNight ? "bg-purple-500/20" : "bg-orange-400/25",
      blob3: isNight ? "bg-cyan-400/15" : "bg-cyan-300/20",
    },

    Clouds: {
      base: "bg-gradient-to-br from-slate-500 via-slate-700 to-slate-900",
      blob1: "bg-white/15",
      blob2: "bg-slate-300/15",
      blob3: "bg-gray-400/10",
    },

    Rain: {
      base: "bg-gradient-to-br from-slate-900 via-blue-900 to-black",
      blob1: "bg-cyan-500/20",
      blob2: "bg-blue-700/20",
      blob3: "bg-slate-500/15",
    },

    Drizzle: {
      base: "bg-gradient-to-br from-slate-800 via-blue-900 to-black",
      blob1: "bg-cyan-400/15",
      blob2: "bg-sky-500/15",
      blob3: "bg-blue-500/10",
    },

    Thunderstorm: {
      base: "bg-gradient-to-br from-black via-slate-950 to-purple-950",
      blob1: "bg-violet-500/25",
      blob2: "bg-blue-500/20",
      blob3: "bg-purple-500/20",
    },

    Snow: {
      base: "bg-gradient-to-br from-slate-100 via-sky-200 to-slate-400",
      blob1: "bg-white/30",
      blob2: "bg-cyan-200/20",
      blob3: "bg-slate-300/20",
    },

    Mist: {
      base: "bg-gradient-to-br from-gray-500 via-slate-700 to-slate-900",
      blob1: "bg-white/10",
      blob2: "bg-slate-300/15",
      blob3: "bg-gray-400/15",
    },

    Haze: {
      base: "bg-gradient-to-br from-amber-300 via-orange-300 to-slate-600",
      blob1: "bg-yellow-300/20",
      blob2: "bg-orange-300/20",
      blob3: "bg-white/10",
    },

    Smoke: {
      base: "bg-gradient-to-br from-gray-700 via-slate-800 to-black",
      blob1: "bg-gray-400/10",
      blob2: "bg-slate-400/10",
      blob3: "bg-white/5",
    },
  };

  const theme =
    backgrounds[condition as keyof typeof backgrounds] ??
    backgrounds.Clear;

  return (
    <>
      <motion.div
        className={`fixed inset-0 -z-50 ${theme.base}`}
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.97, 1, 0.97],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      <motion.div
        animate={{
          x: [0, 100, -40, 0],
          y: [0, -40, 70, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
        className={`fixed top-[-150px] left-[-150px] h-[550px] w-[550px] rounded-full blur-[170px] -z-40 ${theme.blob1}`}
      />

      <motion.div
        animate={{
          x: [0, -90, 40, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 26,
          ease: "easeInOut",
        }}
        className={`fixed bottom-[-180px] right-[-180px] h-[650px] w-[650px] rounded-full blur-[180px] -z-40 ${theme.blob2}`}
      />

      <motion.div
        animate={{
          y: [0, 70, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className={`fixed left-1/2 top-1/3 h-[350px] w-[350px] rounded-full blur-[150px] -z-40 ${theme.blob3}`}
      />

      <div
        className="fixed inset-0 -z-30 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
    </>
  );
}