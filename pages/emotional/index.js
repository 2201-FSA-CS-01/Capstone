import React from "react";
import prisma from "../../utils/prisma";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


const index = (props) => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        Emotion Goals
        {props.goals
          ? props.goals.map((g) => {
              return <div>{g.name}</div>;
            })
          : "Loading goals"}
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/emotioanl" className="">
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
