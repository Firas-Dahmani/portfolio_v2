import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { DevEngineerLogo } from './AllSvgs'
import Intro from './Intro'
import { lightTheme, mediaQueries } from "./Themes";


const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  height: 100dvh;
  overflow: hidden;
  position: relative;
  width: 100vw;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
      ${mediaQueries(30)`
      font-size: 1em;
  `};
    }
      h2 {
      ${mediaQueries(40)`
      font-size: 1.2em;
  `};
  }
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
  color: ${lightTheme.text};
  cursor: pointer;
  position: absolute;
  right: calc(1rem + 2vw);
  text-decoration: none;
  top: 2rem;
  z-index: 1;
    @media only screen and (max-width: 50em) {
    color: ${(props) => (props.click ? lightTheme.body : lightTheme.text)};
    }
`
const WORK = styled(NavLink)`
  color: ${lightTheme.text};
  position: absolute;
  right: calc(0.25rem + 2vw);
  text-decoration: none;
  top: 52%;
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
    color: ${(props) => (props.click ? lightTheme.body : lightTheme.text)};
  }
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
  @media only screen and (max-width: 50em) {
    color: ${props => props.theme.text}; 
  }
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 4.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
      @media only screen and (max-width: 50em) {
        width: ${props => props.click ? '150px' :'250px'  };
        height: ${props => props.click ? '150px' :'250px'  };
  };

`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: ${props => props.theme.text};
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;

    ${(props) =>
    props.click
        ? mediaQueries(50)`
        height: 50%;
        right: 0;
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;
    `
        : mediaQueries(50)`
        height: 0;
        width: 0;
    `};
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [isMobile, setIsMobile] = useState(false);

  
    // UseEffect to handle media query and window resize
    useEffect(() => {
      const mq = window.matchMedia("(max-width: 50em)");
  
      const handleMediaQueryChange = (e) => {
        setIsMobile(e.matches);
      };
  
      // Set initial state
      setIsMobile(mq.matches);
  
      // Add event listener for media query changes
      mq.addEventListener("change", handleMediaQueryChange);
  
      // Clean up event listener on unmount
      return () => {
        mq.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

    return (
        <MainContainer>
         <DarkDiv   click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            {isMobile ? (
                <SocialIcons theme="dark" />
            ) : (
                <SocialIcons theme={click ? "light" : "dark"} />
            )}
           
            <Center click={click}>
                <DevEngineerLogo  onClick={()=> handleClick()} width={click ? 180 : 300} height={click ? 180 : 300} fill={lightTheme.body} />
                <span>click here</span>
            </Center>

            <Contact target="_blank" href="mailto:firas1dahmani@gmail.com" click={click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Contact..
                </motion.h2>
            </Contact>

            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about" click={+click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    My Skills.
                </motion.h2>
            </SKILLS>

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main