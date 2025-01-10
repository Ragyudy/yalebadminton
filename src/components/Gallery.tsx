import { Link } from "react-router-dom";
import { LazyImage } from "./LazyImage";

export function Gallery({
  thumbnails,
}: {
  thumbnails: Record<string, Record<string, string>>;
}) {
  return (
    <section className="gallery-container">
      {Object.entries(thumbnails).map(([year, subcategories]) => (
        <div key={year}>
          <div className="gallery-header">
            <h2>{year}</h2>
          </div>
          <div className="gallery-row">
            {Object.entries(subcategories).map(([subcategory, src]) => (
              <Link to={`/gallery/${year}/${subcategory}`} key={subcategory}>
                <div className="gallery-item">
                  <LazyImage src={src} alt={subcategory} />
                  <caption>{subcategory.replace(/-/g, " ")}</caption>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
