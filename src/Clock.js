import React, { useState } from 'react';
import { useInterval } from './useInterval';
import './Clock.scss';

const Clock = () => {

  const [second, setSecond] = useState();
  const [min, setMin] = useState();
  const [hour, setHour] = useState();

  useInterval(() => {
    const now = new Date(); 
    const seconds = (now.getSeconds() / 60) * 360 + 90; //deg
    const mins = (now.getMinutes() /60) * 360 + 90; //deg
    const hours = (now.getHours() / 12) *360 + 90; //deg
    
    setSecond(seconds);
    setMin(mins);
    setHour(hours);
  }, 1000);

  const hourStyle = {
    transform: `rotate(${hour}deg)`
  };

  const minStyle = {
    transform: `rotate(${min}deg)`
  };
  
  const secStyle = {
    transform: `rotate(${second}deg)`
  };
  
  

  return (
    <>
      <div className="clock-container">
        <div className="clock-face">
          <div className="circle"/>
          <div className="hand hour" style={hourStyle}/>
          <div className="hand min" style={minStyle}/>
          <div className="hand sec" style={secStyle}/>
        </div>
      </div>
    </>
  )
}

export default Clock;