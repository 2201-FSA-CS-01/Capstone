import Link from "next/link";
function Mental() {
  return (
    <>
      <Link href="/mental">
        <li className="flex flex-col w-5/6 my-4 text-3xl truncate rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100">
          <button className="py-2 justify-items-center hover:bg-gradient-to-r from-green-500 to-blue-600">
            MENTAL
          </button>
        </li>
      </Link>
    </>
  );
}

export default Mental;
