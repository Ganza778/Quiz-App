// QuizStart.js
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api";

const QuizStart = ({ onStartQuiz }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(9); // Default to General Knowledge
  const [difficulty, setDifficulty] = useState("medium");
  const [numQuestions, setNumQuestions] = useState(10);

  useEffect(() => {
    const getCategories = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);
    };
    getCategories();
  }, []);

  return (
    <div className="quiz-start">
      <h1 className="text-3xl font-bold">Start Your Quiz</h1>
      <div className="mt-4">
        <label>Select Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label>Select Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="select"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="mt-4">
        <label>Number of Questions:</label>
        <input
          type="number"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
          className="input"
          min="1"
        />
      </div>
      <button onClick={() => onStartQuiz(numQuestions, selectedCategory, difficulty)} className="mt-4 btn">
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
