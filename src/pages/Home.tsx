import Container from "react-bootstrap/Container";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import MediaLinks from "../components/MediaLinks";

// Define fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components
const StyledContainer = styled(Container)`
  margin: 0 auto;
  max-width: 1000px;
  justify-content: center;
  display: flex;
  flex-direction: column; /* Change to column to stack sections */
  height: 100vh;
  color: #333;
  align-items: center;
  text-align: center;
  position: relative;

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: 100vh;
  }
`;

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #00356b;
  transition: color 0.3s ease;

  &:hover {
    color: #286dc0;
  }

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
  transition: color 0.3s ease;

  &:hover {
    color: #63aaff;
  }

  // tablet
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  // mobile
  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const AboutSection = styled.section`
  padding: 1rem 2rem;
  width: 100%;
  text-align: center;
  opacity: 0; /* Start invisible */
  transition: opacity 1s ease-in-out;
  &.visible {
    opacity: 1; /* Fade in when visible */
    animation: ${fadeIn} 1s ease-in-out;
  }

  // tablet
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  // mobile
  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`;

const AboutTitle = styled.h3`
  font-size: 3rem;
  color: #00356b;
  margin-bottom: 1rem;

  // tablet
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  // mobile
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.25rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;

  // tablet
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  // mobile
  @media (max-width: 576px) {
    font-size: 0.875rem;
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
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <StyledContainer>
      <Landing>
        <Title>Yale Badminton Club</Title>
        <Subtitle>Welcome to our (new) official website!</Subtitle>
      </Landing>
      <AboutSection ref={aboutRef} className={isVisible ? "visible" : ""}>
        <AboutTitle>About Us</AboutTitle>
        <AboutText>
          We consist of competitive Yale undergraduate and graduate players and
          participate in away tournaments every semester and we recruit new
          players at the start of each semester. If you’re a new student
          interested in representing Yale Badminton, please reach out to{" "}
          <a href="mailto:aadi.krishna@yale.edu">aadi.krishna@yale.edu</a>,{" "}
          <a href="mailto:ella.xu@yale.edu">ella.xu@yale.edu</a>, and{" "}
          <a href="mailto:grady.yu@yale.edu">grady.yu@yale.edu</a>. We’d love to
          talk to you :D!
        </AboutText>
        <AboutText>
          For those of you who are looking for more relaxed rallies, note that
          there should be open court times that are posted on the PWG website.
        </AboutText>
        <LinksContainer>
          <Link to="/Team">Team</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Faq">FAQ</Link>
        </LinksContainer>
        <MediaLinks />
      </AboutSection>
    </StyledContainer>
  );
}

export default Home;
