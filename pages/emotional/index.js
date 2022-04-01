import React from "react";
import prisma from "../../utils/prisma";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import MentalMeter from "../../components/Meters/MentalMeter";
import PhysicalMeter from "../../components/Meters/PhysicalMeter";
import EmotionalMeter from "../../components/Meters/EmotionalMeter";
import Navbar from "../../components/Navbar";
import { useAppContext } from "../../components/context/state";
import LoggedOut from "../../pages/loggedOut/index";

const index = (props) => {
  const updateXP = async (id) => {
    await fetch("api/experience/emotionalxp", {
      method: "PUT",
    });
  };
  const myContext = useAppContext();
  const { setCompletedGoals } = myContext;
  const { data: session } = useSession();
  if (session) {
    //In return, have <SingleGoals/> comp render here as <SingleGoals/>, then on a separate component, map through props(goals) as below?
    return (
      <div className="py-44">
        <div className="fixed inset-x-0 top-0 w-100 mb-1 bg-gray-800 border-2 border-white border-solid rounded-md">
          <MentalMeter />
          <PhysicalMeter />
          <EmotionalMeter />
          <br />
        </div>
        <div className="box-border p-1 m-4">
          <h1 className="text-3xl text-center heading text-slate-100 font-Manrope">
            Emotional Goals
          </h1>
          <div>
            <ul className="flex flex-col items-center ">
              {props.goals
                ? props.goals.map((goal) => {
                    return (
                      <li
                        key={goal.id}
                        onClick={() => {
                          updateXP();
                          myContext.submitEmotional();
                          setCompletedGoals((prev) => [...prev, goal.id]);
                        }}
                        className="flex flex-col w-96 my-4 text-3xl truncate rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-100 font-Manrope shadow-cyan-500/100"
                      >
                        <button className="py-2 justify-items-center hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                          {goal.name}
                        </button>
                      </li>
                    );
                  })
                : "Loading goals"}
            </ul>
          </div>
        </div>
        <div className="fixed inset-x-0 bottom-0 w-100 mt-1">
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
        Emotional Goals
      </Link> */}
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  try {
    const goals = await prisma.task.findMany({
      where: {
        catagory_name: "emotional",
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
