import Link from 'next/link';
function Emotional() {
  return (
    <>
      <Link href="/emotional">
        <li className="flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-cyan-500/100 text-slate-100 font-Manrope">
          <button className="pt-2 justify-items-center ">EMOTIONAL</button>
        </li>
      </Link>
    </>
  );
}

export default Emotional;
