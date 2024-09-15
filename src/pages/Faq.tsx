import { useState } from "react";
import { FadeInContainer } from "../components/StyledContainers";
import styled, { css } from "styled-components";
import NavBar from "../components/NavBar";
import { useEffect, useRef } from "react";

const Title = styled.h1`
  text-align: center;
`;

const Note = styled.p`
  text-align: center;
  color: #00356b;
  // transition: color 0.3s ease;

  // &:hover {
  //   color: #286dc0;
  }
`;

const Question = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
  cursor: pointer;
  color: #286dc0;
`;

const Answer = styled.div<{ show: boolean }>`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.4s ease, opacity 0.4s ease;

  ${({ show }) =>
    show &&
    css`
      max-height: 500px;
      opacity: 1;
    `}
`;

function Faq() {
  // Container fade-in effect
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

  // FAQ questions and answers
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <NavBar />
      <FadeInContainer ref={Ref} className={isVisible ? "visible" : ""}>
        <Title>Frequently asked questions</Title>
        <Note>
          *note: this page is still in the works so if you have an urgent
          question, please contact one of the officers directly*
        </Note>
        <Note>
          *As of Sep 14, 2024, we will be hosting tryouts on Monday, Sep 16,
          2024. Sign up for a slot{" "}
          <a href="https://docs.google.com/spreadsheets/d/1_2xDzduZ2XgM2rXJasvceuPDNRiEs9qhCqGz9Sp30AQ/edit?gid=0#gid=0">
            here
          </a>
          !
        </Note>
        <Question onClick={() => toggleAnswer(0)}>
          Where do we practice?
        </Question>
        <Answer show={openQuestions.includes(0)}>
          Our practices are held on the 8th floor of the Payne Whitney Gymnasium
          (PWG).
        </Answer>

        <Question onClick={() => toggleAnswer(1)}>
          How can I join the club?
        </Question>
        <Answer show={openQuestions.includes(1)}>
          We host tryouts at the beginning of each semester. Check our instagram
          for updates :D.
        </Answer>
      </FadeInContainer>
    </>
  );
}

export default Faq;
