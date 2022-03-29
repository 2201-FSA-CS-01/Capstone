import React from "react"
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import TomoHome from '../../public/images/tomoTreeHouse.gif'

const Profile = () => {
  return (
    <dev>
      <h1 className="heading text-3xl text-slate-100 font-Manrope text-center box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">User Profile</h1>


      <ul className='flex flex-col text-center slate-800'>
        <li className="text-slate-100 font-Manrope">Name:</li>
        <li className="text-slate-100 font-Manrope">Email:</li>
        <li className="text-slate-100 font-Manrope">Experience Pts:</li>
        <li className="text-slate-100 font-Manrope">Level:</li>
        <li className="text-slate-100 font-Manrope">Goals Completed:</li>

      </ul>
      <Image src={TomoHome} alt="" height={400} className="rounded-md" />
      <dev className="flex flex-col fixed bottom-0 w-full" >
        <Link href="/loggedOut">
          <button className="text-center bg-gray-200 border-2 border-white rounded-md shadow-md shadow-black">Sign out</button>
        </Link>

        <Navbar />
      </dev>
    </dev>
  );
}


export default Profile;
