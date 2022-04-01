import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import TomoHome from '../../public/images/tomoTreeHouse.gif';
import Countdown from 'react-countdown';
import { useAppContext } from '../../components/context/state';

const Profile = () => {
  const myContext = useAppContext();

  let [userData, setUserData] = useState({})

  useEffect(() => {
    const getUserData = async () => {
      console.log("hello")
      const res = await fetch("/api/userInfo")
      console.log("TEST" + res)
      const userInfo = await res.json();
      setUserData(userInfo)
    };
    getUserData();
  }, []);

  return (

    <div className="lg: mt-2 lg:grid lg:grid-cols-5 lg:gap-6 ">
      <div className="box-border p-4 text-3xl text-center border-2 border-white border-solid rounded-md heading text-slate-100 font-Manrope lg:row-start-1 lg:row-end-1 lg:col-start-3 col-end-4">
        <h1>User Profile</h1>
      </div>
      <div className="border-white border-solid rounded-md heading text-slate-100 font-Manrope lg:row-start-2 lg:row-end-2 lg:col-start-3 col-end-4">
        <ul className="flex flex-col text-center text-slate-100">
          <br />
          <li>User Email: {userData.email}</li>


          <li>User Experience:</li>
          <br />
        </ul>
      </div>
      <div className="lg:row-start-3 lg:row-end-3 lg:col-start-3 col-end-4">
        <Image src={TomoHome} alt="" height={400} className="rounded-md" />
      </div>
      <div className="box-border p-4 mt-8 text-3xl text-center border-2 border-white border-solid rounded-md text-slate-100 font-Manrope w-96 lg:row-start-4 lg:row-end-4 lg:col-start-3 col-end-4">

        <Countdown date={myContext.countdown} onComplete={myContext.refresh} />
      </div>
      <div className="lg:row-start-5 lg:row-end-5 lg:col-start-3 col-end-4">
        <Link href="/loggedOut">
          <button className="text-center mb-2 w-96 bg-gray-200 border-2 border-white rounded-md shadow-md shadow-black my-2">
            Sign out
          </button>
        </Link>
      </div>
      <div className="inset-x-0 bottom-0 w-100 mt-1 lg:row-start-6 lg:row-end-6 lg:col-start-3 col-end-4">
        <Navbar />
      </div>
    </div>
  );
};


export default Profile;
