import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import TomoHome from '../../public/images/tomoTreeHouse.gif';
// import Countdown from '../../components/CountdownComp.js';
import Countdown from 'react-countdown';
import { useAppContext } from '../../components/context/state';
import { Router } from 'next/router';

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
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex flex-col justify-between min-h-screen text-white lg:mt-2 pb-14">
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
          <div></div>

          <div className="flex flex-col h-96 lg:w-1/2 lg:m-auto basis-1">
            {/* <img src="/images/sleep.webp" className="object-fill h-1/2" /> */}
            {
              <Image
                src="/images/tomoClearPath.jpeg"
                alt=""
                height={1920}
                width={1080}
                className="object-contain rounded-md"
              />
            }
          </div>

          <div className="box-border flex flex-col w-full col-end-4 p-4 mt-8 mb-16 text-3xl text-center border-2 border-white border-solid rounded-md text-slate-100 font-Manrope lg:row-start-4 lg:row-end-4 lg:col-start-3">
            <p className="text-2xl"> A day begins anew!</p>
            <Countdown
              date={Date.now() + 5000}
              onComplete={myContext.refresh}
            />
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
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full m-auto">
          <Link href="/">
            <h1 className="w-16 p-4 text-center text-white bg-indigo-600 rounded-md hover:cursor-pointer">
              Sign In
            </h1>
          </Link>
        </div>
      </div>
    );
  }
};

export default Profile;
