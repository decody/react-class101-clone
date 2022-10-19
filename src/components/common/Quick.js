import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const QuickTop = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #f27b00;
  border-radius: 100%;
  transform: rotateY(0deg);
  backface-visibility: visible;
  opacity: 1;
  transition: 2s;
`;
const Animate = keyframes`
    0% {
       opacity: 0;
       transform: rotate(225deg) translate(-5px, -5px);
    }
    50% {
       opacity: 1;
    }
    100% {
       opacity: 0;
       transform: rotate(225deg) translate(5px, 5px);
    }
`;
const QuickButton = styled.button`
  cursor: pointer;
  text-indent: -9999px;
  font-size: 0;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(225deg);
    animation: ${Animate} 2s infinite;
  }
  &:after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(225deg);
    animation: ${Animate} 2s infinite 0.3s;
  }
`;

export function Quick() {
  // 스크롤시 toggle
  const flag = 500;
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll);
  }, [offset]);

  // 위로가기
  const moveToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return document.documentElement.scrollTop > flag ? (
    <QuickTop>
      <QuickButton onClick={moveToTop}>위로</QuickButton>
    </QuickTop>
  ) : null;
}
