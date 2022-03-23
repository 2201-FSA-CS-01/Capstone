import { useState } from 'react';

function MentalMeter(props) {
  console.log(props);

  //   const { submitMental } = props.enterGoals;

  let [mentalValue, setMentalValue] = useState(50);

  //   function submitMental() {
  //     setMentalValue(function (prev) {
  //       if (prev >= 100) return;
  //       return prev + 10;
  //     });
  //   }

  return (
    <>
      <div className="flex justify-between mt-4">
        <span className="mx-4 text-base font-medium text-white ">
          Mental Health
        </span>
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${mentalValue}%` }}
          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ease-in duration-700 "
        ></div>
      </div>
    </>
  );
}

export default MentalMeter;
