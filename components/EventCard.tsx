import "../styles/eventcard.css";

export default function EventCard({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className="event-card">
      <span>{date}</span>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}