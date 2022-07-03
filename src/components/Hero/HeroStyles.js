import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100%;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 22vh, 180px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const ContainerMainHeading = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    margin-bottom: 2.5rem;
  }
  & > img {
    width: 100%;
    max-width: 1100px;
    height: auto;
  }

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
