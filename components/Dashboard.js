import { useState } from 'react';
import Goals from './Goals';
import Field from './Field';
import MentalMeter from './Meters/MentalMeter';
import PhysicalMeter from './Meters/PhysicalMeter';
import EmotionalMeter from './Meters/EmotionalMeter';

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
      <MentalMeter />
      <PhysicalMeter />
      <EmotionalMeter />
      <Field />
      <Goals submit={{ submitMental, submitPhysical, submitEmotional }} />
    </>
  );
}
export default Dashboard;
