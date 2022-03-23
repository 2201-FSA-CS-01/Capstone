import React from "react";
import prisma from "../../utils/prisma";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"



const index = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Header />
        <h1 className="heading">Emotional Goals Page</h1>
        <ul>
          {props.goals
            ? props.goals.map((g) => {
              return <li>{g.name}</li>;
            })
            : "Loading goals"}
        </ul>

        <Navbar />
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/emotional" className="">
        Emotional Goals
      </Link>
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
