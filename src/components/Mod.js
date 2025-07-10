import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Mod() {
  const { modId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <h2 className="text-3xl font-bold mb-6">Pilih Level – اختر المستوى</h2>
      <div className="grid grid-cols-2 gap-4">
        {[...Array(10)].map((_, i) => (
          <Link
            key={i}
            to={`/mod/${modId}/level/${i + 1}`}
            className="bg-secondary text-primary px-6 py-4 rounded-lg font-bold shadow hover:scale-105 transition"
          >
            Level {i + 1}
          </Link>
        ))}
      </div>
      <Link
        to="/"
        className="mt-8 text-secondary underline hover:text-yellow-300"
      >
        ← Kembali
      </Link>
    </div>
  );
}
