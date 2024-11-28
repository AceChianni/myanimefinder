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

  const handleSubmit = async () => {
    if (selectedPoll !== null) {
      setSubmitted(true);

      // Send the votes data to the backend (API)
      try {
        const response = await fetch("/poll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            votes,
          }),
        });

        if (response.ok) {
          console.log("Votes submitted successfully");
        } else {
          console.error("Failed to submit votes");
        }
      } catch (error) {
        console.error("Error submitting votes:", error);
      }
    } else {
      alert("Please select an option before submitting.");
    }
  };

  // Helper function to calculate percentage of votes
  const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);
  const getPercentage = (votesForOption) =>
    totalVotes > 0 ? (votesForOption / totalVotes) * 100 : 0;

  return (
    <div
      className={styles.pollSidebar}
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div
        className={styles.sidebarTitle}
        style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
      >
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
        style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
      >
        Submit
      </button>

      {/* Show results after submission */}
      {submitted && (
        <div className={styles.voteResult}>
          <h3>Poll Results</h3>
          <div className={styles.voteChart}>
            {pollOptions.map((option, index) => (
              <div key={index} className={styles.voteBar}>
                <div
                  className={styles.bar}
                  style={{ width: `${getPercentage(votes[index])}%` }}
                >
                  {option.label} <br />
                  <span>({votes[index]} votes)</span>
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
