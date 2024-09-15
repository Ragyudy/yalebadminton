import styled from "styled-components";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import MediaLinks from "../components/MediaLinks";
import { HomePageContainer } from "../components/StyledContainers";
import { useEffect, useRef, useState } from "react";
// import Carousel from "../components/Carousel";

const Title = styled.h1`
  font-size: 5rem;
  color: #00356b;
  // transition: color 0.3s ease;

  // &:hover {
  //   color: #286dc0;
  // }

  // tablet
  @media (max-width: 768px) {
    font-size: 3rem;
  }

  // mobile
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #286dc0;
  // transition: color 0.3s ease;

  // &:hover {
  //   color: #63aaff;
  // }

  // tablet
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  // mobile
  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const LinksContainer = styled.div`
  margin-top: 2rem;
  font-size: 1.25rem;

  a {
    color: #286dc0;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00356b;
    }
  }
  // tablet
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  // mobile
  @media (max-width: 576px) {
    font-size: 0.875rem;
  }
`;

function Home() {
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
    <HomePageContainer ref={Ref} className={isVisible ? "visible" : ""}>
      <Title>Yale Badminton Club</Title>
      <Subtitle>Welcome to our (new) official website!</Subtitle>
      <h2>
        *TRYOUTS ON MONDAY, SEP 16TH. SIGN UP{" "}
        <a href="https://docs.google.com/spreadsheets/d/1_2xDzduZ2XgM2rXJasvceuPDNRiEs9qhCqGz9Sp30AQ/edit?gid=0#gid=0">
          HERE
        </a>
        !*
      </h2>
      <img
        src="/img/team/team_pic_at_stiles.jpeg"
        style={{
          paddingTop: "15px",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "10px",
        }}
      />
      {/* <Carousel /> */}
      <LinksContainer>
        <Link to="/About">About</Link>
        <Link to="/Team">Team</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Faq">FAQ</Link>
      </LinksContainer>
      <MediaLinks />
    </HomePageContainer>
  );
}

export default Home;
