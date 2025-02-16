"use client";
import { useState } from 'react';
import styles from '../styles/Counter.module.css';

// Counter component: A simple counter with increase and decrease functionality
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter</h1>
      <p className={styles.count}>Current Count: {count}</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>Increase</button>
      <button className={styles.button} onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
