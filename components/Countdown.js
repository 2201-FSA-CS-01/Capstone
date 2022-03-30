// import jquery from 'jquery';

// function Countdown() {
//   setInterval(function time() {
//     var d = new Date();
//     var hours = 24 - d.getHours();
//     var min = 60 - d.getMinutes();
//     if ((min + '').length == 1) {
//       min = '0' + min;
//     }
//     var sec = 60 - d.getSeconds();
//     if ((sec + '').length == 1) {
//       sec = '0' + sec;
//     }
//     jquery('#the-final-countdown p').html(hours + ':' + min + ':' + sec);
//   }, 1000);
//   return (
//     <div id="the-final-countdown">
//       <p></p>
//     </div>
//   );
// }

// export default Countdown;

// import React, { useEffect, useState } from 'react';

// let today = new Date();

// today.setDate(today.getDate() + 1);

// const targetTime = new Date(today).getTime();
// console.log(targetTime);

// const Countdown = () => {
//   const [currentTime, setCurrentTime] = useState(Date.now());

//   const timeBetween = targetTime - currentTime;
//   const seconds = Math.floor((timeBetween / 1000) % 60);
//   const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
//   const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
//   // const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(Date.now());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <p className="box-border p-4 mt-8 text-3xl text-center border-2 border-white border-solid rounded-md heading text-slate-100 font-Manrope h-50 w-50">
//         {/* <span>{days}d </span> */}
//         <span>{hours}H </span>
//         <span>{minutes}M </span>
//         <span>{seconds}S</span>
//       </p>
//     </>
//   );
// };

// export default Countdown;
import * as dayjs from 'dayjs';
var duration = require('dayjs/plugin/duration');
dayjs.extend(duration);
var calendar = require('dayjs/plugin/calendar');
dayjs.extend(calendar);

function Countdown() {
  const today = dayjs();
  const tomorrow = dayjs().add(1, 'day');

  const countdown = dayjs().calendar(null, {
    nextDay: '[Tomorrow at] h:mm A',
  });
  console.log('TEST', countdown);

  console.log(tomorrow - today.format());
  return (
    <>
      <div>{dayjs().format()}</div>
    </>
  );
}

export default Countdown;
