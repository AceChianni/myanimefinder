// app/quiz/page.js
"use client";
import React from "react";
import styles from "../../styles/quizstyles.module.css";
import QuizPage from "../../components/QuizPage";

const questions = [
  {
    id: 1,
    question: "What genre of TV show do you prefer?",
    options: ["Drama", "Comedy", "Action", "Fantasy", "Romance"],
  },
  {
    id: 2,
    question: "What type of mood do you enjoy?",
    options: [
      "Serious and deep",
      "Funny and quirky",
      "Light-hearted and humorous",
      "Brave and adventurous",
      "Heartwarming and romantic",
    ],
  },
  {
    id: 3,
    question: "What kind of storyline do you find most intriguing?",
    options: [
      "Emotionally gripping",
      "Light-hearted and humorous",
      "Full of thrilling battles",
      "Involving supernatural elements",
      "Exploring futuristic concepts",
      "A blossoming love story",
    ],
  },
  {
    id: 4,
    question:
      "Which setting or environment do you prefer in a TV show or movie?",
    options: [
      "Urban cityscape",
      "Rural countryside",
      "Fantasy world",
      "Outer space",
      "Historical era",
      "A romantic getaway",
    ],
  },
  {
    id: 5,
    question:
      "What is your preferred tone or atmosphere in a TV show or movie?",
    options: [
      "Serious and intense",
      "Light-hearted and fun",
      "Mysterious and suspenseful",
      "Whimsical and magical",
      "Futuristic and innovative",
      "Passionate and emotional",
    ],
  },
];

export default function QuizPageWrapper() {
  return (
    <div className={styles.quizContainer}>
      <QuizPage questions={questions} />
    </div>
  );
}
