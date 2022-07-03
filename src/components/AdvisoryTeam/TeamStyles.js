import styled from "styled-components";
import { motion } from "framer-motion";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const TeamTitle = styled.h2`
  text-align: left;
  letter-spacing: 0.4rem;
  line-height: 40px;
  color: #0553c8;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;

  & > span {
    color: #3f3d56;
  }

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }

  & > div {
    border-bottom: 5px solid #f20000;
    width: 30px;
    height: 30px;
  }
`;

export const Subtitle = styled(motion.p)`
  margin: 25px 0px;
  line-height: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  color: #3f3d56;
`;

export const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2.5rem;
  grid-gap: 3rem;
  grid-row-gap: 3rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TeamColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 150px;

  & > img {
    border-radius: 150px 150px 0px 0px;
    height: 300px;
    width: 100%;
    object-fit: fill;
  }

  & > div {
    height: 130px;
    text-align: center;
    width: 100%;

    & div {
      height: 5px;
      width: 100%;
      background-image: linear-gradient(90deg, #0553c8 50%, #08b29b 0);
      top: 0;
      left: 0;
    }
  }
`;

export const TeamImageWrapper = styled.div`
  margin-bottom: 1rem;
  border: 2px solid #000;
  padding: 30px;
`;
export const TeamName = styled.h3`
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 2px;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const TeamText = styled.p`
  margin: 0.5rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;

  @media screen and (max-width: 768px) {
    font-size: 0.65rem;
  }
`;
