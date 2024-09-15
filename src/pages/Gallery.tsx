import NavBar from "../components/NavBar";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { GallerySection } from "../components/StyledContainers";

const Title = styled.h1`
  text-align: center;
`;

const Note = styled.p`
  text-align: center;
  color: #00356b;
  transition: color 0.3s ease;
  margin-bottom: 0;

  &:hover {
    color: #286dc0;
  }
`;

function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (Ref.current) {
      observer.observe(Ref.current);
    }

    return () => {
      if (Ref.current) {
        observer.unobserve(Ref.current);
      }
    };
  }, []);
  return (
    <>
      <NavBar />
      <GallerySection ref={Ref} className={isVisible ? "visible" : ""}>
        <Title>Gallery</Title>
        <Note>photos, videos, and more to come {">:)"}</Note>
        <img
          src="/img/gifs/determined.gif"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "150px",
            margin: "auto",
          }}
        ></img>
        <h2 style={{ fontWeight: 500 }}>2023-24</h2>
        <Note>loading...</Note>

        <h2 style={{ fontWeight: 500 }}>2022-23</h2>
        <Note>loading...</Note>
      </GallerySection>
    </>
  );
}

export default Gallery;
