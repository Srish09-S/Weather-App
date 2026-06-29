"use client";

import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  city: string;
  setCity: (city: string) => void;
  search: () => void;
}

export default function SearchBar({
  city,
  setCity,
  search,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .2 }}
      className="
      mt-10
      rounded-[30px]
      bg-white/10
      backdrop-blur-3xl
      border
      border-white/10
      p-5
      shadow-[0_10px_60px_rgba(0,0,0,.35)]
      "
    >
      <div className="flex gap-4 items-center">

        <Search className="text-cyan-300 w-7 h-7"/>

        <input
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter") search();
          }}
          placeholder="Search any city..."
          className="
          flex-1
          bg-transparent
          outline-none
          text-white
          text-xl
          placeholder:text-gray-400
          "
        />

        <button
          onClick={search}
          className="
          rounded-2xl
          px-8
          py-4
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          text-white
          font-semibold
          hover:scale-105
          transition
          "
        >
          Search
        </button>

        <button
          className="
          p-4
          rounded-2xl
          bg-white/10
          hover:bg-white/20
          transition
          "
        >
          <MapPin className="text-cyan-300"/>
        </button>

      </div>
    </motion.div>
  );
}