"use client";
import styles from "../styles/sidebars.module.css";

const Sidebar = () => (
  <div className={`${styles.sidebar}`}>
    <h3 className={styles.sidebarTitle}>Helpful Links</h3>
    <ul className="space-y-2">
      {/* Link to an Anime Streaming Platform */}
      <li className={styles.sidebarItem}>
        <a
          href="https://www.crunchyroll.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Watch Anime on Crunchyroll
        </a>
      </li>

      {/* Link to Anime News and Updates */}
      <li className={styles.sidebarItem}>
        <a
          href="https://www.animenewsnetwork.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Latest Anime News
        </a>
      </li>

      {/* Link to Cosplay Ideas */}
      <li className={styles.sidebarItem}>
        <a
          href="https://www.cosplay.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Explore Cosplay Ideas
        </a>
      </li>

      {/* Link to Anime Fan Forums */}
      <li className={styles.sidebarItem}>
        <a
          href="https://myanimelist.net/forum/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Join Anime Discussions
        </a>
      </li>

      {/* Link to Cosplay Tutorials */}
      <li className={styles.sidebarItem}>
        <a
          href="https://www.youtube.com/results?search_query=cosplay+tutorials"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Watch Cosplay Tutorials
        </a>
      </li>

      {/* Link to Popular Anime Merchandise */}
      <li className={styles.sidebarItem}>
        <a
          href="https://www.goodsmile.info/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Shop Anime Merchandise
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;