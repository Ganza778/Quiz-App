// api.js
const BASE_URL = "https://opentdb.com/api.php";

export const fetchQuizQuestions = async (amount, category, difficulty) => {
  try {
    const response = await fetch(`${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch("https://opentdb.com/api_category.php");
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
  try {
    const data = await fetchQuizQuestions(numQuestions, category, difficulty);
    setQuestions(data);
  } catch (error) {
    setError("Failed to load quiz questions. Please try again later.");
  }
  
};
