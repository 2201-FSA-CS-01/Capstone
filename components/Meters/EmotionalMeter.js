import { useState } from 'react';

function EmotionalMeter() {
  let [emotionalValue, setEmotionalValue] = useState(10);

  function submitEmotional() {
    setEmotionalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="mx-4 mt-4 text-base font-medium text-white">
          Emotional Health
        </span>
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${emotionalValue}%` }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full ease-in duration-700"
        ></div>
      </div>
    </>
  );
}

export default EmotionalMeter;
