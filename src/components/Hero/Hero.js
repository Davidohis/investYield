import React from "react";
import { MainHeading } from "../../globalStyles";
import { ContainerMainHeading, HeroSection } from "./HeroStyles";
import HeroImageOne from "../../assets/hero-1.png";
import HeroImageTwo from "../../assets/hero-2.png";

const Hero = () => {
  return (
    <HeroSection>
      <ContainerMainHeading>
        <MainHeading>
          Building a community of smart savers with a smart saving culture.
        </MainHeading>
        <img src={HeroImageOne} alt={""} />

        <img src={HeroImageTwo} alt={""} />
      </ContainerMainHeading>
    </HeroSection>
  );
};

export default Hero;
