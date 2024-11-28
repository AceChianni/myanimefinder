"use client";
import { useState } from "react";
import styles from "../styles/contactstyles.module.css";

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
//       const response = await fetch("/api/email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           to: "your-email@example.com",
//           subject: "Contact Form Submission",
//           html: `
//             <p><strong>Name:</strong> ${formData.name}</p>
//             <p><strong>Email:</strong> ${formData.email}</p>
//             <p><strong>Phone:</strong> ${formData.phone}</p>
//             <p><strong>Message:</strong> ${formData.message}</p>
//           `,
//         }),
//       });

//       if (response.ok) {
//         setIsPopupVisible(true);
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setTimeout(() => {
//           setIsPopupVisible(false);
//         }, 3000);
//       } else {
//         console.error("Failed to send email");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <div className={styles.contactFormContainer}>
//         <h1 className={styles.contactFormHeading}>Contact Us</h1>
//         <form className={styles.contactForm} onSubmit={handleSubmit}>
//           <div className={styles.contactFormGroup}>
//             <label className={styles.contactFormLabel} htmlFor="name">
//               Name:
//             </label>
//             <input
//               className={styles.contactFormInput}
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.contactFormGroup}>
//             <label className={styles.contactFormLabel} htmlFor="email">
//               Email:
//             </label>
//             <input
//               className={styles.contactFormInput}
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.contactFormGroup}>
//             <label className={styles.contactFormLabel} htmlFor="phone">
//               Phone:
//             </label>
//             <input
//               className={styles.contactFormInput}
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.contactFormGroup}>
//             <label className={styles.contactFormLabel} htmlFor="message">
//               Message:
//             </label>
//             <textarea
//               className={styles.contactFormTextarea}
//               id="message"
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button className={styles.contactFormButton} type="submit">
//             Submit ❤
//           </button>
//         </form>
//       </div>

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

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/lib/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsPopupVisible(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsPopupVisible(false), 3000);
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h1 className={styles.contactFormHeading}>Contact Us</h1>
        <label className={styles.contactFormLabel} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.contactFormInput}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className={styles.contactFormLabel} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.contactFormInput}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className={styles.contactFormLabel} htmlFor="phone">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={styles.contactFormInput}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label className={styles.contactFormLabel} htmlFor="message">
          Message:
        </label>
        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            rows="4"
            className={styles.contactFormTextarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.contactFormButton}>
          Submit ❤
        </button>
      </form>

      {isPopupVisible && (
        <div
          className={`${styles.contactFormPopup} ${styles.contactFormPopupVisible}`}
        >
          <p>Thanks, someone will contact you soon.</p>
        </div>
      )}
    </div>
  );
}
