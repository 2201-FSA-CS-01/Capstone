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
  const myContext = useAppContext();

  const { data: session } = useSession();
  if (session) {
    //In return, have <SingleGoals/> comp render here as <SingleGoals/>, then on a separate component, map through props(goals) as below?
    return (
      <div>
        <MentalMeter />
        <PhysicalMeter />
        <EmotionalMeter />
        Mental Goals Page
        {props.goals
          ? props.goals.map((g) => {
              return <div key={g.id}>{g.name}</div>;
            })
          : 'Loading goals'}
        <Navbar />
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/mental" className="">
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
