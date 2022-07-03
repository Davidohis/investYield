import React from "react";
import { Container, Section } from "../../globalStyles";
import {
  TeamText,
  TeamTitle,
  TeamWrapper,
  TeamColumn,
  TeamName,
  TextWrapper,
} from "./TeamStyles";
import UnknowPerson from "../../assets/null.png";

const OurAdvisoryTeam = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="Team">
      <Container>
        <TextWrapper>
          <TeamTitle>
            Advisory Team <span>{"{Coming Soon}"}</span>
            <div></div>
          </TeamTitle>
        </TextWrapper>
        <TeamWrapper>
          {Array.from({ length: 5 }, (_, i) => {
            return (
              <TeamColumn
                key={i}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5 + 1 * 0.1 }}
              >
                <img src={UnknowPerson} alt={""} />
                <div>
                  <div></div>
                  <TeamName>Adviser</TeamName>
                  <TeamText>Null</TeamText>
                </div>
              </TeamColumn>
            );
          })}
        </TeamWrapper>
      </Container>
    </Section>
  );
};

export default OurAdvisoryTeam;
