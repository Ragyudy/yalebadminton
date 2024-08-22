import styled from "styled-components";

const BackgroundContainer = styled.div`
  background-image: var(
    --background-image,
    url("/images/team_pic_at_stiles.jpeg")
  );
  opacity: var(--opacity, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export default BackgroundContainer;
