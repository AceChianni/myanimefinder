// src/components/QuizPage.js
"use client";

import React, { useState } from "react";
import styles from "../styles/quizstyles.module.css";
import Image from "next/image";

const GENRE_IDS = {
  Drama: "1",
  Comedy: "4",
  Action: "2",
  Fantasy: "10",
  Romance: "22",
  "Serious and deep": "1",
  "Funny and quirky": "4",
  "Brave and adventurous": "2",
  "Magical and mystical": "10",
  "Heartwarming and romantic": "22",
  "Emotionally gripping": "1",
  "Light-hearted and humorous": "4",
  "Full of thrilling battles": "2",
  "Involving supernatural elements": "8",
  "Exploring futuristic concepts": "24",
  "Urban cityscape": "6",
  "Rural countryside": "6",
  "Fantasy world": "10",
  "Outer space": "24",
  "Historical era": "23",
  "A romantic getaway": "22",
  "Serious and intense": "1",
  "Light-hearted and fun": "4",
  "Mysterious and suspenseful": "7",
  "Whimsical and magical": "10",
  "Futuristic and innovative": "24",
  "Passionate and emotional": "22",
};
const QuizPage = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerChange = (e) => {
    const { value } = e.target;
    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = value;
      return updated;
    });
  };

  const showNextQuestion = () => {
    if (!selectedAnswers[currentQuestion]) {
      alert("Please select an answer before proceeding.");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = async () => {
    setIsLoading(true);
    const genres = selectedAnswers.map((answer) => GENRE_IDS[answer]);
    const uniqueGenres = [...new Set(genres)];

    const query = `
      query ($genres: [String]) {
        Page(perPage: 5) {
          media(genre_in: $genres, type: ANIME, sort: POPULARITY_DESC) {
            id
            title {
              romaji
            }
            image_url  // Use Jikan's 'image_url' here
            description
            url  // URL of the anime page
          }
        }
      }`;

    const variables = { genres: uniqueGenres };

    try {
      const response = await fetch("https://api.jikan.moe/v4/anime", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.data.length > 0) {
        setRecommendations(data.data);  
        setQuizFinished(true);
      } else {
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setRecommendations([]);
    setShowPopup(false);
    setQuizFinished(false);
  };

  return (
    <div className={styles.quizContainer}>
      {!quizFinished && questions[currentQuestion] && (
        <div className={styles.quizCard}>
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.question}>
            {questions[currentQuestion].options.map((option, index) => (
              <label key={`${currentQuestion}-${index}`}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedAnswers[currentQuestion] === option}
                  onChange={handleAnswerChange}
                />
                {option}
              </label>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.resetButton} onClick={resetQuiz}>
              Reset Quiz
            </button>
            <button className={styles.nextButton} onClick={showNextQuestion}>
              {currentQuestion < questions.length - 1
                ? "Next Question"
                : "Get Results"}
            </button>
          </div>
        </div>
      )}

      {quizFinished && !isLoading && (
        <div className={styles.recommendations}>
          <h3>Recommended Shows</h3>
          {recommendations.length > 0 ? (
            <ul>
              {recommendations.map((show) => (
                <li key={show.mal_id}> 
                  <h4>{show.title}</h4>
                  {show.image_url ? (
                    <Image
                      src={show.image_url}
                      alt={show.title}
                      width={300}
                      height={450}
                    />
                  ) : (
                    <p>No image available</p> // Fallback if image_url is missing
                  )}
                  <p>{show.synopsis}</p>
                  <a
                    href={show.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Info
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recommendations found based on your choices.</p>
          )}
        </div>
      )}

      {showPopup && (
        <div className={styles.popupAlert}>
          <h4>Oops! No Recommendations Found</h4>
          <p>
            It looks like there are no matches for your choices. Please restart
            the quiz and try different options.
          </p>
        </div>
      )}

      {isLoading && <p>Loading recommendations...</p>}
    </div>
  );
};

export default QuizPage;

