"use client";
import React, { useState } from "react";
import styles from "../styles/quizstyles.module.css";

const GENRE_IDS = {
  Drama: "Drama",
  Comedy: "Comedy",
  Action: "Action",
  Fantasy: "Fantasy",
  Romance: "Romance",
  "Serious and deep": "Drama",
  "Funny and quirky": "Comedy",
  "Brave and adventurous": "Adventure",
  "Magical and mystical": "Fantasy",
  "Heartwarming and romantic": "Romance",
  "Emotionally gripping": "Drama",
  "Light-hearted and humorous": "Comedy",
  "Full of thrilling battles": "Action",
  "Involving supernatural elements": "Supernatural",
  "Exploring futuristic concepts": "Sci-Fi",
  "Urban cityscape": "Slice of Life",
  "Rural countryside": "Slice of Life",
  "Fantasy world": "Fantasy",
  "Outer space": "Sci-Fi",
  "Historical era": "Historical",
  "A romantic getaway": "Romance",
  "Serious and intense": "Drama",
  "Light-hearted and fun": "Comedy",
  "Mysterious and suspenseful": "Mystery",
  "Whimsical and magical": "Fantasy",
  "Futuristic and innovative": "Sci-Fi",
  "Passionate and emotional": "Romance",
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
            coverImage {
              large
            }
            description
            siteUrl
          }
        }
      }`;

    const variables = { genres: uniqueGenres };

    try {
      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      const { data } = await response.json();
      if (data.Page.media.length > 0) {
        setRecommendations(data.Page.media);
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
                <li key={show.id}>
                  <h4>{show.title.romaji}</h4>
                  <img src={show.coverImage.large} alt={show.title.romaji} />
                  <p>{show.description}</p>
                  <a
                    href={show.siteUrl}
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
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}

      {isLoading && <p>Loading recommendations...</p>}
    </div>
  );
};

export default QuizPage;

