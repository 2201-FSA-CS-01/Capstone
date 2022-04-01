import Link from 'next/link';
import Mental from './Goals/Mental.js';
import Physical from './Goals/Physical.js';
import Emotional from './Goals/Emotional.js';
function Goals() {
  return (
    <ul className="flex flex-col items-center my-4 lg:grid lg:row-start-1 lg:row-end-1 lg:col-start-4 lg:col-end-6 justify-items-center ">
      <Mental />
      <Physical />
      <Emotional />
    </ul>
  );
}

export default Goals;
