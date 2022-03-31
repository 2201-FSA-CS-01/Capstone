import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Image from "next/image";
ChartJS.register(ArcElement, Tooltip, Legend);

import woods from "../../public/images/darkWoods.jpeg";
// import tomo from "/images/tomo.gif";


function Activity() {

  let [mentalValue, setMentalValue] = useState(0)
  let [physicalValue, setPhysicalValue] = useState(0)
  let [emotionalValue, setEmotionalValue] = useState(0)


  useEffect(() => {
    const mentalXP = async () => {
      const res = await fetch("/api/experience/mentalxp");
      const mentalExp = await res.json();
      setMentalValue(mentalExp)
    };
    mentalXP();
  }, []);

  useEffect(() => {
    const physicalXP = async () => {
      const res = await fetch("/api/experience/physicalxp");
      const physicalExp = await res.json();
      setPhysicalValue(physicalExp)
    };
    physicalXP();
  }, []);

  useEffect(() => {
    const emotionalXP = async () => {
      const res = await fetch("/api/experience/emotionalxp");
      const emotionalExp = await res.json();
      setEmotionalValue(emotionalExp)
    };
    emotionalXP();
  }, []);

  const data = {
    labels: ["Mental", "Physical", "Emotional"],
    datasets: [
      {
        label: "Goals Completed",
        data: [mentalValue, physicalValue, emotionalValue],
        backgroundColor: ["#0ea5e9", "#f97316", "#a855f7"],
        borderColor: ["#4ade80", "#eab308", "#ec4899"],
        borderWidth: 5,
      },
    ],
  };


  return (
    < div >
      <h1 className="heading text-3xl text-slate-100 font-Manrope text-center box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
        Your Activity
      </h1>

      <div className="flex flex-auto bg-slate-800 box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
        <Pie data={data} />
      </div>

      <div className="flex items-center justify-center mt-2 box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
        <Image src={woods} alt="" height={600} className="rounded-md" />
        <div className="absolute w-50 h-80 text-xl font-outline font-semibold">
          <ul>
            {/* <li className="outline outline-1 text-slate-100 font-Manrope shadow-xl shadow-white ">
              Goals Completed:
            </li> */}
          </ul>
        </div>
      </div>

      <div className="flex flex-col fixed bottom-0 inset-x-0">
        <Navbar />
      </div>
    </div >
  )
}

export default Activity
