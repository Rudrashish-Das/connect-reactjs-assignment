// src/components/MyChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);



const options = {
	indexAxis: 'y',
	elements: {
		bar: {
			borderWidth: 0,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			display: false,
			position: 'right',
		},
		title: {
			display: true,
		},
	},
	scales: {
		x: {
		  grid: {
			drawBorder: false,
			display: false,   
		  }
		},
		y: {
		  grid: {
			drawBorder: false,
			display: false,
		  }
		}
	  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: [60],
			backgroundColor: '#FF847CE5',
		},
		{
			label: 'Dataset2',
			data: [0,40],
			backgroundColor: '#722391',
		},
		{
			label: 'Dataset 3',
			data: [0, 0, 50],
			backgroundColor: '#FFDC7E',
		},
		{
			label: 'Dataset 4',
			data: [0, 0, 0, 30],
			backgroundColor: '#FF847C',
		},
		{
			label: 'Dataset 4',
			data: [0, 0, 0, 0, 100],
			backgroundColor: '#165DC9',
		},
		{
			label: 'Dataset 4',
			data: [0, 0, 0, 0, 0, 80],
			backgroundColor: '#48CFAF',
		},
		{
			label: 'Dataset 4',
			data: [0, 0, 0, 0, 0,0, 35],
			backgroundColor: '#722391',
		}
	],
};

const BarChartComponent = () => (
	<Box >
		<Bar options={options} data={data} />
	</Box>
);

export default BarChartComponent;
