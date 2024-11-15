import React from 'react';
import styled from 'styled-components';
import { DarkTheme, mediaQueries } from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${({ color }) => (color === 'dark' ? DarkTheme.text : DarkTheme.body)};
  font-family: 'Pacifico', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

        ${mediaQueries(40)`
      font-size: 1.5em;
        left: 1rem;
        top: 2rem;
  `};
`;

const LogoComponent = React.memo(({ theme = 'light' }) => {
  return <Logo color={theme}>FD</Logo>;
});

export default LogoComponent;
