"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const sampleData = [
  { time: "6 AM", temp: 22 },
  { time: "9 AM", temp: 25 },
  { time: "12 PM", temp: 30 },
  { time: "3 PM", temp: 32 },
  { time: "6 PM", temp: 29 },
  { time: "9 PM", temp: 25 },
];

export default function TemperatureChart() {
  return (
    <div className="mt-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">
        Temperature Trend
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#38bdf8"
              strokeWidth={4}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}