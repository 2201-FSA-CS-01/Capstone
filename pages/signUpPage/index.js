import React from 'react'
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="mx-auto flex flex-col  min-h-screen w-full items-center justify-center bg-gray-900 text-white box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
      <h1>Your Profile information</h1>
      <ul>
        <li>First Name:</li>
        <li>Last Name:</li>
        <li>Email:</li>
        <li>Password:</li>
        <li>Re-Enter Password:</li>
      </ul>
      <Link href="/introPage">
        <div>Submit</div>
      </Link>
    </main>
  );
}
