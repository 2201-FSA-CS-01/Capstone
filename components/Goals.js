import Link from "next/link";
import Mental from "./Goals/Mental.js";
import Physical from "./Goals/Physical.js";
import Emotional from "./Goals/Emotional.js";
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

//How to add wiggle animation on button if we'd like
// className={`${
//             effect && 'animate-wiggle'
//           } flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100`}
//           onClick={() => {
//             submitMental;
//             setEffect(true);
//           }}
//           onAnimationEnd={() => setEffect(false)}
