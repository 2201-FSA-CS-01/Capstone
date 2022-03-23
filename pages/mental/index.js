import React from "react";
import prisma from "../../utils/prisma";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

const index = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Header />
        <div className="box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
          <h1 className="heading text-3xl text-slate-100 font-Manrope text-center">
            Mental Goals
          </h1>
          <div>
            <ul className="flex flex-col items-center ">
              {props.goals
                ? props.goals.map((g) => {
                    return (
                      <li
                        //onClick={submitMental}
                        className="flex flex-col w-5/6 h-16 my-4 text-3xl text-shadow-lg truncate shadow-md rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100"
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
