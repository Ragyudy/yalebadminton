import { useState } from "react";
import Container from "react-bootstrap/Container";
import styled, { css } from "styled-components";
import NavBar from "../components/NavBar";

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
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "10vh" }}>
        <Title>Frequently asked questions</Title>
        <Note>
          *note: this page is still in the works so if you have an urgent
          question, please contact one of the officers directly*
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
          We host tryouts at the beginning of each semester. Please check our
          instagram for updates.
        </Answer>
      </Container>
    </>
  );
}

export default Faq;
