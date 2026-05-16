import "../styles/home.css";
import Link from "next/link"

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <p className="small-text">NATIONAL STUDENTS' SPACE CHALLENGE</p>

        <h1>NSSC 2026</h1>

        <p className="hero-description">
          A celebration of astronomy, innovation, space technology and the
          future of exploration.
        </p>

        <div className="hero-buttons">
          <Link href="/teams">
            <button>Explore Teams</button>
          </Link>
          <Link href="/guest-lecture">
            <button>Guest Lectures</button>
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <h2>Beyond The Earth</h2>

          <p>
            Experience workshops, astronomy sessions, competitions, keynote
            talks and exhibitions inspired by the mysteries of space.
          </p>
        </div>

        <div className="about-card">
          <h2>Innovation & Research</h2>

          <p>
            Interact with students, scientists and innovators working on future
            technologies and space missions.
          </p>
        </div>
      </section>
    </main>
  );
}