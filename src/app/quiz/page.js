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

// "use client";

// import QuizPage from "@/components/QuizPage";

// export default function QuizRoute() {
//   return (
//     <main className="min-h-screen pt-32 px-4 flex justify-center">
//       <QuizPage />
//     </main>
//   );
// }
