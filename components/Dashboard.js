import Meters from './Meters/Meters';
// import MentalMeter from './Meters/MentalMeter';
// import PhysicalMeter from './Meters/PhysicalMeter';
// import EmotionalMeter from './Meters/EmotionalMeter';
import Field from './Field';
import Goals from './Goals';
import Navbar from './Navbar';

function Dashboard() {
  return (
    <div className="lg:grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-4 lg:p-20 ">
      <Meters />
      <Field />
      <Goals />
      <Navbar />
    </div>
  );
}
export default Dashboard;
