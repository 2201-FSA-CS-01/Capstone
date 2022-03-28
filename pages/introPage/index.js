import React from 'react'
import Link from "next/link";

export default function introPage() {
  return (
    <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
      <div class="flex flex-wrap justify-center">
        <div class="w-6/12 sm:w-4/12 px-4">
          <img src="https://i.pinimg.com/originals/fe/2c/69/fe2c69bc78c8749645694b7e1c0b2836.gif" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
        </div>
      </div>
      <div>
        This is TOMO
      </div>
      <Link href="tutorialPage">
        Explore your Dashboard
      </Link>
    </main>
  )
}
