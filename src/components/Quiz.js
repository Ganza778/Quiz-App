// Quiz.js
import React, { useState, useEffect } from "react";
import { fetchQuizQuestions } from "../api";

const Quiz = ({ numQuestions, category, difficulty, onFinishQuiz }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const fetchedQuestions = await fetchQuizQuestions(numQuestions, category, difficulty);
      setQuestions(fetchedQuestions);
    };
    getQuestions();
  }, [numQuestions, category, difficulty]);

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      onFinishQuiz(score);
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <h2 className="text-2xl">{currentQuestion.question}</h2>
      <div className="options">
        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="option-btn"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Quiz;
