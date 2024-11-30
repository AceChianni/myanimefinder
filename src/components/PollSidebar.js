// src/components/PollSidebar.js
"use client";
import React, { useState } from "react";
import styles from "@/styles/sidebars.module.css";

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

  const handleSubmit = async () => {
    if (selectedPoll !== null) {
      setSubmitted(true);

      // Mocking API submission logic
      try {
        const response = await fetch("api/poll", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ votes }),
        });

        if (!response.ok) {
          console.error("Failed to submit votes");
        }
      } catch (error) {
        console.error("Error submitting votes:", error);
      }
    } else {
      alert("Please select an option before submitting.");
    }
  };

  const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);
  const getPercentage = (votesForOption) =>
    totalVotes > 0 ? Math.round((votesForOption / totalVotes) * 100) : 0;

  return (
    <div className={styles.pollSidebar}>
      {submitted ? (
        // Render results after submission
        <div className={styles.voteResult}>
          <h3 className={styles.sidebarTitle}>Poll Results</h3>
          <div className={styles.voteChart}>
            {pollOptions.map((option, index) => (
              <div key={index} className={styles.voteBar}>
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
        </div>
      ) : (
        // Render poll before submission
        <>
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
          <button
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default PollSidebar;
