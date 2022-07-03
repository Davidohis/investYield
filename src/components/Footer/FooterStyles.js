import styled from "styled-components";
import { Link } from "react-router-dom";
import { Column, Row } from "../../globalStyles";

export const FooterContainer = styled.div`
  background-color: #fff;
  padding: 4rem 0 3rem 0;
`;

export const FooterWrapper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #000000;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterRow = styled(Row)`
  flex-wrap: wrap;
  @media screen and (max-width: 820px) {
    > div {
      width: 20%;
    }

    > div:first-child {
      width: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;

    * {
      width: 100%;
      text-align: center;
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
`;

export const FooterColumn = styled(Column)`
  display: flex;
  justify-content: baseline;
  margin-top: -10rem;
  @media screen and (max-width: 999px) {
    align-items: center;
    grid-column: 1/-1;
    margin-bottom: 1rem;
  }
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  color: #000000;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-weight: 500;
`;

export const FooterLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  margin-bottom: 1rem;
  line-height: 40px;

  &:hover {
    color: #08b29b;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const FooterLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  margin-bottom: 1px;
  display: flex;
  justify-content: baseline;

  @media screen and (max-width: 960px) {
    margin-top: 10rem;
  }
`;

export const SocialIcon = styled.img`
  width: 220px;
  height: auto;
`;

export const FooterRights = styled.div`
  color: #000000;
  margin-bottom: 16px;
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 30px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & > p {
    padding-left: 35px;
  }
`;

export const FooterSocialIcon = styled.a`
  color: #0553c8;
  font-size: 24px;
`;

export const FooterAddress = styled.div`
  color: #0553c8;
  margin: 0.4rem auto 0.4rem;
  max-width: 20rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2;
  text-align: center;

  @media screen and (min-width: 1000px) {
    margin-left: 0px;
    text-align: left;
    margin-right: 1rem;
  }
`;
