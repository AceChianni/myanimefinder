// src/components/PollSidebar.js
// "use client";
// import React, { useState } from "react";
// import styles from "../styles/Sidebars.module.css";

// const PollSidebar = () => {
//   const [selectedPoll, setSelectedPoll] = useState(null);

//   const pollOptions = [
//     { id: 1, label: "Naruto" },
//     { id: 2, label: "One Piece" },
//     { id: 3, label: "Attack on Titan" },
//     { id: 4, label: "Demon Slayer" },
//     { id: 5, label: "Pokemon" },
//     { id: 6, label: "Other" },
//   ];

//   return (
//     <div className={styles.pollSidebar}>
//       <div className={styles.sidebarTitle}>
//         Choose Your Favorite Starter Anime!
//       </div>
//       <div className="flex flex-col">
//         {pollOptions.map((option) => (
//           <div key={option.id} className={styles.pollSidebarItem}>
//             <input
//               type="radio"
//               name="animePoll"
//               value={option.id}
//               checked={selectedPoll === option.id}
//               onChange={() => setSelectedPoll(option.id)}
//               className="mr-2"
//             />
//             <label>{option.label}</label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PollSidebar;
// src/components/PollSidebar.js
// "use client";
// import React, { useState } from "react";
// import styles from "../styles/sidebars.module.css";

// const PollSidebar = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

//   const options = [
//     "Naruto",
//     "One Piece",
//     "Attack on Titan",
//     "Demon Slayer",
//     "Pokemon",
//     "Other",
//   ];

//   const handleVote = (index) => {
//     if (!submitted) {
//       const newVotes = [...votes];
//       newVotes[index] += 1;
//       setVotes(newVotes);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedOption) {
//       setSubmitted(true);
//       console.log(`User voted for: ${selectedOption}`);
//     } else {
//       alert("Please select an option before submitting.");
//     }
//   };

//   const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);

//   return (
//     <div className={styles.pollSidebar}>
//       <h3 className={styles.sidebarTitle}>
//         Choose Your Favorite Starter Anime!
//       </h3>
//       {submitted ? (
//         <div>
//           <p className={styles.voteResult}>
//             Thank you for voting! You chose: <strong>{selectedOption}</strong>.
//           </p>
//           <div className={styles.voteChart}>
//             {votes.map((vote, index) => (
//               <div key={index} className={styles.voteBar}>
//                 <div
//                   className={styles.bar}
//                   style={{ width: `${(vote / totalVotes) * 100}%` }}
//                 >
//                   {options[index]} ({vote} votes)
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className={styles.pollOptions}>
//           {options.map((option, index) => (
//             <label key={index} className={styles.pollOption}>
//               <input
//                 type="radio"
//                 name="anime-poll"
//                 value={option}
//                 onChange={(e) => {
//                   setSelectedOption(e.target.value);
//                   handleVote(index);
//                 }}
//                 className={styles.pollInput}
//               />
//               {option}
//             </label>
//           ))}
//           <button className={styles.submitButton} onClick={handleSubmit}>
//             <span className={styles.heartIcon}>💖</span> Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PollSidebar;
// src/components/PollSidebar.js
"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Sidebars.module.css";

const PollSidebar = () => {
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]); // Track votes for each option
  const [submitted, setSubmitted] = useState(false);

  const pollOptions = [
    { id: 1, label: "Naruto" },
    { id: 2, label: "One Piece" },
    { id: 3, label: "Attack on Titan" },
    { id: 4, label: "Demon Slayer" },
    { id: 5, label: "Pokemon" },
    { id: 6, label: "Other" },
  ];

  const handleVote = (index) => {
    if (!submitted) {
      const newVotes = [...votes];
      newVotes[index] += 1; // Increment vote count for the selected option
      setVotes(newVotes);
    }
  };

  const handleSubmit = () => {
    if (selectedPoll !== null) {
      setSubmitted(true);
    } else {
      alert("Please select an option before submitting.");
    }
  };

  // Calculate total votes
  const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);

  return (
    <div className={styles.pollSidebar}>
      <div className={styles.sidebarTitle}>
        Choose Your Favorite Starter Anime!
      </div>
      <div className="flex flex-col">
        {pollOptions.map((option, index) => (
          <div key={option.id} className={styles.pollSidebarItem}>
            <input
              type="radio"
              name="animePoll"
              value={option.id}
              checked={selectedPoll === option.id}
              onChange={() => {
                setSelectedPoll(option.id);
                handleVote(index);
              }}
              className="mr-2"
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} className={styles.submitButton}>
        Submit
      </button>

      {/* Show results after submission */}
      {submitted && (
        <div className={styles.voteResult}>
          <h3>Poll Results</h3>
          <div className={styles.voteChart}>
            {votes.map((vote, index) => (
              <div key={index} className={styles.voteBar}>
                <div
                  className={styles.bar}
                  style={{ width: `${(vote / totalVotes) * 100}%` }}
                >
                  {pollOptions[index].label} ({vote} votes)
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PollSidebar;
