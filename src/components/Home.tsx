import { motion } from "framer-motion";
import { MediaLinks } from "./MediaLinks";
import tournament from "../assets/img/gallery/2023-24/fall-tournament/7.jpg";
import practice from "../assets/img/home/practice.jpg";
import social from "../assets/img/gallery/2024-25/off-the-court/2.jpg";

export function Home() {
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(20px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <div className="home-container">
      <div className="splash">
        <div className="splash-left">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            Welcome to <br /> Yale Club Badminton!
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
          >
            We consist of competitive Yale undergraduate and graduate players
            and participate in away tournaments every semester. We recruit new
            players at the start of each semester – if you’re interested in
            representing Yale Badminton, please reach out to{" "}
            <a href="mailto:aadi.krishna@yale.edu">aadi.krishna@yale.edu</a>,{" "}
            <a href="mailto:ella.xu@yale.edu">ella.xu@yale.edu</a>, and{" "}
            <a href="mailto:grady.yu@yale.edu">grady.yu@yale.edu</a>. We’d love
            to talk to you :D!
          </motion.p>
          <div className="home-links">
            <MediaLinks />
          </div>
        </div>
        <motion.img
          src="/favicon-light.svg"
          alt="Yale Club Badminton Logo"
          className="splash-logo"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />
      </div>

      <Section title="Tournaments" imgSrc={tournament} imgLeft>
        Yale Club Badminton competes in tournaments every semester, traveling to
        different schools to challenge top collegiate teams. We’ve played in
        tournaments such as ABC Open and Boston Badminton Collegiate Cup.
      </Section>

      <Section title="Practices" imgSrc={practice}>
        We hold structured team practices multiple times a week, focusing on
        drills, match play, and fitness to help our players improve and prepare
        for competitions.
      </Section>

      <Section title="Socials" imgSrc={social} imgLeft>
        Beyond the court, we organize social events, team dinners, and bonding
        activities to foster a strong sense of community within the team.
      </Section>
    </div>
  );
}

function Section({
  title,
  imgSrc,
  imgLeft = false,
  children,
}: {
  title: string;
  imgSrc: string;
  imgLeft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className={`section-content ${imgLeft ? "img-left" : "img-right"}`}>
        {imgLeft ? (
          <>
            <div className="img-wrapper">
              <img src={imgSrc} alt={title} className="section-image" />
            </div>
            <p className="section-text">{children}</p>
          </>
        ) : (
          <>
            <p className="section-text">{children}</p>
            <div className="img-wrapper">
              <img src={imgSrc} alt={title} className="section-image" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
