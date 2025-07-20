import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const mods = [
    { id: "mudah", name: "Mudah – سهل" },
    { id: "sederhana", name: "Sederhana – متوسط" },
    { id: "susah", name: "Susah – عسر" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-secondary text-white">
      <h1 className="text-4xl font-bold mb-8">Al-Ebil | I’rab E-Learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mods.map((mod) => (
          <Link
            key={mod.id}
            to={`/mod/${mod.id}`}
            className="bg-white text-primary font-semibold px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            {mod.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
