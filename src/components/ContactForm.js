// // /components/ContactForm.js
// "use client";
// import { useState } from "react";
// import styles from "../styles/contactstyles.module.css";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Call the API route to send the email
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setIsPopupVisible(true);
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setTimeout(() => setIsPopupVisible(false), 3000);
//       } else {
//         console.error("Email sending failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   return (
//     <div className={styles.contactFormContainer}>
//       <form className={styles.contactForm} onSubmit={handleSubmit}>
//         <h1 className={styles.contactFormHeading}>Contact Us</h1>
//         <label className={styles.contactFormLabel} htmlFor="name">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           className={styles.contactFormInput}
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <label className={styles.contactFormLabel} htmlFor="email">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className={styles.contactFormInput}
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label className={styles.contactFormLabel} htmlFor="phone">
//           Phone:
//         </label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           className={styles.contactFormInput}
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//         <label className={styles.contactFormLabel} htmlFor="message">
//           Message:
//         </label>
//         <div className={styles.formGroup}>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             className={styles.contactFormTextarea}
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className={styles.contactFormButton}>
//           Submit ❤
//         </button>
//       </form>

//       {isPopupVisible && (
//         <div
//           className={`${styles.contactFormPopup} ${styles.contactFormPopupVisible}`}
//         >
//           <p>Thanks, someone will contact you soon.</p>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <div className="bg-panel-light dark:bg-panel-dark p-8 rounded-organic shadow-soft w-full max-w-lg space-y-6 relative">

      {sent && (
        <div className="absolute top-2 right-2 bg-[var(--accent)] text-[var(--surface)] px-3 py-1 rounded-full text-sm shadow-soft">
          Message sent ✓
        </div>
      )}

      <h1 className="text-2xl font-semibold text-center">Contact Me</h1>

      <form className="space-y-5" onSubmit={handleSubmit}>

        {["name", "email", "phone"].map((field) => (
          <div key={field} className="flex flex-col gap-1">
            <label className="text-sm opacity-80 capitalize">{field}</label>
            <input
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              required
              value={formData[field]}
              onChange={handleChange}
              className="rounded-xl p-3 bg-white/60 dark:bg-white/10 border border-[var(--neutral)]/40 focus:border-[var(--accent)] focus:ring-2 ring-[var(--accent)]/30 outline-none transition"
            />
          </div>
        ))}

        <div className="flex flex-col gap-1">
          <label className="text-sm opacity-80">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl p-3 bg-white/60 dark:bg-white/10 border border-[var(--neutral)]/40 focus:border-[var(--accent)] focus:ring-2 ring-[var(--accent)]/30 outline-none transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[var(--accent)] text-[var(--surface)] font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
