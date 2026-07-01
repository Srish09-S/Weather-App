"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";

interface Props {
  forecast: any;
}

export default function TemperatureChart({ forecast }: Props) {
  if (!forecast) return null;

  const chartData = forecast.list.slice(0, 8).map((item: any) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: "numeric",
    }),
    temp: Math.round(item.main.temp),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8 rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/10 p-6 shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Temperature Trend
      </h2>

      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="tempLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#334155"
            />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
              unit="°"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="url(#tempLine)"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#38bdf8",
              }}
              activeDot={{
                r: 8,
                fill: "#fff",
                stroke: "#38bdf8",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}