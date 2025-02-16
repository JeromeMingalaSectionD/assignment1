"use client";
import { useState } from 'react';
import styles from '../styles/Toggle.module.css';

// Toggle component: A simple switch that toggles between ON and OFF states
export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Toggle</h1>
      <p className={styles.status}>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button className={styles.button} onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}