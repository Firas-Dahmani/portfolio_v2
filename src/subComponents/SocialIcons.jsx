import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Facebook, Github, LinkedIn, Twitter, YouTube } from "../components/AllSvgs";
import { lightTheme, mediaQueries } from "../components/Themes";

const Icons = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 2rem;
  position: fixed;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;

    ${mediaQueries(20)`
      margin: 0.6rem 0;
  `};
  }

  ${mediaQueries(40)`
    left: 1rem;
      svg {
        width: 20px;
        height: 20px
      }
  `};
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? lightTheme.text : lightTheme.body};
`;

const IconWrapper = styled(motion.div)`
  color: inherit;
`;

const SocialLink = ({ href, icon: Icon, theme, delay }) => (
  <IconWrapper
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay }}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon width={25} height={25} fill={theme === "dark" ? lightTheme.text : lightTheme.body} />
    </a>
  </IconWrapper>
);

const SocialIcons = React.memo(({ theme }) => {
  return (
    <Icons>
      <SocialLink href="https://github.com/Firas-Dahmani" icon={Github} theme={theme} delay={1} />
      <SocialLink href="https://www.linkedin.com/in/firas-dahmani/" icon={LinkedIn} theme={theme} delay={1.2} />
      <SocialLink href="https://www.facebook.com/profile.php?id=100014224620748" icon={Facebook} theme={theme} delay={1.4} />

      <Line
        color={theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
});

export default SocialIcons;
