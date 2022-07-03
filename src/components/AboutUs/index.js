import React, { useEffect } from "react";
import { Container, Section } from "../../globalStyles";
import {
  AboutUsRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  AboutUsColumn,
} from "./AboutUsStyles";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function AboutUs({
  headline,
  description,
  img,
  alt,
  inverse,
  reverse,
}) {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <AboutUsRow reverse={reverse}>
          <AboutUsColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </AboutUsColumn>
          <AboutUsColumn bg={"#fafafa"}>
            <TextWrapper>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                {headline}
                <div></div>
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
              >
                {description}
              </Subtitle>
            </TextWrapper>
          </AboutUsColumn>
        </AboutUsRow>
      </Container>
    </Section>
  );
}
