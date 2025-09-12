import TeamMember from "./TeamMember";
import blank from "../assets/img/team/blank.jpg";
import grady from "../assets/img/team/grady.jpg";
import ella from "../assets/img/team/ella.jpg";
import shuangjia from "../assets/img/team/shuangjia.jpg";
import songtao from "../assets/img/team/songtao.jpg";
import vanessa from "../assets/img/team/vanessa.jpg";
import sean from "../assets/img/team/sean.jpg";
import steven from "../assets/img/team/steven.jpg";
import aadi from "../assets/img/team/aadi.jpg";
import ellen from "../assets/img/team/ellen.jpg";
import jack from "../assets/img/team/jack.jpg";

export function TeamPage() {
  const teamMembers = [
    {
      name: "Grady Yu",
      collegeYear: "Captain, SM '27",
      imageSrc: grady,
    },
    {
      name: "Jack Yin",
      collegeYear: "Captain, BF '28",
      imageSrc: jack,
    },
    {
      name: "Steven Zhang",
      collegeYear: "Captain, BR '28",
      imageSrc: steven,
    },
    {
      name: "Ella Xu",
      collegeYear: "TD '26",
      imageSrc: ella,
    },
    {
      name: "Ellen Zhang",
      collegeYear: "GH '26",
      imageSrc: ellen,
    },
    {
      name: "Aadi Krishna",
      collegeYear: "GH '26",
      imageSrc: aadi,
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
      imageSrc: shuangjia,
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
      imageSrc: sean,
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
      name: "Vanessa Zarm",
      collegeYear: "Graduate Student",
      imageSrc: vanessa,
    },
    {
      name: "Songtao Huang",
      collegeYear: "Graduate Student",
      imageSrc: songtao,
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
