import React from 'react';
import prisma from '../../utils/prisma';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import MentalMeter from '../../components/Meters/MentalMeter';
import PhysicalMeter from '../../components/Meters/PhysicalMeter';
import EmotionalMeter from '../../components/Meters/EmotionalMeter';
import Navbar from '../../components/Navbar';
import { useAppContext } from '../../components/context/state';

const index = (props) => {
  console.log(props);
  const myContext = useAppContext();

  const { data: session } = useSession();
  if (session) {
    //try placing setInterval in here??
    return (
      <div>
        <MentalMeter />
        <PhysicalMeter />
        <EmotionalMeter />
        <div className="box-border p-4 m-4 border-4 border-teal-500 border-solid rounded-md h-50 w-50">
          <h1 className="text-3xl text-center heading text-slate-100 font-Manrope">
            Mental Goals
          </h1>
          <div>
            <ul className="flex flex-col items-center ">
              {props.goals
                ? props.goals.map((g) => {
                    return (
                      <li
                        key={g.id}
                        onClick={myContext.submitMental}
                        className="flex flex-col w-5/6 h-16 my-4 text-3xl truncate rounded-lg shadow-md text-shadow-lg bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100"
                      >
                        <button className="pt-2 justify-items-center ">
                          {g.name}
                        </button>
                      </li>
                    );
                  })
                : 'Loading goals'}
            </ul>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/emotional" className="">
        Mental Goals
      </Link>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  try {
    const goals = await prisma.task.findMany({
      where: {
        catagory_name: 'mental',
      },
    });

    return {
      props: { goals },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
};
