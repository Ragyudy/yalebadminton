import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeInContainer = styled(Container)`
  padding-top: 10vh;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
    animation: ${fadeIn} 1s ease-in-out;
  }
`;

export const HomePageContainer = styled(Container)`
  margin: 0 auto;
  max-width: 1000px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #333;
  align-items: center;
  text-align: center;
  position: relative;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
    animation: ${fadeIn} 1s ease-in-out;
  }

  @media (max-width: 576px) {
    margin: 0 auto 75px 0;
    min-height: 100vh;
  }
`;

export const GallerySection = styled(Container)`
  padding-top: 10vh;
  padding-bottom: 100px;
  h2 {
    margin-top: 30px;
    font-size: 23px;
    padding: 0 30px;
  }

  p a {
    font-weight: 800;
    color: #96cdcd !important;
  }

  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
    animation: ${fadeIn} 1s ease-in-out;
  }
`;
