import React from "react";
import {
	Flex,
	Input,
	Icon,
	Avatar,
	Text,
	Box,
	Divider,
	Center,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import {
	BellIcon,
	ChatIcon,
	SettingsIcon,
	ChevronDownIcon,
	SearchIcon,
} from "@chakra-ui/icons";
import IconWithBadge from "../IconWithBadge/IconWithBadge";

const Navbar = () => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			padding="1rem"
			bg="white"
			ml={"2px"}
		>
			<Box>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<Icon as={SearchIcon} color="black" />}
					/>
					<Input placeholder="Search anything..." />
				</InputGroup>
			</Box>

			<Flex align="center">
				<IconWithBadge
					ariaLabel="Notifications"
					icon={<BellIcon w={6} h={6} color={"#252762"} />}
					count={21}
					bg="#EAEBFF"
					badgeBg="#252762"
					badgeTextColor="white"
				/>
				<IconWithBadge
					ariaLabel="Messages"
					icon={<ChatIcon w={6} h={6} color={"#252762"} />}
					count={53}
					bg="#EAEBFF"
					badgeBg="#252762"
					badgeTextColor="white"
				/>
				<IconWithBadge
					ariaLabel="Settings"
					icon={<SettingsIcon w={6} h={6} color={"#FF5B5B"} />}
					count={19}
					bg="#FF5B5B26"
					badgeBg="#FF5B5B"
					badgeTextColor="white"
				/>

				<Center height="50px" mr={3} ml={5}>
					<Divider orientation="vertical" />
				</Center>
				<Flex align="center" ml={4}>
					<Avatar
						size="sm"
						name="Saikumar"
						src="https://bit.ly/ryan-florence"
					/>
					<Text ml={2}>Hi, Saikumar</Text>
					<Icon as={ChevronDownIcon} w={5} h={5} ml={1} />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;
