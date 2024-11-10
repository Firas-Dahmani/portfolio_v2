import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Anchor, Link } from '../components/AllSvgs';

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  
  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  
  &.hidden {
    display: none;
  }
`;

const AnchorComponent = ({ number }) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    const diff = Math.max(bodyHeight - (scrollPosition + windowSize));
    const diffP = (diff * 100) / (bodyHeight - windowSize);

    if (ref.current) {
      ref.current.style.transform = `translateY(${-diffP}%)`;
    }

    if (hiddenRef.current) {
      hiddenRef.current.classList.toggle('hidden', scrollPosition > 5);
    }
  }, []);

  useEffect(() => {
    const debounceScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 20);
    };

    window.addEventListener('scroll', debounceScroll);

    return () => {
      window.removeEventListener('scroll', debounceScroll);
    };
  }, [handleScroll]);

  return (
    <Container>
      <PreDisplay ref={hiddenRef}>
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(number)].map((_, id) => (
          <Link key={id} width={25} height={25} fill="currentColor" className="chain" />
        ))}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
