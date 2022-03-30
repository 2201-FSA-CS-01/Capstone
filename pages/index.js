import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import shiba from "../public/images/shiba.gif";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white font-signIn">
        <div className="border-white border-solid border-4 rounded-md px-2 pt-2 pb-1 m-12">
          <Image src={shiba} />
        </div>
        <br />
        <div className="text-center text-4xl font-bold font-signin">TOMO</div>
        <button
          className="text-yellow-400 font-Manrope pt-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <br />
        <div className="text-cyan-400 font-Manrope">
          <Link href="/dashboard">Let's Go</Link>
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white font-signIn">
      <div className="border-white border-solid border-4 rounded-md px-2 pt-2 pb-1 m-12">
        <Image src={shiba} />
      </div>
      <br />
      <div className="text-center text-4xl font-bold font-signin">TOMO</div>
      <button className="text-yellow-500" onClick={() => signIn()}>
        Please log in/Create Profile
      </button>
    </main>
  );
}
