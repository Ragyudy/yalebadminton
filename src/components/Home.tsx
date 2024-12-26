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
      {/* Splash Component */}
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

      {/* About Component */}
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
        <h2>About Us</h2>
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
      </motion.div>

      {/* Club vs Open Gym Component */}
      <div className="club-vs-open-gym" data-aos="fade-up">
        <h2>Club Badminton vs Open Gym Badminton</h2>
        <div className="comparison">
          <div className="comparison-item">
            <h3>Club Badminton</h3>
            <p>
              Competitive practices, team tournaments, and more structured play.
            </p>
          </div>
          <div className="comparison-item">
            <h3>Open Gym</h3>
            <p>Casual play, open to all students, no commitment required.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
