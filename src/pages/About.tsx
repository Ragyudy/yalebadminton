import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { FadeInContainer } from "../components/StyledContainers";

function About() {
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
        <h1>About Us</h1>
        <p>
          We consist of competitive Yale undergraduate and graduate players and
          participate in away tournaments every semester and we recruit new
          players at the start of each semester. If you’re a new student
          interested in representing Yale Badminton, please reach out to{" "}
          <a href="mailto:aadi.krishna@yale.edu">aadi.krishna@yale.edu</a>,{" "}
          <a href="mailto:ella.xu@yale.edu">ella.xu@yale.edu</a>, and{" "}
          <a href="mailto:grady.yu@yale.edu">grady.yu@yale.edu</a>. We’d love to
          talk to you :D!
        </p>
        <p>
          For those of you who are looking for more relaxed rallies, note that
          there should be open court times that are posted on the PWG website.
        </p>
        <img
          src="/img/handsome_dan_pup.jpg"
          style={{ width: "100%", maxWidth: "400px" }}
        />
        <p>
          Omg it's handsome dan! (to distract you from the fact that this page
          is unfinished T-T I'm working on it I promise :'))
        </p>
      </FadeInContainer>
    </>
  );
}

export default About;
