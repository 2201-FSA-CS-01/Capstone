import React from "react"
import Navbar from "../../components/Navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
  labels: ['Mental', 'Physical', 'Emotional', 'Inactive'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 30, 20, 5],
      backgroundColor: [
        '#0ea5e9',
        '#f97316',
        '#a855f7',
        '#3f3f46',
      ],
      borderColor: [
        '#4ade80',
        '#eab308',
        '#ec4899',
        '#dc2626',
      ],
      borderWidth: 5,
    },
  ],
};

export default () => (
  <div>
    <h1 className="heading text-3xl text-slate-100 font-Manrope text-center box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">Your Activity</h1>
    <div className='flex flex-auto bg-slate-800'>
      <Pie data={data} />
    </div>

    <div className="flex flex-col fixed bottom-0 inset-x-0">
      <Navbar />
    </div>
  </div>
)

