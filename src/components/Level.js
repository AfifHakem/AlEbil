import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Level() {
  const { modId, levelId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-secondary text-primary">
      <h2 className="text-3xl font-bold mb-6">Level {levelId}</h2>
      <Link
        to={`/mod/${modId}/level/${levelId}/quiz`}
        className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
      >
        Mulakan Kuiz – ابدأ الاختبار
      </Link>
      <Link
        to={`/mod/${modId}`}
        className="mt-6 text-primary underline hover:text-green-800"
      >
        ← Kembali ke Mod
      </Link>
    </div>
  );
}
