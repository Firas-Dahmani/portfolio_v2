import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  position: fixed;
  top: ${({ top = '0' }) => top};  /* Default value */
  left: ${({ left = '0' }) => left};  /* Default value */
  right: ${({ right }) => right};  
  color: ${({ theme }) => `rgba(${theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;

const BigTitle = ({ top, left, right, text }) => {
  return <Text top={top} left={left} right={right}>{text}</Text>;
};

export default React.memo(BigTitle);
