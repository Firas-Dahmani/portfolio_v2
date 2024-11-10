import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme, mediaQueries } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import astronaut from '../assets/Images/spaceman.png';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;



const Main = styled.div`
  align-items: center;
  backdrop-filter: blur(4px);
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  display: flex;
  font-family: "Ubuntu Mono", sans-serif;
  font-size: calc(0.5rem + 1vw);
  height: 65vh;
  justify-content: center;
  left: calc(10rem + 5vw);
  line-height: 1.2;
  padding: 1rem;
  position: absolute;
  top: 11rem;
  width: 60vw;
  z-index: 3;

  ${mediaQueries(80)`
    height: 60vh;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
    width: 70vw;
  `};

  ${mediaQueries(40)`
    height: 60vh;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
    width: 60vw;
  `};

  ${mediaQueries(30)`
    backdrop-filter: none;
    height: auto;
    margin-top: 2rem;
    width: 50vw;
  `};

  ${mediaQueries(20)`
    font-size: calc(0.5rem + 1vw);
    padding: 1rem;
  `};
`;

const content = [
  "I'm a web developer based in Tunisia, passionate about crafting efficient and visually appealing digital solutions.",
  "With experience in both front-end and back-end technologies, I enjoy designing scalable applications and ensuring a seamless user experience. I’ve had the privilege of contributing to impactful projects during my roles at DIVA Software and Gregio Software, where I honed my skills in modern frameworks like React.js, Node.js, and MongoDB.",
  "I believe that creativity and attention to detail transform technical work into an art form. You can connect with me to discuss projects, share ideas, or explore opportunities."
];

const AboutPage = () => (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent /> 
  
        <Main>
          {content.map((text, index) => (
            <React.Fragment key={index}>
              {text}
              {index < content.length - 1 && <br />}
              {index < content.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Main>
  
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
  
export default AboutPage;
