import React from 'react';
import { Box, Flex, GridItem, Heading, Text, Grid } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geoData from '../../assets/geo.json';
import CustomLegend from '../CustomLegend/CustomLegend';

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
	labels: [
		'Healthcare Sector', 'Construction Sector', 'Home Services Sector', 'Petcare Sector', 'Entertainment Sector', 'Event Sector'
	],
	datasets: [{
		data: [300, 50, 100, 80, 70, 30],
		backgroundColor: ['#FF847C', '#165DC9', '#48CFAF', '#FFB5B1', '#722391', '#FFDC7E'],
	}],
};

const pieOptions = {
	responsive: true,
	maintainAspectRatio: true,
	aspectRatio: 1.5,
	plugins: {
		legend: {
			display: false
		},
	},
};

const colors = ['#FF847C', '#165DC9', '#48CFAF', '#FFB5B1', '#722391', '#FFDC7E'];

const getRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
};

const StatBoard = () => {
	return (
		<>
			<Heading
				fontSize={{
					base: '3vw',
					md: '2.2vw',
					lg: '1.3vw',
				}}
				mb={5}>Service Provider Segmentation & Demographics</Heading>

			<Grid gridTemplateColumns={{
				base: '1fr',
				lg: '50% 1fr'
			}} gap={5}>
				<GridItem>
					<Box borderWidth='1px' color={'#CCCCCC'} bg='white' p="20px" borderRadius={15} flexGrow={1} height={'100%'}>
						<Text color={'#808080'}>Service Provider across different Segments</Text>
						<Flex height={'100%'} alignItems={'center'}>
							<Pie data={pieData} options={pieOptions} />
						</Flex>
					</Box>
				</GridItem>
				<GridItem>
					<Box borderWidth='1px' color={'#CCCCCC'} bg='white' p="20px" borderRadius={15} flexGrow={1} height={'100%'}>
						<Text color={'#808080'}>Attributes as per location, years of experience, specialization</Text>
						<ComposableMap
							projection="geoMercator"
							projectionConfig={{ scale: 1100, center: [82.8, 22.6] }}
							style={{ width: "100%", height: '100%' }}
						>
							<Geographies geography={geoData}>
								{({ geographies }) =>
									geographies.map(geo => (
										<Geography
											key={geo.rsmKey}
											geography={geo}
											fill={getRandomColor()}
											stroke="#FFF"
										/>
									))
								}
							</Geographies>
						</ComposableMap>
					</Box>
				</GridItem>
			</Grid>

			<Box mt={4}>
				<CustomLegend labels={pieData.labels} colors={pieData.datasets[0].backgroundColor} />
			</Box>
		</>
	);
};

export default StatBoard;
