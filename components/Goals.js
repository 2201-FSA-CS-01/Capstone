import Link from 'next/link';
import Image from 'next/image';

import heart from '../public/images/heart.png';

function Goals() {
  const handleClick = () => {
    console.log('TOMO');
  };
  return (
    <div className="row-span-2">
      <ul className="flex flex-col items-center ">
        <li className="w-5/6 h-16 px-2 mx-2 my-4 text-3xl rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope">
          <button onClick={handleClick}>MENTAL</button>
          <p className="text-sm"> Two minute meditation</p>
        </li>
        <li className="w-5/6 h-16 px-2 mx-2 my-4 text-3xl rounded-lg bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500 text-slate-100 font-Manrope ">
          <Link href="/">PHYSICAL</Link>
          <p className="text-sm"> Ten minute walk</p>
        </li>
        <li className="w-5/6 h-16 px-2 mx-2 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-cyan-500/100 text-slate-100 font-Manrope ">
          <Link href="/">EMOTIONAL</Link>
          <p className="text-sm"> Call a loved one</p>
        </li>
      </ul>
    </div>
  );
}

export default Goals;
