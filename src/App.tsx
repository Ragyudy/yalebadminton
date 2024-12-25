import { Home } from "./components/Home";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Faq } from "./components/Faq";
import { Gallery } from "./components/Gallery";
import { MasonryGrid } from "./components/MasonryGrid";

function App() {
  useEffect(() => {
    function updateFavicon() {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      favicon.href = prefersDarkScheme
        ? "/favicon-dark.svg"
        : "/favicon-light.svg";
    }

    updateFavicon();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateFavicon);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateFavicon);
    };
  }, []);

  const galleries = {
    "2024-25/fall-tournament": {
      title: "Fall 2024 Tournament",
      date: "11/1/24 - 11/3/24",
      images: [
        { path: "/src/assets/img/gallery/2024-25/fall-tournament/1.jpg" },
        { path: "/src/assets/img/gallery/2024-25/fall-tournament/2.jpg" },
        { path: "/src/assets/img/gallery/2024-25/fall-tournament/3.jpg" },
      ],
    },
    "2024-25/off-the-court": {
      title: "Social Events 2024-25",
      date: "more to come :)",
      images: [
        { path: "/src/assets/img/gallery/2024-25/off-the-court/1.jpg" },
        { path: "/src/assets/img/gallery/2024-25/off-the-court/2.jpg" },
      ],
    },
    "2023-24/off-the-court": {
      title: "Social Events 2023-24",
      date: "all year :)",
      images: [
        { path: "/src/assets/img/gallery/2023-24/off-the-court/1.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/2.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/3.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/4.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/5.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/6.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/7.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/8.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/9.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/10.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/11.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/12.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/13.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/14.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/15.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/16.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/17.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/18.jpg" },
        { path: "/src/assets/img/gallery/2023-24/off-the-court/19.jpg" },
      ],
    },
    "2023-24/spring-tournament": {
      title: "Spring 2024 Tournament",
      date: "3/29/24 - 3/31/24",
      images: [
        { path: "/src/assets/img/gallery/2023-24/spring-tournament/1.jpg" },
      ],
    },
    "2023-24/fall-tournament": {
      title: "Fall 2023 Tournament",
      date: "11/3/23 - 11/5/23",
      images: [
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/1.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/2.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/3.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/4.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/5.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/6.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/7.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/8.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/9.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/10.jpg" },
        { path: "/src/assets/img/gallery/2023-24/fall-tournament/11.jpg" },
      ],
    },
    "2022-23/fall-tournament": {
      title: "Fall 2022 Tournament",
      date: "11/4/22 - 11/6/22",
      images: [
        { path: "/src/assets/img/gallery/2022-23/fall-tournament/1.jpg" },
        { path: "/src/assets/img/gallery/2022-23/fall-tournament/2.jpg" },
        { path: "/src/assets/img/gallery/2022-23/fall-tournament/3.jpg" },
      ],
    },
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        {Object.entries(galleries).map(([path, data]) => (
          <Route
            key={path}
            path={`/gallery/${path}`}
            element={
              <MasonryGrid
                title={data.title}
                date={data.date}
                images={data.images}
              />
            }
          />
        ))}
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
