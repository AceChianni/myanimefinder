// // components/QuizPage.js
// "use client";
// import React, { useState } from "react";
// import styles from "../styles/quizstyles.module.css";
// const GENRE_IDS = {
//   Drama: "Drama",
//   Comedy: "Comedy",
//   Action: "Action",
//   Fantasy: "Fantasy",
//   Romance: "Romance",
//   "Serious and deep": "Drama",
//   "Funny and quirky": "Comedy",
//   "Brave and adventurous": "Adventure",
//   "Magical and mystical": "Fantasy",
//   "Heartwarming and romantic": "Romance",
//   "Emotionally gripping": "Drama",
//   "Light-hearted and humorous": "Comedy",
//   "Full of thrilling battles": "Action",
//   "Involving supernatural elements": "Supernatural",
//   "Exploring futuristic concepts": "Sci-Fi",
//   "Urban cityscape": "Slice of Life",
//   "Rural countryside": "Slice of Life",
//   "Fantasy world": "Fantasy",
//   "Outer space": "Sci-Fi",
//   "Historical era": "Historical",
//   "A romantic getaway": "Romance",
//   "Serious and intense": "Drama",
//   "Light-hearted and fun": "Comedy",
//   "Mysterious and suspenseful": "Mystery",
//   "Whimsical and magical": "Fantasy",
//   "Futuristic and innovative": "Sci-Fi",
//   "Passionate and emotional": "Romance",
// };

// const QuizPage = ({ questions }) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [quizFinished, setQuizFinished] = useState(false);

//   const handleAnswerChange = (e) => {
//     const { value } = e.target;
//     setSelectedAnswers((prev) => {
//       const updated = [...prev];
//       updated[currentQuestion] = value;
//       return updated;
//     });
//   };

//   const showNextQuestion = () => {
//     if (!selectedAnswers[currentQuestion]) {
//       alert("Please select an answer before proceeding.");
//       return;
//     }
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       submitQuiz();
//     }
//   };

//   const submitQuiz = async () => {
//     setIsLoading(true);
//     const genres = selectedAnswers.map((answer) => GENRE_IDS[answer]);
//     const uniqueGenres = [...new Set(genres)];

//     try {
//       const response = await fetch(
//         `https://api.jikan.moe/v4/anime?genres=${uniqueGenres.join(",")}&page=1`
//       );
//       const data = await response.json();
//       if (data.data && data.data.length > 0) {
//         setRecommendations(data.data);
//       } else {
//         setShowPopup(true);
//       }
//       setQuizFinished(true);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const resetQuiz = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswers([]);
//     setRecommendations([]);
//     setShowPopup(false);
//     setQuizFinished(false);
//   };

//   return (
//     <div className="quiz-container">
//       {!quizFinished && questions[currentQuestion] && (
//         <div className="quiz-card">
//           <h2>{questions[currentQuestion].question}</h2>
//           <div className="question">
//             {questions[currentQuestion].options.map((option, index) => (
//               <label key={index}>
//                 <input
//                   type="radio"
//                   value={option}
//                   checked={selectedAnswers[currentQuestion] === option}
//                   onChange={handleAnswerChange}
//                 />
//                 {option}
//               </label>
//             ))}
//           </div>
//         </div>
//       )}

//       {quizFinished && recommendations.length > 0 && (
//         <div className="results-card">
//           <h3 className="recommendations-title">Your Recommendations</h3>
//           {recommendations.map((anime, index) => (
//             <div className="anime-item" key={index}>
//               <h3>{anime.title}</h3>
//               <img src={anime.images.jpg.image_url} alt={anime.title} />
//               <p>{anime.synopsis}</p>
//               <a href={anime.url} target="_blank" rel="noopener noreferrer">
//                 Go to site
//               </a>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="button-container">
//         <button className="reset-button" onClick={resetQuiz}>
//           Reset Quiz
//         </button>
//         <button className="next-button" onClick={showNextQuestion}>
//           {currentQuestion < questions.length - 1
//             ? "Next Question"
//             : "Get Results"}
//         </button>
//       </div>

//       {showPopup && (
//         <div className="popup-alert active">
//           <h4>No Recommendations</h4>
//           <p>Try answering differently or restart the quiz.</p>
//           <button onClick={() => setShowPopup(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizPage;

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

    // Map selected answers to corresponding genre names
    const selectedGenres = selectedAnswers.map((answer) => GENRE_IDS[answer]);

    // Use a Set to filter unique genres
    const uniqueGenres = [...new Set(selectedGenres)];

    try {
      // Build the query string with genre names
      const genresQuery = uniqueGenres.join(","); // Genres separated by commas

      // Fetch anime recommendations from Jikan API based on selected genres
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?genres=${genresQuery}&page=1`
      );

      // Parse the response and update the state with recommendations
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        setRecommendations(data.data);
      } else {
        setShowPopup(true);
      }

      setQuizFinished(true);
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
    <div className="quizContainer">
      {!quizFinished && questions[currentQuestion] && (
        <div className="quizCard">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="question">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index}>
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
          <div className="buttonContainer">
            <button className="resetButton" onClick={resetQuiz}>
              Reset Quiz
            </button>
            <button className="nextButton" onClick={showNextQuestion}>
              {currentQuestion < questions.length - 1
                ? "Next Question"
                : "Get Results"}
            </button>
          </div>
        </div>
      )}

      {/* Recommendations Section */}
      {quizFinished && !isLoading && (
        <div className="recommendations">
          <h3>Recommended Shows</h3>
          {recommendations.length > 0 ? (
            <ul>
              {recommendations.map((show) => (
                <li key={show.mal_id}>
                  <h4>{show.title}</h4>
                  <img src={show.images.jpg.image_url} alt={show.title} />
                  <p>{show.synopsis}</p>
                  <a href={show.url} target="_blank" rel="noopener noreferrer">
                    More Info
                  </a>
                </li>
              ))}
            </ul>
          ) : showPopup ? (
            <p>No recommendations found based on your choices.</p>
          ) : (
            <p>Loading recommendations...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
