import NavBar from "../components/NavBar";
import styled from "styled-components";
import { FadeInContainer } from "../components/StyledContainers";
import { useState, useEffect, useRef } from "react";

const Title = styled.h1`
  text-align: center;
`;

const Note = styled.p`
  text-align: center;
  color: #00356b;
  transition: color 0.3s ease;

  &:hover {
    color: #286dc0;
  }
`;

function Team() {
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
      <FadeInContainer ref={Ref} className={isVisible ? "visible" : ""}>
        <Title>Meet the Team</Title>
        <Note>coming soon...</Note>
      </FadeInContainer>
    </>
  );
}

export default Team;
