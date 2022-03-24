import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <br />
      <Link href="/physical" className="">
        Physical Goals
      </Link>
      <br />
      <Link href="/emotional" className="">
        Emotional Goals
      </Link>
      <br />
      <Link href="/mental" className="">
        Mental Goals
      </Link>
      <br />
      <Link href="/dashboard" className="">
        Dashboard
      </Link>
    </>
  );
}
