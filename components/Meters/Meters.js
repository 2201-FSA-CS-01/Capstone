import MentalMeter from "./MentalMeter";
import PhysicalMeter from "./PhysicalMeter";
import EmotionalMeter from "./EmotionalMeter";

function Meters() {
  return (
    <div className="lg:grid lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3 lg:mt-16">
      <MentalMeter />
      <PhysicalMeter />
      <EmotionalMeter />
    </div>
  );
}

export default Meters;
