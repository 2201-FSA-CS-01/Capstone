import React from 'react';
import prisma from '../../utils/prisma';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import MentalMeter from '../../components/Meters/MentalMeter';
import PhysicalMeter from '../../components/Meters/PhysicalMeter';
import EmotionalMeter from '../../components/Meters/EmotionalMeter';
import Navbar from '../../components/Navbar';

const index = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <MentalMeter />
        <PhysicalMeter />
        <EmotionalMeter />
        Physical Page
        {props.goals
          ? props.goals.map((g) => {
              return <div key={g.id}>{g.name}</div>;
            })
          : 'Loading goals'}
  
        <Header />
        <div className="box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
          <h1 className="heading text-3xl text-slate-100 font-Manrope text-center">
            Physical Goals
          </h1>
          <div>
            <ul className="flex flex-col items-center ">
              {props.goals
                ? props.goals.map((g) => {
                    return (
                      <li
                        //onClick={submitMental}
                        className="flex flex-col w-5/6 h-16 my-4 text-3xl text-shadow-lg shadow-md truncate rounded-lg bg-gradient-to-r from-yellow-400 to-red-500 text-slate-100 font-Manrope shadow-violet-500/100"
                      >
                        <button className="pt-2 justify-items-center ">
                          {g.name}
                        </button>
                      </li>
                    );
                  })
                : "Loading goals"}
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
        Physical Goals
      </Link>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  try {
    const goals = await prisma.task.findMany({
      where: {
        catagory_name: 'physical',
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
