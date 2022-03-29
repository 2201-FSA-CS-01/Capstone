import React from "react";
import Link from "next/link";
import Image from "next/image";
import TallTree from '../../public/images/trees.gif'
import TomoFence from '../../public/images/tomoFence.gif'


export default function LoggedOut() {
  return (
    <>
      <Link href="/">
        <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white  h-50 w-50 p-4 rounded-md border-2">
          <h1>Looks like you aren't logged in...</h1>
          <Image src={TomoFence} />
          <h1 className="italic text-white text-center opacity-70 bottom-0 fixed p-2 ">
            Click anywhere to sign in
          </h1>
        </main>
      </Link>
    </>
  );
}
