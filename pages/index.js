import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/physical" className="">
        Physical Goals
      </Link>
    </>
  );
}
