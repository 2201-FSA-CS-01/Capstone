import Link from 'next/link';
function Mental() {
  return (
    <>
      <Link href="/mental">
        <li className="flex flex-col w-5/6 h-16 my-4 text-3xl rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100 ">
          <button className="pt-2 justify-items-center ">MENTAL</button>
        </li>
      </Link>
    </>
  );
}

export default Mental;
