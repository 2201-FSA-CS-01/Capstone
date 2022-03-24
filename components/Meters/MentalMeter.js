import { useAppContext } from '../context/state.js';

function MentalMeter() {
  const myContext = useAppContext();

  return (
    <>
      <div className="flex justify-between mt-4">
        {/* <span className="mx-4 text-base font-medium text-white ">
          Mental Health
        </span> */}
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${myContext.mentalValue}%` }}
          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ease-in duration-700 "
        ></div>
      </div>
    </>
  );
}

export default MentalMeter;
