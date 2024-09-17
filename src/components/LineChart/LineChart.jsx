import {
    Line
  } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
import { Box } from '@chakra-ui/react';
import { color } from 'framer-motion';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            align: 'start',
            labels: {
                pointStyle: 'circle',
                usePointStyle: true,
                padding: 25,
                boxWidth: 7,
                boxHeight: 7,
                font:{
                    size: 13
                }
            },
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        y: {
            grid: {
                drawOnChartArea: false, // Do not draw the full grid lines across the chart area
                drawTicks: true,
                tickLength: 10, 
            },
            ticks: {
                color: 'black',
                font: {
                    weight: 'bolder',
                    size: 11
                }
            },
            min: 1000,
            max: 5000,
        },
        x: {
            grid: {
                drawOnChartArea: false, // Do not draw the full grid lines across the chart area
                drawTicks: true,
                tickLength: 10, 
            },
            ticks: {
                color: 'black',
                font: {
                    weight: 'bolder',
                    size: 11
                }
            }
        }
    },
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
    labels,
    datasets: [
    {
        label: 'Active Service Provider',
        data: [3000, 4500, 3200, 2800, 3600, 3000, 3200],
        borderColor: '#FF5D8D',
        backgroundColor: '#FF5D8D',
        pointRadius: 0
    },
    {
        label: 'Service Provider Retension Rate',
        data: [2200, 2800, 3500, 3200, 2800, 2600, 3000],
        borderColor: '#72BBFF',
        backgroundColor: '#72BBFF',
        pointRadius: 0
    },
    {
        label: 'New Service Provider',
        data: [2000, 1500, 4300, 2800, 3700, 2000, 3200],
        borderColor: '#11BEA9',
        backgroundColor: '#11BEA9',
        pointRadius: 0
    },
    {
        label: 'Service Completion Rate',
        data: [2900, 1800, 1500, 2200, 1550, 2700, 4000],
        borderColor: '#FF834D',
        backgroundColor: '#FF834D',
        pointRadius: 0
    },
    {
        label: 'Total Service Provider',
        data: [1200, 4500, 2450, 2670, 1220, 3450, 2860],
        borderColor: '#FA18FF',
        backgroundColor: '#FA18FF',
        pointRadius: 0
    },
    {
        label: 'Average Rating',
        data: [1450, 2788, 1950, 2450, 2550, 2560, 3553],
        borderColor: '#FBBC05',
        backgroundColor: '#FBBC05',
        pointRadius: 0
    },
  ],
};

const LineChart = () => {
  return (
    <Box p={2} bg='white' borderRadius='lg'>
      <Line options={options} data={data} />
    </Box>
  );
}

export default LineChart;
