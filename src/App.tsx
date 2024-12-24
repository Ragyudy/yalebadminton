import { Home } from "./components/Home";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
