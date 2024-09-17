import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import { color } from 'framer-motion';
import CustomLegend from '../CustomLegend/CustomLegend';

ChartJS.register(
	ArcElement, Tooltip, Legend,
	CategoryScale, LinearScale, PointElement, LineElement
);

const pieData = {
	labels: ['Number of active services', 'New services added', 'Services removed'],
	datasets: [{
		data: [60, 30, 10], // Example data
		backgroundColor: ['#3FE900', 'yellow', 'red'],
	}]
};

const pieOptions = {
	responsive: true,
	maintainAspectRatio: true,  // Ensures that aspect ratio is maintained
	aspectRatio: 2,
	cutout: '50%', // This creates the donut effect
	plugins: {
		legend: {
			display: false,
			position: 'bottom',
		},
		tooltip: {
			mode: 'index',
			intersect: false,
		},
	},
};

const lineData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	datasets: [
		{
			label: 'Number of active services',
			data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 85, 80, 75],
			borderColor: '#3FE900',
			backgroundColor: '#3FE900',
			pointRadius: 0,
			tension: 0.4,
			borderWidth: 1
		},
		{
			label: 'New services added',
			data: [5, 10, 15, 10, 5, 10, 15, 20, 15, 10, 5, 10],
			borderColor: 'yellow',
			backgroundColor: 'yellow',
			pointRadius: 0,
			tension: 0.4,
			borderWidth: 1
		},
		{
			label: 'Services removed',
			data: [2, 3, 2, 1, 4, 3, 2, 4, 5, 3, 2, 1],
			borderColor: 'red',
			backgroundColor: 'red',
			pointRadius: 0,
			tension: 0.4,
			borderWidth: 1
		}
	]
};

const lineOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
			position: 'bottom',
		},
		tooltip: {
			mode: 'index',
			intersect: false,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			grid: {
				drawOnChartArea: false, // Do not draw the full grid lines across the chart area
				drawTicks: true,
				tickLength: 10,
				color: 'black',
				borderColor: 'black',
			},
		},
		x: {
			grid: {
				drawOnChartArea: false, // Do not draw the full grid lines across the chart area
				drawTicks: true,
				tickLength: 10,
				color: 'black'
			},
		}

	},
};

const StatsBoard2 = () => {
	return (
		<>
			<Heading fontSize={{
				base: '3vw',
				md: '2.2vw',
				lg: '1.3vw',
			}} mb={5}>Service Offerings</Heading>
			<Flex direction={{ base: "column", lg: "row" }} gap={6} p={2} alignItems={'center'} justifyContent={'space-between'}>
				<Box width={{ base: "100%", lg: "35%" }}>
					<Pie data={pieData} options={pieOptions} />
				</Box>
				<Box width={{ base: "100%", lg: "65%" }}>
					<Line data={lineData} options={lineOptions} height={{ base: "100%", lg: "95%" }} />
				</Box>
			</Flex>
			<Box mt={3}>
				<CustomLegend labels={pieData.labels} colors={pieData.datasets[0].backgroundColor} />
			</Box>
		</>
	);
};

export default StatsBoard2;
