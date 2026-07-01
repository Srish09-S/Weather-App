"use client";

import { motion } from "framer-motion";

interface Props {
  condition?: string;
}

export default function WeatherEffects({
  condition = "Clear",
}: Props) {
  // 🌧 Rain
  if (condition === "Rain" || condition === "Drizzle") {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-8 bg-cyan-300/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -100}%`,
            }}
            animate={{
              y: ["0vh", "120vh"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1 + Math.random(),
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }

  // ❄ Snow
  if (condition === "Snow") {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -100}%`,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, 20, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + Math.random() * 5,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }

  // ☀ Clear
  if (condition === "Clear") {
    return (
      <motion.div
        className="fixed top-10 right-20 w-72 h-72 rounded-full bg-yellow-300/20 blur-[100px] pointer-events-none -z-20"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />
    );
  }

  // ⚡ Thunderstorm
  if (condition === "Thunderstorm") {
    return (
      <motion.div
        className="fixed inset-0 bg-white pointer-events-none -z-20"
        animate={{
          opacity: [0, 0, 0.8, 0, 0, 0.6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
      />
    );
  }

  // ☁ Clouds
  if (condition === "Clouds") {
    return (
      <>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed top-20 h-24 w-64 rounded-full bg-white/10 blur-xl -z-20"
            style={{
              left: `${i * 25}%`,
            }}
            animate={{
              x: [-200, 1400],
            }}
            transition={{
              repeat: Infinity,
              duration: 40 + i * 5,
              ease: "linear",
            }}
          />
        ))}
      </>
    );
  }

  return null;
}