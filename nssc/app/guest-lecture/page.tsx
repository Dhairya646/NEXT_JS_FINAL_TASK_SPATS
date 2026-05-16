import "../../styles/guest.css";

const speakers = [
  {
    id: 1,
    name: "Dr. Shubhanshu Shukla",
    topic: "Future of Deep Space Missions",
    date: "12 January 2026",
    time: "6:00 PM",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    description:
      "Exploring upcoming interplanetary missions and the future of human space exploration.",
    index: "01",
  },
  {
    id: 2,
    name: "Dr. Patricia Cowings",
    topic: "Black Holes & Cosmic Mysteries",
    date: "13 January 2026",
    time: "4:00 PM",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description:
      "Understanding singularities, gravity and the mysteries hidden across galaxies.",
    index: "02",
  },
  {
    id: 3,
    name: "Prof. Neil deGrasse Tyson",
    topic: "AI in Astronomy",
    date: "14 January 2026",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    description:
      "How artificial intelligence is revolutionizing astronomy and space research.",
    index: "03",
  },
];

export default function GuestLecturePage() {
  return (
    <main className="guest-page">
      {/* Hero */}
      <section className="guest-hero">
        <div className="guest-hero-tag">NSSC 2026 — SPEAKER SERIES</div>
        <h1 className="guest-title">
          Guest<br />
          <span className="guest-title-outline">Lectures</span>
        </h1>
        <p className="guest-subtitle">
          Meet researchers, scientists and innovators sharing ideas about
          astronomy, exploration and future technologies.
        </p>

        {/* Decorative crosshairs */}
        <div className="guest-crosshair guest-crosshair-left">
          <span></span><span></span>
        </div>
        <div className="guest-crosshair guest-crosshair-right">
          <span></span><span></span>
        </div>
      </section>

      {/* Speaker cards */}
      <section className="guest-speakers-section">
        <div className="speaker-grid">
          {speakers.map((speaker) => (
            <div className="speaker-card" key={speaker.id}>
              {/* Index */}
              <div className="speaker-index">{speaker.index}</div>

              {/* Image with orbit rings */}
              <div className="speaker-image-wrapper">
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>
                <div className="orbit-dot orbit-dot-1"></div>
                <img src={speaker.image} alt={speaker.name} />
              </div>

              {/* Content */}
              <div className="speaker-content">
                <div className="speaker-meta">
                  <span className="speaker-date">{speaker.date}</span>
                  <span className="speaker-sep">·</span>
                  <span className="speaker-time">{speaker.time}</span>
                </div>

                <h2>{speaker.name}</h2>

                <div className="speaker-topic-row">
                  <div className="topic-line"></div>
                  <h3>{speaker.topic}</h3>
                </div>

                <p>{speaker.description}</p>

                <div className="speaker-footer">
                  <div className="speaker-footer-line"></div>
                  <span className="speaker-footer-label">REGISTER →</span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
