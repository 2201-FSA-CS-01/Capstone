import Link from 'next/link';
function Physical() {
  return (
    <>
      <Link href="/physical">
        <li className="flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md  bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500 text-slate-100 font-Manrope shadow-violet-500/100">
          <button className="pt-2 justify-items-center ">PHYSICAL</button>
        </li>
      </Link>
    </>
  );
}

export default Physical;
