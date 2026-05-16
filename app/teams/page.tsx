import "../../styles/teams.css";

const teamMembers = [
  {
    id: 1,
    name: "Nakul Sharma",
    role: "Governer",
    image:
      "",
  },

  {
    id: 2,
    name: "Abhinav Gothwal",
    role: "Governer",
    image:
      "",
  },

  {
    id: 3,
    name: "Anaya Dixit",
    role: "General Secretary",
    image:
      "",
  },

  {
    id: 4,
    name: "Vedant Malsure",
    role: "General Secretary",
    image:
      "",
  },
];

export default function TeamsPage() {
  return (
    <main className="teams-page">
      <section>
        <h1 className="page-title">Organizing Team</h1>

        <p className="page-subtitle">
          Meet the students and organizers behind NSSC 2026.
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.image} alt={member.name} />

              <h2>{member.name}</h2>

              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}