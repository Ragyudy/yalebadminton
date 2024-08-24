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
  margin-bottom: 0;

  &:hover {
    color: #286dc0;
  }
`;

function Gallery() {
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "10vh" }}>
        <Title>Gallery</Title>
        <Note>photos, videos, and more to come {">:)"}</Note>
        <Note>under construction</Note>
      </Container>
    </>
  );
}

export default Gallery;
