import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";

function Contact() {
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "10vh" }}>
        <h1>Contact Us</h1>
        <p>Follow our instagram @yalebadminton!</p>
      </Container>
    </>
  );
}

export default Contact;
