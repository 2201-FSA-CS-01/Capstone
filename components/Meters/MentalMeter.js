import { useAppContext } from '../context/state.js';

function MentalMeter() {
  const myContext = useAppContext();

  return (
    <>
      <div className="mx-4 mt-4 border-2 border-white rounded-full lg:h-8 ">
        <div
          style={{ width: `${myContext.mentalValue}%` }}
          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ease-in duration-700 lg:h-7 "
        ></div>
      </div>
    </>
  );
}

export default MentalMeter;
