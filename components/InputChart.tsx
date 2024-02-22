'use client'

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Climate Change Solutions', 'Food and Agriculture Innovation', 'Supply Chain Resilience', 'Human Health', 'Cross-Cutting Advances'],
    datasets: [
      {
        label: '% of Submissions',
        data: [18.9, 36.4, 6.8, 11.4, 26.5],
        backgroundColor: [
          'rgba(196, 70, 1, 0.4)',
          'rgba(0, 97, 29, 0.4)',
          'rgba(0, 20, 148, 0.4)',
          'rgba(148, 0, 0, 0.4)',
          'rgba(128, 0, 148, 0.4)',
        ],
        borderColor: [
          'rgba(196, 70, 1, 1)',
          'rgba(0, 97, 29, 1)',
          'rgba(0, 20, 148, 1)',
          'rgba(148, 0, 0, 1)',
          'rgba(128, 0, 148, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export default function InputChart() {
    
  
    return (
    <div className='max-w-sm space-y-6 pb-2'>
    <h2 className="scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary">Submissions So Far...</h2>    
    <Pie data={data} />
    </div>
    );
}