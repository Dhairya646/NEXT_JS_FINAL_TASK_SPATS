import "../styles/stars.css";

export default function StarBackground() {
  const stars = Array.from({ length: 120 });

  return (
    <div className="stars-container">
      {stars.map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></span>
      ))}
    </div>
  );
}