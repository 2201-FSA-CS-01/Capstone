import { useState } from "react";
import Goals from "./Goals";
import Field from "./Field";
import MentalMeter from "./Meters/MentalMeter";
import PhysicalMeter from "./Meters/PhysicalMeter";
import EmotionalMeter from "./Meters/EmotionalMeter";
import Physical from "./Goals/Physical";

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
  /*We can perhaps have separate component kkkkfor Progress bar and pull the data from the back end. From there we can map through each Goal Category and pass that component into this one, for brevity */
  return (
    <>
      <MentalMeter value={mentalValue} />
      <PhysicalMeter value={physicalValue} />
      <EmotionalMeter value={emotionalValue} />
      <Field />
      <div>
        <ul className="flex flex-col items-center ">
          <Physical onClick={submitPhysical} />

          {/* <Goals submit={{ submitMental, submitPhysical, submitEmotional }} /> */}
        </ul>
      </div>
    </>
  );
}
export default Dashboard;
