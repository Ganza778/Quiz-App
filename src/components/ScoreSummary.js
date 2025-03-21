// ScoreSummary.js
import React from "react";

const ScoreSummary = ({ score, totalQuestions, onRetakeQuiz }) => {
  return (
    <div className="score-summary">
      <h2 className="text-2xl">Quiz Finished!</h2>
      <p>Your final score is: {score}/{totalQuestions}</p>
      <button onClick={onRetakeQuiz} className="btn">
        Retake Quiz
      </button>
    </div>
  );
};

export default ScoreSummary;
