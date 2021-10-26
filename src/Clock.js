import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from './useInterval';

const ClockContainer = styled.div`
  width: 30rem;
  height: 30rem;
  border: 1.5rem solid black;
  border-radius : 50%;
  margin:3rem auto;
  position: relative;
  padding: 2rem;
`;

const ClockFace = styled.div`
  position : relative;
  width: 100%;
  height: 100%;
`;

const Circle = styled.div`
  width : 2rem;
  height: 2rem;
  background-color: white;
  position: absolute;
  top : 50%;
  left: 50%;
  transform : translate(-50%, -50%);
  border-radius : 100%;
  z-index : 4;
`;

const Hand = styled.div`
  width : 50%;
  height: 6px;
  background : black;
  position : absolute;
  top : 50%;
  transition : 0.05s;
  transform : rotate(90deg);
  transform-origin: 100%;
  transition-timing-function : cubic-bezier(0.1, 2.7, 0.58, 1);
`;

const HourHand = styled(Hand)`
  z-index : 3;
  width : 30%;
  height : 8px;
  left : 20%;
  background : black;
  transform : rotate(${(props) => props.hour}deg);
`;
const MinHand = styled(Hand)`
  z-index : 2;
  background : rgb(24,24,24);
  transform : rotate(${(props) => props.min}deg);
  height: 8px;
`;

const SecHand = styled(Hand)`
  z-index : 1;
  width : 40%;
  left : 10%;
  background : rgb(46,46,46);
  transform : rotate(${(props) => props.sec}deg);
`;

const Clock = () => {

  const [second, setSecond] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  useInterval(() => {
    const now = new Date(); 
    const seconds = (now.getSeconds() / 60) * 360 + 90; //deg
    const mins = (now.getMinutes() /60) * 360 + 90; //deg
    const hours = (now.getHours() / 12) *360 + 90; //deg
    setSecond(seconds);
    setMin(mins);
    setHour(hours);
  }, 1000);

  return (
    <>
      <ClockContainer>
        <ClockFace>
          <Circle/>
          <HourHand hour={hour}/>
          <MinHand min={min}/>
          <SecHand sec={second}/>
        </ClockFace>
      </ClockContainer>
    </>
  )
}

export default Clock; 