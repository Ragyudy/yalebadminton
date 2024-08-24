import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import styled from "styled-components";

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
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "10vh" }}>
        <Title>Meet the Team</Title>
        <Note>coming soon...</Note>
      </Container>
    </>
  );
}

export default Team;
