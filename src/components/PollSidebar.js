// src/components/PollSidebar.js
// "use client";
// import React, { useState, useEffect } from "react";
// import styles from "@/styles/sidebars.module.css";

// const PollSidebar = () => {
//   const [selectedPoll, setSelectedPoll] = useState(null);
//   const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]); // Initialize votes
//   const [submitted, setSubmitted] = useState(false);

//   const pollOptions = [
//     { id: 1, label: "Naruto" },
//     { id: 2, label: "One Piece" },
//     { id: 3, label: "Attack on Titan" },
//     { id: 4, label: "Demon Slayer" },
//     { id: 5, label: "Pokemon" },
//     { id: 6, label: "Other" },
//   ];

//   // Fetch poll results
//   useEffect(() => {
//     const fetchPollResults = async () => {
//       try {
//         const response = await fetch("/api/poll");
//         if (response.ok) {
//           const data = await response.json();
//           setVotes(data.votes || [0, 0, 0, 0, 0, 0]);
//         } else {
//           console.error("Failed to fetch poll results:", await response.text());
//         }
//       } catch (error) {
//         console.error("Error fetching poll results:", error);
//       }
//     };

//     fetchPollResults();
//   }, [submitted]); // Refetch results when votes are submitted or reset

//   const handleVote = (index) => {
//     if (!submitted) {
//       setSelectedPoll(index + 1); // Set selected option ID
//     }
//   };

//   const handleSubmit = async () => {
//     if (selectedPoll !== null) {
//       try {
//         const response = await fetch("/api/poll", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ optionIndex: selectedPoll }), // Corrected payload format
//         });

//         if (response.ok) {
//           setSubmitted(true);
//         } else {
//           console.error("Failed to submit vote:", await response.text());
//         }
//       } catch (error) {
//         console.error("Error submitting vote:", error);
//       }
//     } else {
//       alert("Please select an option before submitting.");
//     }
//   };

//   const resetPoll = () => {
//     setVotes([0, 0, 0, 0, 0, 0]);
//     setSubmitted(false);
//     setSelectedPoll(null);
//   };

//   const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);
//   const getPercentage = (votesForOption) =>
//     totalVotes > 0 ? Math.round((votesForOption / totalVotes) * 100) : 0;

//   return (
//     <div className={styles.pollSidebar}>
//       {submitted ? (
//         <div className={styles.voteResult}>
//           <h3 className={styles.sidebarTitle}>Poll Results</h3>
//           <div className={styles.voteChart}>
//             {pollOptions.map((option, index) => (
//               <div key={option.id} className={styles.voteBar}>
//                 <span className={styles.barLabel}>
//                   {option.label} ({votes[index]} votes)
//                 </span>
//                 <div
//                   className={styles.bar}
//                   style={{ width: `${getPercentage(votes[index])}%` }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//           <button onClick={resetPoll} className={styles.resetButton}>
//             Reset Poll
//           </button>
//         </div>
//       ) : (
//         <>
//           <h3 className={styles.sidebarTitle}>
//             Choose Your Favorite Starter Anime!
//           </h3>
//           <div>
//             {pollOptions.map((option, index) => (
//               <div key={option.id} className={styles.pollSidebarItem}>
//                 <input
//                   type="radio"
//                   name="animePoll"
//                   value={option.id}
//                   checked={selectedPoll === option.id}
//                   onChange={() => handleVote(index)}
//                   className="mr-2"
//                 />
//                 <label>{option.label}</label>
//               </div>
//             ))}
//           </div>
//           <button onClick={handleSubmit} className={styles.submitButton}>
//             Submit
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default PollSidebar;

// src/components/PollSidebar.js
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/sidebars.module.css";

const PollSidebar = () => {
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]); // Initialize votes
  const [submitted, setSubmitted] = useState(false);

 const pollOptions = [
  { id: 1, label: "Dragon Ball Z" },
  { id: 2, label: "Pokemon" },
  { id: 3, label: "Naruto" },
  { id: 4, label: "One Piece" },
  { id: 5, label: "Death Note" },
  { id: 6, label: "Other" },
];

  // Fetch poll results
  useEffect(() => {
    const fetchPollResults = async () => {
      try {
        const response = await fetch("/api/poll");
        if (response.ok) {
          const data = await response.json();
          setVotes(data.votes || [0, 0, 0, 0, 0, 0]);
        } else {
          console.error("Failed to fetch poll results:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching poll results:", error);
      }
    };

    fetchPollResults();
  }, [submitted]); // Refetch results when votes are submitted or reset

  const handleVote = (index) => {
    if (!submitted) {
      setSelectedPoll(index + 1); // Set selected option ID
    }
  };

  const handleSubmit = async () => {
    if (selectedPoll !== null) {
      try {
        const response = await fetch("/api/poll", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ optionIndex: selectedPoll }), // Corrected payload format
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          console.error("Failed to submit vote:", await response.text());
        }
      } catch (error) {
        console.error("Error submitting vote:", error);
      }
    } else {
      alert("Please select an option before submitting.");
    }
  };

  const resetPoll = () => {
    setVotes([0, 0, 0, 0, 0, 0]);
    setSubmitted(false);
    setSelectedPoll(null);
  };

  const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);
  const getPercentage = (votesForOption) =>
    totalVotes > 0 ? Math.round((votesForOption / totalVotes) * 100) : 0;

  return (
    <div className={styles.pollSidebar}>
      {submitted ? (
        <div className={styles.voteResult}>
          <h3 className={styles.sidebarTitle}>Poll Results</h3>
          <div className={styles.voteChart}>
            {pollOptions.map((option, index) => (
              <div key={option.id} className={styles.voteBar}>
                <span className={styles.barLabel}>
                  {option.label} ({votes[index]} votes)
                </span>
                <div
                  className={styles.bar}
                  style={{ width: `${getPercentage(votes[index])}%` }}
                ></div>
              </div>
            ))}
          </div>
          <button onClick={resetPoll} className={styles.resetButton}>
            Reset Poll
          </button>
        </div>
      ) : (
        <>
          <h3 className={styles.sidebarTitle}>
            Choose Your Favorite Starter Anime!
          </h3>
          <div>
            {pollOptions.map((option, index) => (
              <div key={option.id} className={styles.pollSidebarItem}>
                <input
                  type="radio"
                  name="animePoll"
                  value={option.id}
                  checked={selectedPoll === option.id}
                  onChange={() => handleVote(index)}
                  className="mr-2"
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <button onClick={handleSubmit} className={styles.submitButton}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default PollSidebar;
