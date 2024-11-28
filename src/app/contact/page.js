"use client";
import React from "react";
import ContactForm from '../../components/ContactForm';
import styles from "../../styles/contactstyles.module.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
}
