import React from "react";
import prisma from "../../utils/prisma";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import MentalMeter from "../../components/Meters/MentalMeter";
import PhysicalMeter from "../../components/Meters/PhysicalMeter";
import EmotionalMeter from "../../components/Meters/EmotionalMeter";
import Navbar from "../../components/Navbar";
import { useAppContext } from "../../components/context/state";
import LoggedOut from '../../pages/loggedOut/index'

const index = (props) => {
  const myContext = useAppContext();

  const { data: session } = useSession();

  if (session) {
    //In return, have <SingleGoals/> comp render here as <SingleGoals/>, then on a separate component, map through props(goals) as below?
    return (
      <div className="py-36">
        <div className="border-2 border-solid border-white rounded-md mx-4 fixed inset-x-0 top-0 h-50 w-50 p-1 bg-gray-800">
          <MentalMeter />
          <PhysicalMeter />
          <EmotionalMeter />
          <br />
        </div>
        <div className="box-border m-4 h-50 w-50 p-1">
          <h1 className="heading text-3xl text-slate-100 font-Manrope text-center">
            Physical Goals
          </h1>
          <div>
            <ul className="flex flex-col items-center ">
              {props.goals
                ? props.goals.map((g) => {
                  return (
                    <li
                      key={g.id}
                      onClick={myContext.submitPhysical}
                      className="flex flex-col w-5/6 h-16 my-4 text-3xl truncate shadow-md rounded-lg bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500 text-slate-100 font-Manrope shadow-violet-500/100"
                    >
                      <button className="pt-4 justify-items-center ">
                        {g.name}
                      </button>
                    </li>
                  );
                })
                : "Loading goals"}
            </ul>
          </div>
        </div>
        <div className="mx-4 fixed inset-x-0 bottom-0">
          <Navbar />
        </div>
      </div>
    );
  }
  return (
    <>
      <LoggedOut />
      {/* Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/emotional" className="">
        Physical Goals
      </Link> */}
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  try {
    const goals = await prisma.task.findMany({
      where: {
        catagory_name: "physical",
      },
    });

    return {
      props: { goals },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};
