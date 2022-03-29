import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmotionalMeter from "../../components/Meters/EmotionalMeter";

export default function tutorial() {
  return (
    <>
      <Link href="/dashboard">
        <main className="mx-auto font-mPlus flex flex-col font-semibold min-h-screen w-full items-center justify-center bg-gray-900 text-white box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white space-y-8">
          <h1 className="text-2xl">Icons</h1>
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-4">
              <Image src="/images/brain.gif" width={40} height={40} />
              <div>
                <h1>Mental Health</h1>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Image src="/images/dumbbell.gif" width={40} height={40} />
              <div>
                <h1>Physical Health</h1>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Image src="/images/heart.gif" width={40} height={40} />
              <div>
                <h1>Emotional Health</h1>
              </div>
            </div>
          </div>
          <h1 className="text-2xl">Meters</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm"></div>
              <h1>Emotional Health</h1>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-sm"></div>
              <h1>Mental Health</h1>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500  rounded-sm"></div>
              <h1>Physical Health</h1>
            </div>
          </div>
          <h1 className="text-2xl">Navigation</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <Image src="/images/goal.png" width={40} height={40} />
              <div>
                <h1>Goals Page</h1>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Image src="/images/user.png" width={40} height={40} />
              <div>
                <h1>User Profile</h1>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Image src="/images/tomo.png" width={40} height={40} />
              <div>
                <h1>Home</h1>
              </div>
            </div>
          </div>
          <h1 className="italic font-normal text-white text-center opacity-70 bottom-0 fixed p-2 ">
            Click anywhere for next page
          </h1>
        </main>
      </Link>
    </>
  );
}
