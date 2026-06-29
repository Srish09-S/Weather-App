"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#020617]" />

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="fixed top-[-150px] left-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px] -z-40"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "easeInOut",
        }}
        className="fixed bottom-[-150px] right-[-150px] h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[160px] -z-40"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          y: [0, 50, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="fixed left-1/2 top-1/3 h-[350px] w-[350px] rounded-full bg-sky-400/15 blur-[130px] -z-40"
      />

      {/* Noise Overlay */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "25px 25px",
        }}
      />
    </>
  );
}