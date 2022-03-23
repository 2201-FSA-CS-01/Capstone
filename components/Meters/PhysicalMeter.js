import { useState } from 'react';

function PhysicalMeter(props) {
  let [physicalValue, setPhysicalValue] = useState(90);

  function submitPhysical() {
    setPhysicalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }

  return (
    <>
      <div className="flex justify-between mt-4 ">
        <span className="mx-4 text-base font-medium text-white">
          Physical Health
        </span>
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${props.value}%` }}
          className="bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500  h-2.5 rounded-full ease-in duration-700"
        ></div>
      </div>
    </>
  );
}

export default PhysicalMeter;
