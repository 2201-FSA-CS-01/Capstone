import { getProviders, signIn } from "next-auth/react";
import shiba from "../../public/images/shiba.gif";
import Image from "next/image";

export default function SignIn({ providers }) {
  return (
    <main className="flex items-center justify-center w-full min-h-screen mx-auto text-white bg-gray-900">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="border-white border-solid border-4 rounded-md px-2 pt-2 pb-1 m-12">
          <Image src={shiba} />
        </div>
        <br />
        <div className="text-4xl font-medium text-center font-signin">TOMO</div>
        {Object.values(providers).map((provider) => (
          <div className="flex items-center w-full" key={provider.name}>
            <button
              className="w-1/2 py-2 mx-auto duration-300 transform bg-indigo-600 rounded-sm shadow-md hover:bg-indigo-400"
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "https://capstone-woad-six.vercel.app/dashboard",
                })
              }
            >
              <div className="flex items-center justify-center space-x-3 ">
                <h3 className="font-semibold font-signin">Sign in with</h3>{" "}
              </div>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
