import { useAppContext } from '../context/state.js';

function EmotionalMeter() {
  const myContext = useAppContext();
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="mx-4 mt-4 text-base font-medium text-white">
          Emotional Health
        </span>
      </div>
      <div className="mx-4 border-2 border-white rounded-full ">
        <div
          style={{ width: `${myContext.emotionalValue}%` }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full ease-in duration-700"
        ></div>
      </div>
    </>
  );
}

export default EmotionalMeter;
