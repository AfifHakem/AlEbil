import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Quiz() {
  const { modId, levelId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-primary">
      <h2 className="text-2xl font-bold mb-4">
        Kuiz Level {levelId} – الوضع {modId}
      </h2>
      <p className="mb-6">Soalan akan dimasukkan kemudian…</p>
      <Link
        to={`/mod/${modId}/level/${levelId}`}
        className="text-primary underline hover:text-green-800"
      >
        ← Kembali ke Level
      </Link>
    </div>
  );
}
