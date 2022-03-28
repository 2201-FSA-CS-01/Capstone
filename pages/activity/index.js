import React from "react";
import Navbar from "../../components/Navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Image from "next/image";
ChartJS.register(ArcElement, Tooltip, Legend);

import forest from "/images/image.png";
import tomo from "/images/tomo.gif";

export const data = {
  labels: ["Mental", "Physical", "Emotional", "Inactive"],
  datasets: [
    {
      label: "# of Votes",
      data: [20, 30, 20, 5],
      backgroundColor: ["#0ea5e9", "#f97316", "#a855f7", "#3f3f46"],
      borderColor: ["#4ade80", "#eab308", "#ec4899", "#dc2626"],
      borderWidth: 5,
    },
  ],
};

export default () => (
  <div>
    <h1 className="heading text-3xl text-slate-100 font-Manrope text-center box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
      Your Activity
    </h1>

    <div className="flex flex-auto bg-slate-800 box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
      <Pie data={data} />
    </div>

    <div className="flex items-end justify-center mt-4 box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">
      <Image src={forest} alt="" height={1400} className="rounded-md" />
      <div className="absolute mb-12">
        <ul>
          <li className="text-slate-100 font-Manrope shadow-md shadow-black ">
            Experience Pts:
          </li>
          <li className="text-slate-100 font-Manrope shadow-md shadow-black">
            Level:
          </li>
          <li className="text-slate-100 font-Manrope shadow-md shadow-black">
            Goals Completed:
          </li>
        </ul>

        {/* <Image src={tomo} alt="" width={90} height={70} /> */}
      </div>
    </div>

    <div className="flex flex-col fixed bottom-0 inset-x-0">
      <Navbar />
    </div>
  </div>
);
