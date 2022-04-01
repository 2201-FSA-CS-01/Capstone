import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import TomoHome from '../../public/images/tomoTreeHouse.gif';
import Countdown from '../../components/CountdownComp.js';
import { useAppContext } from '../../components/context/state';

const Profile = () => {
  const myContext = useAppContext();

  let [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch('/api/userInfo');
      const userInfo = await res.json();
      setUserData(userInfo);
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen text-white lg:mt-2 lg:grid lg:grid-cols-5 lg:gap-6 pb-14">
        <div className="box-border h-full p-4 text-3xl text-center border-2 border-white border-solid rounded-md heading text-slate-100 font-Manrope lg:row-start-1 lg:row-end-1 lg:col-start-3 lg:col-end-4">
          <h1>User Profile</h1>
        </div>

        <div className="border-white border-solid rounded-md heading text-slate-100 font-Manrope lg:row-start-2 lg:row-end-2 lg:col-start-3 lg:col-end-4">
          <ul className="flex flex-col text-center text-slate-100">
            <br />
            <li>User Email: {userData.email}</li>
            <li>Mental Experience: {userData.mentalxp}</li>
            <li>Physical Experience: {userData.physicalxp}</li>
            <li>Emotional Experience: {userData.emotionalxp}</li>
            <br />
          </ul>
        </div>

        <div className="flex flex-col lg:row-start-3 lg:row-end-3 lg:col-start-3 lg:col-end-4">
          <Image
            src="/images/tomoTreeHouse.gif"
            alt=""
            height={400}
            width={400}
            leyout="fill"
            className="rounded-md"
          />
        </div>

        <div className="box-border flex flex-col w-full col-end-4 p-4 mt-8 mb-16 text-3xl text-center border-2 border-white border-solid rounded-md text-slate-100 font-Manrope lg:row-start-4 lg:row-end-4 lg:col-start-3">
          <Countdown />
          <button
            onClick={() => signOut()}
            className="w-1/2 m-auto my-2 mb-2 text-center text-black bg-gray-200 border-2 border-white rounded-md shadow-md shadow-black"
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 mt-1 w-100">
        <Navbar />
      </div>
    </>
  );
};

export default Profile;
