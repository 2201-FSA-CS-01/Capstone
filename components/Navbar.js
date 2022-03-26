import tomo from '../public/images/tomo.png';
import goal from '../public/images/goal.png';
import user from '../public/images/user.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="items-center lg:grid lg:col-start-3 lg:col-end-5">
      <div className="flex flex-col lg:mx-16 ">
        <ul className="flex justify-around w-full p-5 text-center bg-gray-800 border-2 border-white rounded-lg text-stone-800">
          <Link href="/dashboard">
            <li>
              <Image src={tomo} alt="" height={40} width={40} />
            </li>
          </Link>
          <li>
            <Image src={goal} alt="" height={40} width={40} />
          </li>
          <li>
            <Image src={user} alt="" height={40} width={40} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
