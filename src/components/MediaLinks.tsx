import styled from "styled-components";
import { Instagram, Facebook, Twitter, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  a {
    margin: 0 1rem;
    font-size: 2rem;
    color: #666;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .instagram:hover {
    color: #e4405f;
  }

  .facebook:hover {
    color: #3b5998;
  }

  .twitter:hover {
    color: #1da1f2;
  }

  .youtube:hover {
    color: #ff0000;
  }
`;

function MediaLinks() {
  return (
    <SocialMediaIcons>
      <a href="https://www.instagram.com/yalebadminton/" className="instagram">
        <Instagram />
      </a>
      <a href="https://www.facebook.com/yalebadmintonclub" className="facebook">
        <Facebook />
      </a>
      <a href="https://twitter.com/yalebc" className="twitter">
        <Twitter />
      </a>
      <Link
        to="https://www.youtube.com/user/yalebadmintonclub"
        className="youtube"
      >
        <Youtube />
      </Link>
    </SocialMediaIcons>
  );
}

export default MediaLinks;
