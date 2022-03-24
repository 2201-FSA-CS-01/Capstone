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
        <Navbar />
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/physical" className="">
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
