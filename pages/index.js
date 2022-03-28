import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white font-signIn">
        <div className="text-center text-4xl font-bold font-signin">TOMO</div>
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    );
  }
  return (
    <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white font-signIn">
      <div className="text-center text-4xl font-bold font-signin">TOMO</div>
      <button onClick={() => signIn()}>Please log in</button>
      <Link href='/signUpPage'>
        <div>Create Profile</div>
      </Link>
    </main>
  );
}
