import { useAppContext } from './context/state.js';
import Link from 'next/link';

function Goals() {
  const myContext = useAppContext();

  return (
    <div>
      <ul className="flex flex-col items-center my-6">
        <Link href="/mental">
          <li className="flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100">
            <button className="pt-2 justify-items-center ">MENTAL</button>
          </li>
        </Link>
        <Link href="/physical">
          <li className="flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500 text-slate-100 font-Manrope shadow-violet-500/100">
            <button className="pt-2 justify-items-center ">PHYSICAL</button>
          </li>
        </Link>
        <Link href="/emotional">
          <li className="flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-cyan-500/100 text-slate-100 font-Manrope">
            <button className="pt-2 justify-items-center ">EMOTIONAL</button>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Goals;

// o: remove if not needed
//How to add wiggle animation on button if we'd like
// className={`${
//             effect && 'animate-wiggle'
//           } flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100`}
//           onClick={() => {
//             submitMental;
//             setEffect(true);
//           }}
//           onAnimationEnd={() => setEffect(false)}
