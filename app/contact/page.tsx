"use client";

import "../../styles/contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-small-text">
          TRANSMISSION CHANNEL OPEN
        </p>

        <h1 className="contact-title">Contact Mission Control</h1>

        <p className="contact-description">
          Reach out for collaborations, event queries, workshops,
          registrations or partnerships related to NSSC 2026.
        </p>
      </section>

      <section className="contact-main-section">
        <div className="contact-left">
          <div className="contact-panel">
            <div className="panel-line"></div>

            <span className="panel-tag">
              COMMUNICATION NODE
            </span>

            <h2>Send A Transmission</h2>

            <form className="contact-form">
              <div className="input-group">
                <label>FULL NAME</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="input-group">
                <label>EMAIL ADDRESS</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="input-group">
                <label>MESSAGE</label>

                <textarea
                  rows={8}
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        <div className="contact-right">
          <div className="info-card">
            <span>01</span>

            <h3>Email</h3>

            <p>contact@nssc2026.com</p>
          </div>

          <div className="info-card">
            <span>02</span>

            <h3>Instagram</h3>

            <p>@spats.nssc.iitkgp</p>
          </div>

          <div className="info-card">
            <span>03</span>

            <h3>Location</h3>

            <p>IIT Kharagpur</p>
          </div>

          {/* <div className="radar-box">
            <div className="radar-circle radar-1"></div>
            <div className="radar-circle radar-2"></div>
            <div className="radar-circle radar-3"></div>

            <div className="radar-line"></div>

            <div className="radar-dot"></div>
          </div> */}
        </div>
      </section>
    </main>
  );
}