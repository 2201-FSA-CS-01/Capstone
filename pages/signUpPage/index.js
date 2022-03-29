import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <Link href="/introPage">
        <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white  h-50 w-50 p-4 rounded-md border-2">
          <h2 className="text-center text-3xl font-bold font-mPlus">
            To love oneself{" "}
          </h2>
          <br />
          <h2 className="text-center text-3xl font-bold font-mPlus">
            is the beginning of a lifelong companionship
          </h2>
          <h1 className="italic text-white text-center opacity-70 bottom-0 fixed p-2 ">
            Click anywhere for next page
          </h1>
        </main>
      </Link>
    </>
  );
}
