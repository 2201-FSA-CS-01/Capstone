import Meters from "./Meters/Meters";
// import MentalMeter from './Meters/MentalMeter';
// import PhysicalMeter from './Meters/PhysicalMeter';
// import EmotionalMeter from './Meters/EmotionalMeter';
import Field from "./Field";
import Goals from "./Goals";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="text-white mt-10 lg:grid lg:grid-rows-2 lg:grid-cols-5 lg:gap-6 lg:p-20">
      <Meters />
      <Field />
      <Goals />
      <div className="inset-x-0 bottom-0 mx-4 lg:mt-20 lg:row-start-2 lg:row-end-2 lg:col-start-2 col-end-5">
        <Navbar />
      </div>
    </div>
  );
}
export default Dashboard;
