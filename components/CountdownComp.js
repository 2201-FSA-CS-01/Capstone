import React, { useEffect, useState } from 'react';
import { useAppContext } from './context/state.js';

function Countdown() {
  const myContext = useAppContext();
  const calculateTimeLeft = () => {
    let tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);

    const difference = +new Date(tomorrow) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    )
      myContext.refresh();
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={i}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });
  return (
    <div>
      <h1>A day begins anew!</h1>
      {timerComponents.length ? timerComponents : ''}
    </div>
  );
}

export default Countdown;
