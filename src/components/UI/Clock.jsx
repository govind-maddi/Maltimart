import React,{ useEffect, useRef, useState } from 'react'

import './styles/clock.css'

function Clock() {

  const [time,setTime] = useState([50,0,0,0]);

  useEffect(() => {
    const timer = setInterval(() => {
      /* if(time[0] !== 0 && time[1] !== 0 && time[2] !== 0 && time[3] !== 0) */
      if(time[0] != 0)
      {
        let Day = time[0]
        let Hrs = time[1]
        let Min = time[2]
        let Sec = time[3]
        
        if (Sec === 0) {
          Sec = 59;
          if (Min === 0) {
            Min = 59;
            if (Hrs === 0) {
              Hrs = 23;
              if (Day > 0) {
                Day -= 1;
              }
            } else {
              Hrs -= 1;
            }
          } else {
            Min -= 1;
          }
        } else {
          Sec -= 1;
        }
        setTime([Day,Hrs,Min,Sec]);
      }
    },1000);

    return () => {
      clearInterval(timer)
    };

  },[time])

  return (

    <div id='timer_cont'>
      <section style={{paddingLeft:'0'}}>
        <label style={{fontSize:'16px'}}>Days</label>
        <label>{time[0]}</label>
      </section>
      <section>:</section>
      <section>
        <label style={{fontSize:'16px'}}>Hrs</label>
        <label>{time[1]}</label>
      </section>
      <section>:</section>
      <section>
        <label style={{fontSize:'16px'}}>Min</label>
        <label>{time[2]}</label>
      </section>
      <section>:</section>
      <section>
        <label style={{fontSize:'16px'}}>Sec</label>
        <label>{time[3]}</label>
      </section>
    </div>
  )
}

export default Clock

/* import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState([50, 0, 0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const [day, hrs, min, sec] = time;

      if (day === 0 && hrs === 0 && min === 0 && sec === 0) {
        clearInterval(timer); // Stop the timer when time reaches 0
      } else {
        let Sec = sec;
        let Min = min;
        let Hrs = hrs;
        let Day = day;

        if (Sec === 0) {
          Sec = 59;
          if (Min === 0) {
            Min = 59;
            if (Hrs === 0) {
              Hrs = 23;
              if (Day > 0) {
                Day -= 1;
              }
            } else {
              Hrs -= 1;
            }
          } else {
            Min -= 1;
          }
        } else {
          Sec -= 1;
        }

        setTime([Day, Hrs, Min, Sec]);
      }
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [time]);

  return (
    <div id='timer_cont'>
      <span>Day</span><span>:</span>
      <span>Hrs</span><span>:</span>
      <span>Min</span><span>:</span>
      <span>Sec</span>
      <span>{time[0]}</span>
      <span>{time[1]}</span>
      <span>{time[2]}</span>
      <span>{time[3]}</span>
    </div>
  );
}

export default Clock; */
