import MentalMeter from './Meters/MentalMeter';
import PhysicalMeter from './Meters/PhysicalMeter';
import EmotionalMeter from './Meters/EmotionalMeter';
import Field from './Field';
import Goals from './Goals';

function Dashboard() {
  return (
    <>
      <MentalMeter />
      <PhysicalMeter />
      <EmotionalMeter />
      <Field />
      <Goals />
    </>
  );
}
export default Dashboard;
