import { Wrap, WrapItem, Flex, Icon, Text } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';

const CustomLegend = ({ labels, colors, direction = 'row', mx = 5, spacing = '18px' }) => (
	<Wrap spacing={spacing} justify="start" mx={mx} direction={direction}>
		{labels.map((label, index) => (
			<WrapItem key={label}>
				<Flex alignItems={'center'}>
					<Icon as={FaCircle} color={colors[index]} boxSize={3} mr="2" />
					<Text fontSize="sm" color={'#808080'} mr="4">{label}</Text>
				</Flex>
			</WrapItem>
		))}
	</Wrap>
);

export default CustomLegend;