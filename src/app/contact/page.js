"use client";
import React from "react";
import "../../styles/globals.css";
import ContactForm from "../../components/ContactForm";
import styles from "../../styles/contactstyles.module.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  );
}
