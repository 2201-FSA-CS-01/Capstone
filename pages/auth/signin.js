import { getProviders, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
export default function SignIn({ providers }) {
  return (
    <main className="mx-auto flex  min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium font-signin">TOMO</div>
        {Object.values(providers).map((provider) => (
          <div className="w-full flex items-center" key={provider.name}>
            <button
              className="mx-auto transform rounded-sm bg-indigo-600 py-2  duration-300 w-1/2 hover:bg-indigo-400 shadow-md"
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <div className="flex justify-center space-x-3 items-center ">
                <h3 className="font-signin font-semibold">Sign in with</h3>{" "}
                <FcGoogle size="1.5rem" />
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
