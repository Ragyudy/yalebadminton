import { Home } from "./components/Home";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Faq } from "./components/Faq";
import { Gallery } from "./components/Gallery";
import { MasonryGrid } from "./components/MasonryGrid";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import { importImages } from "./utils/importImages";
import TeamPage from "./components/TeamPage";

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

  const images = importImages();
  const thumbnails = images["thumbnails"];
  const nonThumbnailCategories = Object.entries(images).filter(
    ([category]) => category !== "thumbnails"
  );

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<Gallery thumbnails={thumbnails} />} />
        {nonThumbnailCategories.flatMap(([category, subcategories]) =>
          Object.entries(subcategories).map(([subcategory, images]) => (
            <Route
              key={`${category}/${subcategory}`}
              path={`/gallery/${category}/${subcategory}`}
              element={
                <MasonryGrid
                  title={subcategory.replace(/-/g, " ")}
                  date={`${category}`} // Assuming year is the category
                  images={Object.entries(images).map(([name, path]) => ({
                    title: name.replace(/-/g, " "),
                    path,
                  }))}
                />
              }
            />
          ))
        )}
        <Route path="/faq" element={<Faq />} />
        <Route path="/past-teams" element={<ComingSoon />} />
        <Route path="/constitution" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
