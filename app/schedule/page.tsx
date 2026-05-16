import "../../styles/schedule.css";

const schedule = [
  {
    day: "Day 1",
    events: [
      "Opening Ceremony",
      "Rocket Design Workshop",
      "Astronomy Quiz",
    ],
  },

  {
    day: "Day 2",
    events: [
      "Guest Lectures",
      "Space Technology Expo",
      "Stargazing Session",
    ],
  },

  {
    day: "Day 3",
    events: [
      "Mars Rover Competition",
      "Research Presentations",
      "Closing Ceremony",
    ],
  },
];

export default function SchedulePage() {
  return (
    <main className="schedule-page">
      <section>
        <h1 className="page-title">Event Schedule</h1>

        <p className="page-subtitle">
          Explore the complete timeline of NSSC 2026 events, workshops and
          sessions.
        </p>

        <div className="timeline">
          {schedule.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h2>{item.day}</h2>

                <ul>
                  {item.events.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}