import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Image from 'next/image';
ChartJS.register(ArcElement, Tooltip, Legend);
import { useAppContext } from '../../components/context/state';
import prisma from '../../utils/prisma';
// import tomo from "/images/tomo.gif";

function Activity(props) {
  let [mentalValue, setMentalValue] = useState(0);
  let [physicalValue, setPhysicalValue] = useState(0);
  let [emotionalValue, setEmotionalValue] = useState(0);
  const [filteredGoals, setfilteredGoals] = useState([]);
  const myContext = useAppContext();
  const { completedGoals } = myContext;

  useEffect(() => {
    if (completedGoals.length >= 1) {
      const filter = props.goals.filter(({ id }) =>
        completedGoals.includes(id)
      );
      setfilteredGoals(filter);
    }
  }, []);

  useEffect(() => {
    const mentalXP = async () => {
      const res = await fetch('/api/experience/mentalxp');
      const mentalExp = await res.json();
      setMentalValue(mentalExp);
    };
    const emotionalXP = async () => {
      const res = await fetch('/api/experience/emotionalxp');
      const emotionalExp = await res.json();
      setEmotionalValue(emotionalExp);
    };
    const physicalXP = async () => {
      const res = await fetch('/api/experience/physicalxp');
      const physicalExp = await res.json();
      setPhysicalValue(physicalExp);
    };
    mentalXP();
    physicalXP();
    emotionalXP();
  }, []);

  const data = {
    labels: ['MentalXP', 'PhysicalXP', 'EmotionalXP'],
    datasets: [
      {
        data: [mentalValue, physicalValue, emotionalValue],
        backgroundColor: ['#42AAC3', '#F4812F', '#AC54F1'],
        borderColor: ['#4ade80', '#eab308', '#ec4899'],
        borderWidth: 1,
        offset: 10,
      },
    ],
  };
  let colorCoded = [];
  {
    filteredGoals.map((goal) => {
      switch (goal.catagory_name) {
        case 'physical':
          colorCoded.push(
            <li
              key={goal.id}
              className="w-full col-span-1 my-4 text-3xl truncate rounded-lg shadow-md  bg-gradient-to-r from-yellow-400 via-gold-500 to-red-500 text-slate-100 font-Manrope shadow-violet-500/100"
            >
              <div className="flex items-center justify-between w-full p-6 space-x-6">
                <div className="flex-1 truncate">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {goal.name}
                  </h3>
                </div>
                <div>
                  <Image src="/images/dumbbell.gif" width={40} height={40} />
                </div>
              </div>
            </li>
          );
          break;
        case 'mental':
          colorCoded.push(
            <li
              key={goal.id}
              className="w-full col-span-1 my-4 text-3xl truncate rounded-lg shadow-md  bg-gradient-to-r from-green-400 to-blue-500 text-slate-100 font-Manrope shadow-yellow-500/100"
            >
              <div className="flex items-center justify-between w-full p-6 space-x-6">
                <div className="flex-1 truncate">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {goal.name}
                  </h3>
                </div>
                <div>
                  <Image src="/images/brain.gif" width={40} height={40} />
                </div>
              </div>
            </li>
          );
          break;
        case 'emotional':
          colorCoded.push(
            <li
              key={goal.id}
              className="w-full col-span-1 my-4 text-3xl truncate rounded-lg shadow-md  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-100 font-Manrope shadow-cyan-500/100"
            >
              <div className="flex items-center justify-between w-full p-6 space-x-6">
                <div className="flex-1 truncate">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {goal.name}
                  </h3>
                </div>
                <div>
                  <Image src="/images/heart.gif" width={40} height={40} />
                </div>
              </div>
            </li>
          );
          break;
        default:
          break;
      }
    });
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-24 space-y-8">
        {colorCoded.length >= 1 ? (
          <div className="m-auto mt-4 mb-0 text-center">
            <Pie
              data={data}
              options={{
                plugins: { legend: { display: false } },
                responsive: true,
              }}
            />

            <ul className="flex flex-row items-center justify-between mt-4 text-white">
              <li className="p-2 rounded bg-mental">Mental</li>
              <li className="p-2 rounded bg-emotional">Emotional</li>
              <li className="p-2 rounded bg-physical">Physical</li>
            </ul>
          </div>
        ) : (
          ''
        )}
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-semibold text-center text-white font-mPlus">
            {colorCoded.length >= 1 ? 'Completed Goals' : 'No Completed Goals'}
          </h1>
          {colorCoded.length >= 1 ? (
            ''
          ) : (
            <Image src="/images/storm.gif" width={100} height={100} />
          )}
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 overflow-hidden sm:grid-cols-1 lg:grid-cols-1 w-7/8 sm:w-3/4"
          >
            {colorCoded.length >= 1 ? colorCoded.map((goal) => goal) : ''}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 w-full mb-auto">
        <Navbar />
      </div>
    </>
  );
}

export default Activity;

export const getServerSideProps = async () => {
  try {
    const goals = await prisma.task.findMany();

    return {
      props: { goals },
    };
  } catch (error) {
    console.error(error);
  }
};
