"use client";

import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>NSSC 2026</h2>
      </div>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/guest-lecture">Guest Lecture</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}