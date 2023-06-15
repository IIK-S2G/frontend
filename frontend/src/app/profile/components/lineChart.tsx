'use client'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({dataset, label, labels}: {dataset: number[], label: string, labels: string[]}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
      };

    const data = {
        labels,
        datasets: [
          {
            label: label,
            data: dataset,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

    return (
        <div className='h-[300px] grid place-items-center m-5'>
            <Line options={options} data={data} />
        </div>
    )
}

export default LineChart