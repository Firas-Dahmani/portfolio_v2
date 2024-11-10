import React from 'react';
import styled from 'styled-components';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import ConfigDark from '../config/particlesjs-config.json';
import ConfigLight from '../config/particlesjs-config-light.json';

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = React.memo(({ theme }) => {
  // Initialize particles instance
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: 'absolute', top: 0 }}
        options={theme === 'light' ? ConfigLight : ConfigDark} // Use `options` instead of `params`
        init={particlesInit}
      />
    </Box>
  );
});

export default ParticlesComponent;
