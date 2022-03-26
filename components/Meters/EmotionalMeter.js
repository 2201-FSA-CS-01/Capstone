import { useAppContext } from '../context/state.js';

function EmotionalMeter() {
  const myContext = useAppContext();
  return (
    <>
      <div className="mx-4 mt-4 mb-1 border-2 border-white rounded-full lg:h-8 ">
        <div
          style={{ width: `${myContext.emotionalValue}%` }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full ease-in duration-700 lg:h-7"
        ></div>
      </div>
    </>
  );
}

export default EmotionalMeter;
