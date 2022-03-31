import Link from "next/link";
function Physical() {
  return (
    <>
      <Link href="/physical">
        <li className="flex flex-col w-5/6 my-4 text-3xl truncate rounded-lg shadow-md bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500 text-slate-100 font-Manrope shadow-violet-500/100">
          <button className="py-2 justify-items-center hover:bg-gradient-to-r from-yellow-500 via-gold-600 to-red-600">
            PHYSICAL
          </button>
        </li>
      </Link>
    </>
  );
}

export default Physical;
