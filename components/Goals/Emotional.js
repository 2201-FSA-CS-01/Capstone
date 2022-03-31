import Link from "next/link";
function Emotional() {
  return (
    <>
      <Link href="/emotional">
        <li className="flex flex-col w-5/6 my-4 text-3xl truncate rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-100 font-Manrope shadow-cyan-500/100">
          <button className="py-2 justify-items-center hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            EMOTIONAL
          </button>
        </li>
      </Link>
    </>
  );
}

export default Emotional;
