import { Link } from "react-router-dom";

export function Gallery() {
  const items = {
    "2024-25": [
      {
        id: "2024-25/fall-tournament",
        thumbnail: "2024-25/fall-2024-tournament",
        caption: "Fall Tournament",
      },
    ],
    "2023-24": [
      {
        id: "2023-24/fall-tournament",
        thumbnail: "2023-24/fall-2023-tournament",
        caption: "Fall Tournament",
      },
      {
        id: "2023-24/spring-tournament",
        thumbnail: "2023-24/spring-2024-tournament",
        caption: "Spring Tournament",
      },
      {
        id: "2023-24/social-events",
        thumbnail: "2023-24/social-events-2023-24",
        caption: "Social Events",
      },
    ],
    "2022-23": [
      {
        id: "2022-23/fall-tournament",
        thumbnail: "2022-23/fall-2022-tournament",
        caption: "Fall Tournament",
      },
    ],
  };

  return (
    <section className="gallery-container">
      {Object.entries(items).map(([year, data]) => (
        <>
          <div className="gallery-header">
            <h2>{year}</h2>
          </div>

          <div className="gallery-row">
            {data.map((item) => (
              <Link to={`${item.id}`} key={item.id}>
                <div className="gallery-item">
                  <img
                    src={`src/assets/img/gallery/thumbnails/${item.thumbnail}.jpg`}
                    alt={item.caption}
                    loading="lazy"
                  />
                  <caption>{item.caption}</caption>
                </div>
              </Link>
            ))}
          </div>
        </>
      ))}
    </section>
  );
}
