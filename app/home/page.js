"use client";
import { useState } from 'react';
import styles from '../styles/Home.module.css';

// Home component: The main page of the web application
export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to My Web App</h1>
    </div>
  );
}