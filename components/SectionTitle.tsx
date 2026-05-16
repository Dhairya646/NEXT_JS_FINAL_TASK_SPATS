export default function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="section-title">
      <h1 className="page-title">{title}</h1>

      <p className="page-subtitle">{subtitle}</p>
    </div>
  );
}