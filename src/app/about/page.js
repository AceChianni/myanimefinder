import React from "react";
import "../../styles/globals.css";
import styles from "../../styles/aboutstyles.module.css";

export default function AboutPage() {
  return (
    <div className={styles.contentContainer}>
      {" "}
      {/* Main container */}
      <h1>Introducing Me</h1> {/* Title in Comic Sans */}
      <h2>About Me</h2>
      <section>
        <p>
          Hi there! I&apos;m Ace Chianní (she/her), a New Orleans-based creative
          with a love for art, anime, gaming, and all things nerdy. I&apos;m
          driven by a passion for crafting meaningful, engaging experiences that
          merge creativity with technology. Whether it&apos;s through design,
          storytelling, or exploration, my goal is to create impactful,
          immersive works that inspire and connect. As I transition into the
          tech space, I&apos;m excited to bring fresh, innovative ideas to life
          and share my journey of discovery and creation with the world.
        </p>
      </section>
      <hr className={styles.sectionDivider} />
      <h2>About This Project</h2>
      <section>
        <p>
          Welcome to <strong>Anniime Recommendations</strong>, a project created
          to combine my passion for anime and technology. This web app helps
          users discover anime tailored to their preferences through a fun and
          interactive quiz. The recommendations page allows you to explore
          popular and curated anime lists, while other features like the contact
          form and polls keep the experience engaging.
        </p>
      </section>
      <hr className={styles.sectionDivider} />
      <h2>How It Works</h2>
      <section>
        <ul>
          <li>
            ◆ <strong>Quiz:</strong> Answer questions to find anime tailored to
            your tastes.
          </li>
          <li>
            ◆ <strong>Recommendations:</strong> Browse curated anime lists based
            on genres and popularity.
          </li>
          <li>
            ◆ <strong>Contact Us:</strong> Reach out via the contact form for
            feedback or queries.
          </li>
          <li>
            ◆ <strong>Interactive Polls:</strong> Vote for your favorite anime
            in fun, dynamic polls.
          </li>
        </ul>
      </section>
      <hr className={styles.sectionDivider} />
      <h2>Tools and Technologies</h2>
      <section>
        <ul>
          <li>
            ◆ <strong>Languages:</strong> JavaScript, HTML5, CSS3
          </li>
          <li>
            ◆ <strong>Frameworks:</strong> React, Next.js
          </li>
          <li>
            ◆ <strong>UI Libraries:</strong> Tailwind CSS
          </li>
          <li>
            ◆ <strong>AI Integration:</strong> Used to generate anime
            recommendations and streamline development.
          </li>
          <li>
            ◆ <strong>API Integration:</strong> REST APIs for anime data
          </li>
          <li>
            ◆ <strong>Version Control:</strong> GitHub for collaboration and
            versioning
          </li>
          <li>
            ◆ <strong>Deployment:</strong> Hosted on Vercel
          </li>
        </ul>
      </section>
      <hr className={styles.sectionDivider} />
      <h2>Why I Built This</h2>
      <section>
        <p>
          <strong>Anniime Recommendations</strong> represents my passion for
          creativity and technology. It&apos;s a space where I can showcase my
          design and development skills while sharing my love for anime with the
          world. This project is a step toward my dream of becoming a freelance
          artist and entrepreneur, traveling the world, and inspiring others
          through my work.
        </p>
      </section>
    </div>
  );
}
