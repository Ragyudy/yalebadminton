import TeamMember from "./TeamMember";
import blank from "../assets/img/team/blank.jpg";

export function TeamPage() {
  const teamMembers = [
    {
      name: "Aadi Krishna",
      collegeYear: "Captain, GH '26",
      imageSrc: blank,
    },
    {
      name: "Ella Xu",
      collegeYear: "Captain, TD '26",
      imageSrc: blank,
    },
    {
      name: "Grady Yu",
      collegeYear: "Captain, SM '27",
      imageSrc: blank,
    },
    {
      name: "Ellen Zhang",
      collegeYear: "GH '26",
      imageSrc: blank,
    },
    {
      name: "Ed Joo",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Katherine Chou",
      collegeYear: "SM '25",
      imageSrc: blank,
    },
    {
      name: "Zhaoyang Zhang",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Derek Dong",
      collegeYear: "SY '25",
      imageSrc: blank,
    },
    {
      name: "Shuangjia Lu",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Joseph Zhang",
      collegeYear: "BF '25",
      imageSrc: blank,
    },
    {
      name: "Pei-Kai Tsai",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Daniel Zhang",
      collegeYear: "MY '26",
      imageSrc: blank,
    },
    {
      name: "Bryan Wong",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Sean Chang",
      collegeYear: "BF '27",
      imageSrc: blank,
    },
    {
      name: "Tom Hong",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Alicia Zheng",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Jack Yin",
      collegeYear: "BF '28",
      imageSrc: blank,
    },
    {
      name: "Christopher Kim",
      collegeYear: "BF '27",
      imageSrc: blank,
    },
    {
      name: "Yutong Li",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Kaiyuan Tang",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Ken Jung",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Annie Chen",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Aviral Jain",
      collegeYear: "DP '27",
      imageSrc: blank,
    },
    {
      name: "Evan Yip",
      collegeYear: "BR '28",
      imageSrc: blank,
    },
    {
      name: "Steven Zhang",
      collegeYear: "BR '28",
      imageSrc: blank,
    },
    {
      name: "Miyabi Shinki",
      collegeYear: "BK '28",
      imageSrc: blank,
    },
    {
      name: "Gavin Wong",
      collegeYear: "SY '28",
      imageSrc: blank,
    },
    {
      name: "Tina Wang",
      collegeYear: "BR '28",
      imageSrc: blank,
    },
    {
      name: "Harrison Souchereau",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
  ];

  return (
    <div className="team-container">
      <div className="team-header">
        <h2>Meet the Team</h2>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
