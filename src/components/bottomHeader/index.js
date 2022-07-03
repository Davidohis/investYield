import React from "react";
import { Container, Section } from "../../globalStyles";
import { BottomHeaderWrapper } from "./bottomHeaderStyle";
import GoogleStore from "../../assets/google.png";
import AppleStore from "../../assets/apple.png";

export default function BottomHeaderComponent() {
  return (
    <Section
      smPadding="50px 10px"
      position="relative"
      inverse
      id="BottomHeader"
    >
      <Container>
        <BottomHeaderWrapper>
          <h1>What are you still waiting for ?</h1>
          <p>Download the app on your mobile device now.</p>

          <div>
            <img src={GoogleStore} alt="app" />
            <img src={AppleStore} alt="app" />
          </div>
        </BottomHeaderWrapper>
      </Container>
    </Section>
  );
}
