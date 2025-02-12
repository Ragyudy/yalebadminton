import React from "react";

interface TeamMemberProps {
  name: string;
  role?: string;
  collegeYear: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  collegeYear,
  imageSrc,
}) => {
  return (
    <div className="team-member">
      <div className="image-container">
        <img src={imageSrc} alt={name} />
      </div>
      <p className="name">{name}</p>
      {role && <p className="role">{role}</p>}
      <p className="college-year">{collegeYear}</p>
    </div>
  );
};

export default TeamMember;
