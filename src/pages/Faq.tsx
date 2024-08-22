import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";

function Faq() {
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "10vh" }}>
        <h1>Frequently asked questions</h1>
        <p>Where do we play? 8th floor of PWG!</p>
        <p> under construction </p>
      </Container>
    </>
  );
}

export default Faq;
