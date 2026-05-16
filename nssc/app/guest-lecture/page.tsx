import "../../styles/guest.css";

const speakers = [
  {
    id: 1,
    name: "Dr. Shubhanshu Shukla",
    topic: "Future of Deep Space Missions",
    date: "12 January 2026",
    time: "6:00 PM",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    description:
      "Exploring upcoming interplanetary missions and the future of human space exploration.",
  },

  {
    id: 2,
    name: "Dr. Patricia Cowings",
    topic: "Black Holes & Cosmic Mysteries",
    date: "13 January 2026",
    time: "4:00 PM",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description:
      "Understanding singularities, gravity and the mysteries hidden across galaxies.",
  },

  {
    id: 3,
    name: "Prof. Neil deGrasse Tyson",
    topic: "AI in Astronomy",
    date: "14 January 2026",
    time: "7:30 PM",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    description:
      "How artificial intelligence is revolutionizing astronomy and space research.",
  },
];

export default function GuestLecturePage() {
  return (
    <main className="guest-page">
      <section>
        <h1 className="page-title">Guest Lectures</h1>

        <p className="page-subtitle">
          Meet researchers, scientists and innovators sharing ideas about
          astronomy, exploration and future technologies.
        </p>

        <div className="speaker-grid">
          {speakers.map((speaker) => (
            <div className="speaker-card" key={speaker.id}>
              <div className="speaker-image-wrapper">
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>

                <img src={speaker.image} alt={speaker.name} />
              </div>

              <div className="speaker-content">
                <h2>{speaker.name}</h2>

                <h3>{speaker.topic}</h3>

                <span>
                  {speaker.date} • {speaker.time}
                </span>

                <p>{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}