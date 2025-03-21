// In App.js or a parent component
import React, { useState } from "react";
import QuizStart from "./components/QuizStart";  // Import the QuizStart component
import Quiz from "./components/Quiz";            // Import the Quiz component
import ScoreSummary from "./components/ScoreSummary";

const App = () => {
  const [quizState, setQuizState] = useState("start"); // Can be 'start', 'quiz', or 'score'
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);

  const handleStartQuiz = (numQuestions, category, difficulty) => {
    setQuizState("quiz");
    // Fetch questions here and set the quizData
  };

  const handleFinishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizState("score");
  };

  const handleRetakeQuiz = () => {
    setQuizState("start");
    setScore(0);
  };

  return (
    <div className="app-container">
      {quizState === "start" && <QuizStart onStartQuiz={handleStartQuiz} />}
      {quizState === "quiz" && <Quiz numQuestions={10} category={9} difficulty="medium" onFinishQuiz={handleFinishQuiz} />}
      {quizState === "score" && <ScoreSummary score={score} totalQuestions={10} onRetakeQuiz={handleRetakeQuiz} />}
    </div>
  );
};

export default App;
