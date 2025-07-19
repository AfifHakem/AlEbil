import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Quiz() {
  const { modId, levelId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);

  // Fetch questions from soalan.json
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/soalan.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white text-primary">
        <h2 className="text-2xl font-bold mb-4">Sedang memuatkan soalan...</h2>
      </div>
    );
  }

  const handleOptionClick = (idx) => {
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-primary p-4">
      <h2 className="text-2xl font-bold mb-4">
        Kuiz Level {levelId} – الوضع {modId}
      </h2>
      {showScore ? (
        <div className="text-center">
          <p className="mb-4 font-semibold">
            Skor anda: {score} / {questions.length}
          </p>
          <button
            onClick={handleRestart}
            className="bg-primary text-white px-4 py-2 rounded mr-2"
          >
            Mula Semula
          </button>
          <Link
            to={`/mod/${modId}/level/${levelId}`}
            className="text-primary underline hover:text-green-800"
          >
            ← Kembali ke Level
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-gray-100 p-6 rounded shadow">
          <p className="mb-4 font-semibold">{questions[current].question}</p>
          <div className="space-y-2 mb-4">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={`w-full text-left px-4 py-2 rounded border ${
                  selected === idx ? "bg-primary text-white" : "bg-white text-primary"
                }`}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {selected !== null && (
            <button
              onClick={handleNext}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              {current < questions.length - 1 ? "Soalan Seterusnya" : "Lihat Skor"}
            </button>
          )}
          <div className="mt-4">
            <Link
              to={`/mod/${modId}/level/${levelId}`}
              className="text-primary underline hover:text-green-800"
            >
              ← Kembali ke Level
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
