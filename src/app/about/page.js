import React from "react";
import "../../styles/globals.css";
import styles from "../../styles/aboutstyles.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading1}>Introducing Me</h1>
        <h2 className={styles.heading2}>About Me</h2>
        <section>
          <p className={styles.paragraph}>
            Hi there! I&apos;m{" "}
            <span className={styles.boldText}>Ace Chianní</span> (she/her), a
            New Orleans-based creative with a love for art, anime, gaming, and
            all things nerdy. I&apos;m driven by a passion for crafting
            meaningful, engaging experiences that merge creativity with
            technology. Whether it&apos;s through design, storytelling, or
            exploration, my goal is to create impactful, immersive works that
            inspire and connect. As I transition into the tech space, I&apos;m
            excited to bring fresh, innovative ideas to life and share my
            journey of discovery and creation with the world.
          </p>
        </section>
        <hr className={styles.sectionDivider} />
        <h2 className={styles.heading2}>About This Project</h2>
        <section>
          <p className={styles.paragraph}>
            Welcome to{" "}
            <span className={styles.boldText}>Anniime Recommendations</span>, a
            project created to combine my passion for anime and technology. This
            web app helps users discover anime tailored to their preferences
            through a fun and interactive quiz. The recommendations page allows
            you to explore popular and curated anime lists, while other features
            like the contact form and polls keep the experience engaging.
          </p>
        </section>
        <hr className={styles.sectionDivider} />
        <h2 className={styles.heading2}>How It Works</h2>
        <section>
          <ul className={styles.list}>
            <li>
              <span className={styles.boldText}>Quiz:</span> Answer questions to
              find anime tailored to your tastes.
            </li>
            <li>
              <span className={styles.boldText}>Recommendations:</span> Browse
              curated anime lists based on genres and popularity.
            </li>
            <li>
              <span className={styles.boldText}>Contact Us:</span> Reach out via
              the contact form for feedback or queries.
            </li>
            <li>
              <span className={styles.boldText}>Interactive Polls:</span> Vote
              for your favorite anime in fun, dynamic polls.
            </li>
          </ul>
        </section>
        <hr className={styles.sectionDivider} />
        <h2 className={styles.heading2}>Tools and Technologies</h2>
        <section>
          <ul className={styles.list}>
            <li>
              <span className={styles.boldText}>Languages:</span> JavaScript,
              HTML5, CSS3
            </li>
            <li>
              <span className={styles.boldText}>Frameworks:</span> React,
              Next.js
            </li>
            <li>
              <span className={styles.boldText}>UI Libraries:</span> Tailwind
              CSS
            </li>
            <li>
              <span className={styles.boldText}>AI Integration:</span> Used to
              generate anime recommendations and streamline development.
            </li>
            <li>
              <span className={styles.boldText}>API Integration:</span> REST
              APIs for anime data
            </li>
            <li>
              <span className={styles.boldText}>Version Control:</span> GitHub
              for collaboration and versioning
            </li>
            <li>
              <span className={styles.boldText}>Deployment:</span> Hosted on
              Vercel
            </li>
          </ul>
        </section>
        <hr className={styles.sectionDivider} />
        <h2 className={styles.heading2}>Why I Built This</h2>
        <section>
          <p className={styles.paragraph}>
            <span className={styles.boldText}>Anniime Recommendations</span>{" "}
            represents my passion for creativity and technology. It&apos;s a
            space where I can showcase my design and development skills while
            sharing my love for anime with the world. This project is a step
            toward my dream of becoming a freelance artist and entrepreneur,
            traveling the world, and inspiring others through my work.
          </p>
        </section>
      </div>
    </div>
  );
}
