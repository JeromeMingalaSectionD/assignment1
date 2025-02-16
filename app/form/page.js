"use client";
import { useState } from 'react';
import styles from '../styles/Form.module.css';

// Form component: A simple form that collects a user's name and displays a thank-you message upon submission
export default function Form() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          <button className={styles.button} type="submit">Submit</button>
        </form>
      ) : (
        <p className={styles.message}>Thank you, {name}!</p>
      )}
    </div>
  );
}
