import React from 'react'
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useAppContext } from "../../components/context/state";
// import prisma from "../../utils/prisma";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Mental',
    'Physical',
    'Emotional',
    'Inactive'
  ],
  datasets: [{
    data: [300, 50, 100, 50],
    backgroundColor: [
      '#2563eb',
      '#f97316',
      '#c026d3',
      'red'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

export default () => (
  <div>
    <h1 className="heading text-3xl text-slate-100 font-Manrope text-center box-border border-2 h-50 w-50 p-4 rounded-md border-solid border-white">Your Activity</h1>
    <Doughnut
      data={data}
      width={400}
      height={400}
    />

    <dev className="fixed bottom-0 flex justify-around w-full" >
      <Navbar />
    </dev>
  </div>
);
