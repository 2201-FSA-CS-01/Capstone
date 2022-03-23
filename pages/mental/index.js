import React from "react";
import prisma from "../../utils/prisma";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Navbar from "../../components/Navbar.js"
import Header from "../../components/Header"


const index = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Header />
        Mental Goals Page
        {props.goals
          ? props.goals.map((g) => {
              return <div>{g.name}</div>;
            })
          : "Loading goals"}
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
        catagory_name: "mental",
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
