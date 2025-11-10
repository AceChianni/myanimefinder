// // /app/contact/page.js
// "use client";
// import React from "react";
// import ContactForm from '../../components/ContactForm';
// import styles from "../../styles/contactstyles.module.css";

// export default function ContactPage() {
//   return (
//     <main className="contact-page">
//       <div className="container">
//         <ContactForm />
//       </div>
//     </main>
//   );
// }
// src/app/contact/page.js
"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex justify-center px-6 py-20">
      <ContactForm />
    </main>
  );
}
