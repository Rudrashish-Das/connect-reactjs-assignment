import { Box, Divider, Text, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';
import RadialBar from "../RadialBar/RadialBar";

const PerformanceChart = ({ data, colors = ['#039F00', '#EB8C00', '#ADD633'] }) => {
    return (
        <>
            <Heading fontSize={{
                base: '3vw',
                md: '2.2vw',
                lg: '1.3vw',
            }} mb={5}>Performance Metrics & Feedback</Heading>
            <Box height={{ base: '35vw', lg: '20vw' }}>
                <RadialBar data={data} colors={colors} />
            </Box>

            {data.map((value, index) => (
                <Flex key={index} alignItems={"center"} gap={5} mt={4}>
                    <Flex flexShrink={0} alignItems={"center"}>
                        <Icon as={FaCircle} color={colors[index]} boxSize={3} mr="2" />
                        <Text flexShrink={0} color={'#737373'}>
                            {value.id}
                        </Text>
                    </Flex>
                    <Divider flexShrink={1} borderStyle="dotted" />
                    <Text flexShrink={0} fontWeight={'bold'}>
                        {new Intl.NumberFormat('en-IN').format(value.value)}
                    </Text>
                </Flex>
            ))}
        </>
    )
};

export default PerformanceChart;