import React, { useState } from "react";
import soalanData from "./soalan.json";

export default function Quiz() {
  // Example: show 'mudah' level 1 questions
  const mudahLevel1 = soalanData.mudah.find(item => item.level === 1);
  const questions = mudahLevel1 ? mudahLevel1.soalan : [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  if (!questions.length) return <div>No questions found!</div>;

  const handleOptionClick = idx => setSelected(idx);
  const handleNext = () => {
    if (selected !== null && questions[current].options[selected] === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return <div>Quiz finished! Your score: {score} / {questions.length}</div>;
  }

  return (
    <div>
      <h2>Soalan {current + 1}/{questions.length}</h2>
      <p>{questions[current].q}</p>
      {questions[current].options.map((option, idx) => (
        <button key={idx} onClick={() => handleOptionClick(idx)}>{option}</button>
      ))}
      {selected !== null && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
}
