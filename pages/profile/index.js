import React from "react"
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../../components/Navbar";

const profile = () => {
  return (
    <dev>
      <h1 className="heading text-3xl text-slate-100 font-Manrope text-center box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">User Profile</h1>


      <ul className='bg-slate-800'>
        <li className="text-slate-100 font-Manrope">Name:</li>
        <li className="text-slate-100 font-Manrope">Email:</li>
        <li className="text-slate-100 font-Manrope">Experience Pts:</li>
        <li className="text-slate-100 font-Manrope">Level:</li>
        <li className="text-slate-100 font-Manrope">Goals Completed:</li>

      </ul>
      <dev className="flex flex-col fixed bottom-0 w-full" >
        <button className="text-center bg-gray-200 border-2 border-white rounded-md shadow-md shadow-black" onClick={() => signOut()}>Sign out</button>
        <Navbar />
      </dev>
    </dev>
  );
}


export default profile;
