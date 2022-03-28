import React from 'react'
import Link from "next/link";


export default function tutorial() {
  return (
    <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
      <h1>Here's how it works</h1>

      <Link href="/dashboard">
        <div>Get Started</div>
      </Link>
    </main>
  );
}
