import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translate(0,0);
    opacity:0.1;
  }

  100% {
    transform: translate(50px,-100px);
    opacity:1;
  }
`;

export const FloatingBubbleWrappaer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  width: 100%;
  .bubble {
    background: ${({ theme }) => theme.colors.green2};
    border-radius: 50%;
    position: absolute;
    animation: ${float} 15s linear infinite;
    z-index: -1;
  }
  .bubble-big {
    width: 56px;
    height: 56px;
    position: absolute;
  }
  .bubble-small {
    width: 32px;
    height: 32px;
  }
  .bubble-medium {
    width: 40px;
    height: 40px;
  }
  .bubble-1 {
    bottom: 10%;
    left: 5%;
  }
  .bubble-2 {
    top: 17%;
    left: 5%;
  }
  .bubble-3 {
    top: 20%;
    right: 10%;
  }
  .bubble-4 {
    top: 60%;
    left: 60%;
  }
  .bubble-5 {
    top: 28%;
    left: 44%;
  }
  .bubble-6 {
    bottom: 10%;
    right: 10%;
  }
  .bubble-7 {
    top: 70%;
    left: 36%;
  }
  .bubble-8 {
    bottom: 5%;
    right: 189%;
  }
  .bubble-9 {
    top: 50%;
    right: -5%;
  }
  .bubble-10 {
    bottom: 0%;
    right: 0%;
  }
`;
