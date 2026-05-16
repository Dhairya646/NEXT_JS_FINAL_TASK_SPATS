"use client";

import { useState, useEffect } from "react";
import "../../styles/contact.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Submission extends FormData {
  id: string;
  timestamp: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("nssc_contact_submissions");
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newSubmission: Submission = {
      ...formData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };

    const existing = localStorage.getItem("nssc_contact_submissions");
    const allSubmissions: Submission[] = existing ? JSON.parse(existing) : [];
    allSubmissions.push(newSubmission);
    localStorage.setItem(
      "nssc_contact_submissions",
      JSON.stringify(allSubmissions)
    );
    setSubmissions(allSubmissions);

    console.group("📡 NSSC 2026 — New Transmission Received");
    console.log("🧑‍🚀 Name     :", formData.name);
    console.log("📬 Email    :", formData.email);
    console.log("💬 Message  :", formData.message);
    console.log("🕐 Timestamp:", newSubmission.timestamp);
    console.log("📦 All Submissions in Storage:", allSubmissions);
    console.groupEnd();

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-tag">TRANSMISSION CHANNEL OPEN</div>
        <h1 className="contact-title">
          Contact<br />
          <span className="contact-title-accent">Mission Control</span>
        </h1>
        <p className="contact-description">
          Reach out for collaborations, event queries, workshops, registrations
          or partnerships related to NSSC 2026.
        </p>
        <div className="contact-hero-line"></div>
      </section>

      {/* Main Grid */}
      <section className="contact-main-section">
        {/* Left: Form */}
        <div className="contact-panel">
          <div className="panel-corner panel-corner-tl"></div>
          <div className="panel-corner panel-corner-tr"></div>
          <div className="panel-corner panel-corner-bl"></div>
          <div className="panel-corner panel-corner-br"></div>

          <div className="panel-header">
            <span className="panel-tag">COMMUNICATION NODE — 01</span>
            <h2>Send A Transmission</h2>
          </div>

          {submitted ? (
            <div className="success-state">
              <div className="success-icon">✓</div>
              <p className="success-text">Transmission Received. We&apos;ll respond shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">FULL NAME</label>
                <div className="input-wrapper">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-glow"></div>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <div className="input-wrapper">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-glow"></div>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="message">MESSAGE</label>
                <div className="input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="input-glow"></div>
                </div>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span className="btn-text">SEND MESSAGE</span>
                <span className="btn-arrow">→</span>
                <div className="btn-bg"></div>
              </button>

              
            </form>
          )}
        </div>

        {/* Right: Info cards + radar */}
        <div className="contact-right">
          <div className="info-card">
            <div className="info-card-num">01</div>
            <h3>Email</h3>
            <p>contact@nssc2026.com</p>
          </div>

          <div className="info-card">
            <div className="info-card-num">02</div>
            <h3>Instagram</h3>
            <p>@spats.nssc.iitkgp</p>
          </div>

          <div className="info-card">
            <div className="info-card-num">03</div>
            <h3>Location</h3>
            <p>IIT Kharagpur, West Bengal</p>
          </div>

          <div className="radar-box">
            <div className="radar-ring radar-ring-1"></div>
            <div className="radar-ring radar-ring-2"></div>
            <div className="radar-ring radar-ring-3"></div>
            <div className="radar-sweep"></div>
            <div className="radar-center"></div>
            <div className="radar-dot radar-dot-1"></div>
            <div className="radar-dot radar-dot-2"></div>
            <div className="radar-label">SIGNAL ACTIVE</div>
          </div>
        </div>
      </section>
    </main>
  );
}
