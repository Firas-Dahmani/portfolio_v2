import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, mediaQueries } from './Themes';
import { Design, Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

    ${mediaQueries(50)`
    flex-direction:column;  
    padding:8rem 0;
    height:auto;
    &>*:nth-child(5){
      margin-bottom:5rem;
    }   
  `};

  ${mediaQueries(30)` 
    &>*:nth-child(5){
      margin-bottom:4rem;
    } 
  `};
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

    ${mediaQueries(60)`
    height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
  `};
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 2vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);
      svg{
        width:30px;
        height:30px;
      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

    ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};
`;

const MySkillsPage = () => {
  return (
  <ThemeProvider theme={lightTheme}>
    <Box>
      <LogoComponent theme="light" />
      <SocialIcons theme="dark" />
      <PowerButton />
      <ParticleComponent theme="light" />
      <Main>
        <Title>
          <Design width={40} height={40} /> Frontend Developer
        </Title>
        <Description>
          I enjoy building visually appealing and user-friendly interfaces that enhance the overall user experience.
        </Description>
        <Description>
          <strong>Skills</strong>
          <p>React.js, Redux, HTML, CSS, JavaScript, Tailwind, Bootstrap, etc.</p>
        </Description>
        <Description>
          <strong>Tools</strong>
          <p>VS Code, GitHub, Figma, etc.</p>
        </Description>
      </Main>
      <Main>
        <Title>
          <Develope width={40} height={40} /> Backend Developer
        </Title>
        <Description>
          I specialize in creating scalable and efficient server-side solutions, ensuring seamless performance for applications.
        </Description>
        <Description>
          <strong>Skills</strong>
          <p>Node.js, Nest.js, MongoDB, MySQL, etc.</p>
        </Description>
        <Description>
          <strong>Tools</strong>
          <p>Postman, Docker, Git, etc.</p>
        </Description>
      </Main>
      <BigTitle text="SKILLS" top="80%" right="30%" />
    </Box>
  </ThemeProvider>
  );
};

export default MySkillsPage;
