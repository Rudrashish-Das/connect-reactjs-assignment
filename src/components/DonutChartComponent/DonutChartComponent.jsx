import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Flex, useTheme } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import CustomLegend from '../CustomLegend/CustomLegend';

const percentagePlugin = {
    id: 'percentageLabels',
    afterDatasetsDraw: function (chart, easing) {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach((element, index) => {
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    const dataString = dataset.data[index].toString() + '%';

                    const position = element.tooltipPosition();
                    const radius = element.outerRadius;
                    const centerAngle = element.startAngle + (element.endAngle - element.startAngle) / 2;
                    const x = position.x + (radius / 4) * Math.cos(centerAngle);
                    const y = position.y + (radius / 4) * Math.sin(centerAngle);

                    ctx.beginPath();
                    ctx.arc(x, y, radius/5, 0, Math.PI * 2); 
                    ctx.fillStyle = '#ECEAF8'; 
                    ctx.fill();

                    ctx.shadowColor = 'rgba(0,0,0,0.25)';
                    ctx.shadowBlur = 4;
                    ctx.shadowOffsetX = 2;
                    ctx.shadowOffsetY = 2;

                    ctx.font = `bold ${radius/7}px Arial`;
                    ctx.fillStyle = 'black'; 
                    ctx.fillText(dataString, x, y);

                    ctx.shadowColor = 'transparent';
                });
            }
        });
    }
};


ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartComponent = ({labels}) => {
    const theme = useTheme(); 
    const colors = [
        theme.colors.purple[400],  // Petcare
        theme.colors.blue[500],    // Entertainment
        theme.colors.orange[400],  // Event
        theme.colors.pink[500],    // Healthcare
        theme.colors.purple[700],  // Construction
        theme.colors.teal[500]     // Home Services
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                data: [30, 5, 20, 20, 15, 10], 
                backgroundColor: colors,
                hoverOffset: 4
            }
        ]
    };

    const options = {
        responsive: true,
        cutout: '50%',  
        layout: {
            padding: {
                // top: 30,
                left: 30,
                right: 30,
                bottom: 30
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'right',
                labels: {
                    padding: 20,
                    pointStyle: 'circle',
                    usePointStyle: true,
                    boxWidth: 10,
                    boxHeight: 10,
                    font:{
                        size: 13
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    }
                }
            }
        }
    };

    return (
        <Flex justifyContent={'space-between'} alignItems="center" >  
            <Box width={{base: '50vw', md: '40vw', lg: '16vw'}} height={{base: '50vw', md: '40vw', lg: '16vw'}} justifyContent={'center'} alignItems={'center'}>  
                <Doughnut data={data} options={options} plugins={[percentagePlugin]} />
            </Box>
            <CustomLegend labels={labels} colors={colors} direction='column' mx={0} spacing='10px' />
        </Flex>
    );
    
};

export default DonutChartComponent;
