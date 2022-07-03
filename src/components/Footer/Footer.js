import React from "react";
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid,
} from "./FooterStyles";
import { footerData, footerSocialData } from "../../data/FooterData";
import { Container, Row, Section } from "../../globalStyles";
import InvestyieldLogo from "../../assets/svg/investyieldLogo.svg";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <Container>
        <FooterWrapper>
          <FooterGrid justify="space-between">
            <FooterColumn id="footerLogo">
              <FooterLogo to="/">
                <SocialIcon src={InvestyieldLogo} />
              </FooterLogo>
              <FooterAddress>Save Small. Live Large</FooterAddress>
            </FooterColumn>
            {footerData.map((footerItem, index) => (
              <FooterLinkItems key={index}>
                <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
                {footerItem.links.map((link, linkIndex) => (
                  <FooterLink key={linkIndex} to="/">
                    {link}
                  </FooterLink>
                ))}
              </FooterLinkItems>
            ))}
            <FooterLinkItems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLink to="/">+234 909 878 9987</FooterLink>
              <FooterLink to="/">help@investyield.com</FooterLink>
              <FooterLink to="/">
                32, Adeola Odeku, Victoria Island, Lagos, Nigeria.
              </FooterLink>
              <FooterLink to="/">---</FooterLink>
              <Row align="center" margin="auto  0 0 0" gap="1rem">
                {footerSocialData.map((social, index) => (
                  <FooterSocialIcon
                    key={index}
                    href="/"
                    target="_blank"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </FooterSocialIcon>
                ))}
              </Row>

              <FooterLink to="/">---</FooterLink>
            </FooterLinkItems>
          </FooterGrid>

          <FooterRights>
            <p>2020 investYield. All Rights Reserved</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </FooterRights>
        </FooterWrapper>
      </Container>
    </Section>
  );
}

export default Footer;
