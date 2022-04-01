import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function introPage() {
  return (
    <>
      <Link href="/tutorialPage">
        <main className="mx-auto space-y-4 flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
          <div className="font-mPlus text-2xl">
            This is <span className="font-bold">TOMO</span>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <Image
                src="/images/introTOMO.png"
                width={479}
                height={397}
                class="shadow rounded max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
          <h1 className="italic text-white text-center opacity-70 bottom-0 fixed p-2 ">
            Click anywhere for next page
          </h1>
        </main>
      </Link>
    </>
  );
}
