import { Box, IconButton, Badge } from '@chakra-ui/react';

const IconWithBadge = ({ icon, count, ariaLabel, bg = 'white', badgeBg = 'white', badgeTextColor = 'black' }) => (
	<Box position="relative" display="inline-block" mx={1} bg={bg} borderRadius={15}>
		<IconButton variant="ghost" aria-label={ariaLabel} icon={icon} size="lg" />
		{count > 0 && (
			<Badge
				position="absolute"
				top="0"
				right="0"
				transform="translate(30%, -30%)"
				borderRadius={50}
				bg={badgeBg}
				color={badgeTextColor}
				width={5}
				height={5}
				alignContent={'center'}
				zIndex={100}
				fontSize={10}
			>
				{count}
			</Badge>
		)}
	</Box>
);

export default IconWithBadge;