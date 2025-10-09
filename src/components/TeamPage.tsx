import TeamMember from "./TeamMember";
import blank from "../assets/img/team/blank.jpg";
import grady from "../assets/img/team/grady.jpg";
import ella from "../assets/img/team/ella.jpg";
import shuangjia from "../assets/img/team/shuangjia.jpg";
import songtao from "../assets/img/team/songtao.jpg";
import sean from "../assets/img/team/sean.jpg";
import steven from "../assets/img/team/steven.jpg";
import aadi from "../assets/img/team/aadi.jpg";
import ellen from "../assets/img/team/ellen.jpg";
import jack from "../assets/img/team/jack.jpg";
import angie from "../assets/img/team/angie.jpg";
import emily from "../assets/img/team/emily.jpg";
import tom from "../assets/img/team/tom.jpg";
import zhaoyang from "../assets/img/team/zhaoyang.jpg";
import miyabi from "../assets/img/team/miyabi.jpg";
import ken from "../assets/img/team/ken.jpg";
import jenny from "../assets/img/team/jenny.jpg";
import chris from "../assets/img/team/chris.jpg";

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
      name: "Aadi Krishna",
      collegeYear: "Former Captain, GH '26",
      imageSrc: aadi,
    },
    {
      name: "Ella Xu",
      collegeYear: "Former Captain, TD '26",
      imageSrc: ella,
    },
    {
      name: "Ellen Zhang",
      collegeYear: "Former Captain, GH '26",
      imageSrc: ellen,
    },
    {
      name: "Angie Liu",
      collegeYear: "Social Media, SY '29",
      imageSrc: angie,
    },
    {
      name: "Annie Geng",
      collegeYear: "JE '28",
      imageSrc: blank,
    },
    {
      name: "Bryan Wong",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Christopher Kim",
      collegeYear: "BF '27",
      imageSrc: chris,
    },
    {
      name: "Emily Chen",
      collegeYear: "GH '29",
      imageSrc: emily,
    },
    {
      name: "Evan Yip",
      collegeYear: "BR '28",
      imageSrc: blank,
    },
    {
      name: "Flora Li",
      collegeYear: "TD '29",
      imageSrc: blank,
    },
    {
      name: "Gavin Wong",
      collegeYear: "SY '28",
      imageSrc: blank,
    },
    {
      name: "Harrison Souchereau",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Jenny Lu",
      collegeYear: "Graduate Student",
      imageSrc: jenny,
    },
    {
      name: "Kai Omidyar",
      collegeYear: "MC '28",
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
      imageSrc: ken,
    },
    {
      name: "Matthew Li",
      collegeYear: "PM '29",
      imageSrc: blank,
    },
    {
      name: "Miyabi Shinki",
      collegeYear: "BK '28",
      imageSrc: miyabi,
    },
    {
      name: "Phillip Kang",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Pierce Nguyen",
      collegeYear: "PC '29",
      imageSrc: blank,
    },
    {
      name: "Ruyi Liu",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Sean Chang",
      collegeYear: "BF '27",
      imageSrc: sean,
    },
    {
      name: "Shuangjia Lu",
      collegeYear: "Graduate Student",
      imageSrc: shuangjia,
    },
    {
      name: "Shuhao Song",
      collegeYear: "Graduate Student",
      imageSrc: blank,
    },
    {
      name: "Songtao Huang",
      collegeYear: "Graduate Student",
      imageSrc: songtao,
    },
    {
      name: "Tina Wang",
      collegeYear: "BR '28",
      imageSrc: blank,
    },
    {
      name: "Tom Hong",
      collegeYear: "Graduate Student",
      imageSrc: tom,
    },
    {
      name: "William Zhu",
      collegeYear: "ES '29",
      imageSrc: blank,
    },
    {
      name: "Zhaoyang Zhang",
      collegeYear: "Graduate Student",
      imageSrc: zhaoyang,
    },

    // Add these people to past teams
    // {
    //   name: "Annie Chen",
    //   collegeYear: "Graduate Student",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Aviral Jain",
    //   collegeYear: "DP '27",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Daniel Zhang",
    //   collegeYear: "MY '26",
    //   imageSrc: blank,
    // },

    // {
    //   name: "Pei-Kai Tsai",
    //   collegeYear: "Graduate Student",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Alicia Zheng",
    //   collegeYear: "Graduate Student",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Vanessa Zarm",
    //   collegeYear: "Graduate Student",
    //   imageSrc: vanessa,
    // },
    // {
    //   name: "Ed Joo",
    //   collegeYear: "Graduate Student",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Katherine Chou",
    //   collegeYear: "SM '25",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Derek Dong",
    //   collegeYear: "SY '25",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Joseph Zhang",
    //   collegeYear: "BF '25",
    //   imageSrc: blank,
    // },
    // {
    //   name: "Yutong Li",
    //   collegeYear: "Graduate Student",
    //   imageSrc: blank,
    // },
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
