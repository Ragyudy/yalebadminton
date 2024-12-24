export function Home() {
  return (
    <div id="/">
      {/* Splash Component */}
      <div className="splash">
        <div className="splash-overlay">
          <img
            src="/favicon-dark.svg"
            alt="Yale Club Badminton Logo"
            className="splash-logo"
          />
          <h1>Yale Club Badminton</h1>
        </div>
      </div>

      {/* About Component */}
      <div className="about">
        <h2>About Us</h2>
        <p>
          Yale Club Badminton is a student-led organization that fosters
          competitive and recreational badminton. We organize team practices,
          tournaments, and open gym sessions to cater to players of all levels.
        </p>
      </div>

      {/* Club vs Open Gym Component */}
      <div className="club-vs-open-gym">
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
