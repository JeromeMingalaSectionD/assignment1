"use client";
import Link from 'next/link';
import styles from './styles/Layout.module.css';

// RootLayout component serves as the main layout wrapper for the application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Link href="/home">Home</Link>
            <Link href="/counter">Counter</Link>
            <Link href="/toggle">Toggle</Link>
            <Link href="/form">Form</Link>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
