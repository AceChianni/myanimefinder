// src/app/quiz/page.js

"use client";

import dynamic from "next/dynamic";

// Avoid SSR mismatches by dynamically importing the client quiz
const QuizPage = dynamic(() => import("@/components/QuizPage"), { ssr: false });

export default function QuizRoutePage() {
  return (
    <div className="px-4 py-10">
      <QuizPage />
    </div>
  );
}
