import { useState } from 'react';
import Goals from './Goals';
import Field from './Field';

function Dashboard() {
  let [mentalValue, setMentalValue] = useState(50);
  let [physicalValue, setPhysicalValue] = useState(90);
  let [emotionalValue, setEmotionalValue] = useState(10); //current percentage

  function submitMental() {
    setMentalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }
  function submitPhysical() {
    setPhysicalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }
  function submitEmotional() {
    setEmotionalValue(function (prev) {
      if (prev >= 100) return;
      return prev + 10;
    });
  }
  /*We can perhaps have separate component for Progress bar and pull the data from the back end. From there we can map through each Goal Category and pass that component into this one, for brevity */
  return (
    <>
      <div className="flex justify-between mt-4">
        <span className="mx-4 text-base font-medium text-white">
          Mental Health
        </span>
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${mentalValue}%` }}
          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ease-in duration-700 "
        ></div>
      </div>

      <div className="flex justify-between mt-4 ">
        <span className="mx-4 text-base font-medium text-white">
          Physical Health
        </span>
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${physicalValue}%` }}
          className="bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500  h-2.5 rounded-full ease-in duration-700"
        ></div>
      </div>

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
      <Field />
      <Goals submit={{ submitMental, submitPhysical, submitEmotional }} />
    </>
  );
}
export default Dashboard;
