// src/components/Sidebar.js
// "use client";
// import { useEffect, useState } from "react";
// import styles from "../styles/sidebars.module.css";

// const Sidebar = () => (
//   <div className="sidebar bg-white p-4 rounded-lg shadow-md">
//     <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//     <ul className="space-y-2">
//       <li>
//         <a href="/about" className="text-blue-600 hover:text-blue-800">
//           About
//         </a>
//       </li>
//       <li>
//         <a href="/contact" className="text-blue-600 hover:text-blue-800">
//           Contact
//         </a>
//       </li>
//       <li>
//         <a href="/anime-list" className="text-blue-600 hover:text-blue-800">
//           Anime List
//         </a>
//       </li>
//     </ul>
//   </div>
// );

// export default Sidebar;

// src/components/Sidebar.js
"use client";
import styles from "../styles/sidebars.module.css";

const Sidebar = () => (
  <div className={`${styles.sidebar}`}>
    <h3 className={styles.sidebarTitle}>Quick Links</h3>
    <ul className="space-y-2">
      <li className={styles.sidebarItem}>
        <a
          href="/about"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          About
        </a>
      </li>
      <li className={styles.sidebarItem}>
        <a
          href="/contact"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Contact
        </a>
      </li>
      <li className={styles.sidebarItem}>
        <a
          href="/anime-list"
          className={`${styles.sidebarItem} hover:text-blue-800`}
        >
          Anime List
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
