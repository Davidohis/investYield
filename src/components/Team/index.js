import React from "react";
import { TeamData } from "../../data/TeamData";
import { Container, Section } from "../../globalStyles";
import {
  TeamText,
  TeamTitle,
  TeamWrapper,
  TeamColumn,
  TeamName,
  Subtitle,
  TextWrapper,
} from "./TeamStyles";

const OurTeam = () => {
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
            Meet the Team <div></div>
          </TeamTitle>
          <Subtitle>
            The team is composed of seasoned professionals with diverse skills
            in finance, investment management, banking, software engineering and
            data sciences to ensure you get the best in class experience.
          </Subtitle>
        </TextWrapper>
        <TeamWrapper>
          {TeamData.map(({ img, id, name, title }) => (
            <TeamColumn
              key={id}
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + 1 * 0.1 }}
            >
              <img src={img} alt={""} />
              <div>
                <div></div>
                <TeamName>{name}</TeamName>
                <TeamText>{title}</TeamText>
              </div>
            </TeamColumn>
          ))}
        </TeamWrapper>
      </Container>
    </Section>
  );
};

export default OurTeam;
