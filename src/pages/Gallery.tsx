import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";

function Gallery() {
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "10vh" }}>
        <h1>Gallery</h1>
        <p>vlogs, photos, videos, and more to come {">:)"}</p>
        <p>under construction</p>
      </Container>
    </>
  );
}

export default Gallery;
