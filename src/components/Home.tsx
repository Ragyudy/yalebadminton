import { motion } from "motion/react";

export function Home() {
  const textVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div id="/">
      <div className="splash">
        <div className="splash-overlay">
          <motion.img
            src="/favicon-dark.svg"
            alt="Yale Club Badminton Logo"
            className="splash-logo"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2,
            }}
          />
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.4,
            }}
          >
            Yale Club Badminton
          </motion.h1>
        </div>
      </div>

      <motion.div
        className="about"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.6,
        }}
      >
        <h2>Who We Are</h2>
        <p>
          We consist of competitive Yale undergraduate and graduate players who
          participate in away tournaments every semester. Whether you're a
          seasoned player or just getting started, we welcome all skill levels
          to try out – we recruit new members at the beginning of each semester.
          If you’re interested in representing Yale Badminton, please reach out
          to <a href="mailto:grady.yu@yale.edu">grady.yu@yale.edu</a>,{" "}
          <a href="mailto:jack.yin@yale.edu">jack.yin@yale.edu</a>, and{" "}
          <a href="mailto:steven.zhang.shz3@yale.edu">
            steven.zhang.shz3@yale.edu
          </a>
          . We'd love to talk to you!
        </p>
        <br />
        <p>
          *If you are looking for more relaxed rallies, note that there should
          be open court times that are posted on the PWG website.
        </p>
      </motion.div>

      <motion.div
        className="about"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.8,
        }}
      >
        <h2>Tournaments</h2>
        <p>We compete in several tournaments throughout the year, including:</p>
        <ul>
          <li>
            •{" "}
            <strong>
              Northeastern Collegiate Team Badminton Championships
            </strong>
          </li>
          <li>
            • <strong>Invitationals</strong> – we participated in the Amherst
            Badminton Invitational this year!
          </li>
          <li>
            • <strong>Scrimmages</strong> with neighboring schools
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="about"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          delay: 1.0,
        }}
      >
        <h2>Beyond the Court</h2>
        <p>
          Throughout the semester, we host social events for both team members
          and the broader Yale community. Stay tuned for upcoming events --
          we've got some fun stuff planned!
        </p>
      </motion.div>

      <motion.div
        className="about"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          delay: 1.2,
        }}
      >
        <h2>Interested in Joining?</h2>
        <p>
          We host tryouts at the beginning of each semester. Follow us on{" "}
          <a href="https://www.instagram.com/yalebadminton/" target="_blank">
            Instagram
          </a>{" "}
          to be the first to know about tryouts and other team updates.
        </p>
      </motion.div>
    </div>
  );
}
