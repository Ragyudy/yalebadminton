import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";

function ComingSoon() {
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "10vh", textAlign: "center" }}>
        <h1>This page doesn't exist yet, but hopefully it will soon!</h1>
      </Container>
    </>
  );
}

export default ComingSoon;
