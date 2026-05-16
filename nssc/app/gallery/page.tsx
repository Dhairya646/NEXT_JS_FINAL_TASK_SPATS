import "../../styles/gallery.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a",
  "https://images.unsplash.com/photo-1464802686167-b939a6910659",
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <section>
        <h1 className="page-title">Gallery</h1>

        <p className="page-subtitle">
          Memories from previous editions, astronomy nights, workshops and
          events.
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt="Gallery" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}