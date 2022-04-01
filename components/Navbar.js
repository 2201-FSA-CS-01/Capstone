import tomo from "../public/images/tomo.png";
import goal from "../public/images/goal.png";
import user from "../public/images/user.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col">
      <ul className="flex justify-around  p-5 text-center bg-gray-800 border-2 border-white rounded-lg text-stone-800">
        <Link href="/dashboard">
          <li>
            <Image src={tomo} alt="" height={40} width={40} />
          </li>
        </Link>
        <Link href="/activity">
          <li>
            <Image src={goal} alt="" height={40} width={40} />
          </li>
        </Link>
        <Link href="/profile">
          <li>
            <Image src={user} alt="" height={40} width={40} />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
