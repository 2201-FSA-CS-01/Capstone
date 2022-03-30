import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import TomoHome from '../../public/images/tomoTreeHouse.gif';
import Countdown from 'react-countdown';

const Profile = () => {
  return (
    <div>
      <h1 className="box-border p-4 text-3xl text-center border-2 border-white border-solid rounded-md heading text-slate-100 font-Manrope h-50 w-50">
        User Profile
      </h1>

      <ul className="flex flex-col text-center slate-800">
        <li className="text-slate-100 font-Manrope">Name:</li>
        <li className="text-slate-100 font-Manrope">Email:</li>
        <li className="text-slate-100 font-Manrope">Experience Pts:</li>
        <li className="text-slate-100 font-Manrope">Level:</li>
        <li className="text-slate-100 font-Manrope">Goals Completed:</li>
      </ul>
      <Image src={TomoHome} alt="" height={400} className="rounded-md" />
      <Countdown date={Date.now() + 86400000} />

      <div className="fixed bottom-0 flex flex-col w-full">
        <Link href="/loggedOut">
          <button className="text-center bg-gray-200 border-2 border-white rounded-md shadow-md shadow-black">
            Sign out
          </button>
        </Link>

        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
