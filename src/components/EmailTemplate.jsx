// components/EmailTemplate.jsx
import React from "react";
// components/EmailTemplate.js
export const EmailTemplate = ({ name, email, phone, message }) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);
