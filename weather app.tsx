import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  CloudSun,
  Droplets,
  Wind,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold text-white">
            Weather Dashboard
          </h1>

          <p className="text-slate-300 text-lg">
            Bhopal, India
          </p>
        </div>

        {/* Search Bar */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-4 flex items-center gap-3">
            <Search className="text-slate-300" />
            <input
              placeholder="Search city..."
              className="w-full bg-transparent text-white placeholder:text-slate-400 outline-none"
            />
          </CardContent>
        </Card>

        {/* Hero Weather Section */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">

              <div>
                <p className="text-slate-300 mb-2">
                  Current Weather
                </p>

                <h2 className="text-8xl font-bold text-white">
                  29°
                </h2>

                <p className="text-2xl text-slate-200 mt-2">
                  Partly Cloudy
                </p>

                <p className="text-slate-400 mt-2">
                  Feels Like 31°C
                </p>
              </div>

              <CloudSun
                size={140}
                className="text-yellow-300 mt-6 md:mt-0"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <Droplets className="text-cyan-300 mb-4" />
              <p className="text-slate-300">Humidity</p>
              <p className="text-4xl font-bold text-white mt-2">
                72%
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <Wind className="text-green-300 mb-4" />
              <p className="text-slate-300">Wind Speed</p>
              <p className="text-4xl font-bold text-white mt-2">
                15 km/h
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <Shield className="text-orange-300 mb-4" />
              <p className="text-slate-300">AQI</p>
              <p className="text-4xl font-bold text-white mt-2">
                58
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <CloudSun className="text-yellow-300 mb-4" />
              <p className="text-slate-300">UV Index</p>
              <p className="text-4xl font-bold text-white mt-2">
                4
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Hourly Forecast */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl text-white font-semibold mb-6">
              Hourly Forecast
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

              {["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"].map(
                (time) => (
                  <div
                    key={time}
                    className="bg-white/10 rounded-xl p-4 text-center"
                  >
                    <CloudSun className="mx-auto text-yellow-300 mb-2" />
                    <p className="text-slate-300">{time}</p>
                    <p className="text-white text-xl font-semibold">
                      29°
                    </p>
                  </div>
                )
              )}

            </div>
          </CardContent>
        </Card>

        {/* Temperature Graph Placeholder */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl text-white font-semibold mb-4">
              Temperature Trend
            </h2>

            <div className="h-64 rounded-xl border border-dashed border-slate-500 flex items-center justify-center text-slate-400">
              Recharts Graph Coming Soon
            </div>
          </CardContent>
        </Card>

        {/* 7 Day Forecast */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl text-white font-semibold mb-6">
              7 Day Forecast
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">

              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day) => (
                  <div
                    key={day}
                    className="bg-white/10 rounded-xl p-4 text-center"
                  >
                    <p className="text-white font-medium">
                      {day}
                    </p>

                    <CloudSun
                      className="mx-auto my-3 text-yellow-300"
                    />

                    <p className="text-slate-300">
                      30° / 22°
                    </p>
                  </div>
                )
              )}

            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}