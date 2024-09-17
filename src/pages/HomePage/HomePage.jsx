import {
	Box,
	Text,
	Select,
	Stack,
	Button,
	Flex,
	Spacer,
	Card,
	CardBody,
	Grid,
	GridItem,
	Divider,
	Image,
	Progress,
	Heading,
	Avatar,
	border,
	MenuButton,
	Menu,
	Link
} from "@chakra-ui/react";
import './HomePage.css';
import { StarIcon, ChevronDownIcon } from "@chakra-ui/icons";
import LineChart from "../../components/LineChart/LineChart";
import StatsBoard from "../../components/StatsBoard/StatsBoard";
import ServiceProvideComponent from "../../components/ServiceProviderComponent/ServiceProviderComponent";
import StatsBoard2 from "../../components/StatsBoard2/StatsBoard2";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import DonutChartComponent from "../../components/DonutChartComponent/DonutChartComponent";
import SupportCardComponent from "../../components/SupportCardComponent/SupportCardComponent";
import DashCards from "../../components/DashCards/DashCards";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";

function HomePage() {
	const borderRadius = 15;
	const profiles = [
		{ src: "https://bit.ly/dan-abramov", alt: "Dan Abramov" },
		{ src: "https://bit.ly/kent-c-dodds", alt: "Kent C. Dodds" },
		{ src: "https://bit.ly/ryan-florence", alt: "Ryan Florence" }
	];

	const data = [
		{ id: "Performance Metrics", percentage: 70, value: 638465.14 },
		{ id: "Feedback Summary", percentage: 88, value: 41881.2 },
		{ id: "Rating Trends", percentage: 59, value: 4070940.6 },
	];

	const dcLabels = ['Petcare Sector', 'Entertainment Sector', 'Event Sector', 'Healthcare Sector', 'Construction Sector', 'Home Services Sector'];
	return (
		<>
			<Stack gap={4}>
				<Flex flexDirection={{
					base: "column",
					md: "row"
				}}
					gap={{
						base: 2,
						md: 0
					}}
				>
					<Flex gap={2} >
						<Flex flexShrink={0}>
							<Menu>
								<MenuButton as={Button} bg={'#FFFFFF'} rightIcon={<ChevronDownIcon />}>
									<Flex gap={3}>
										<Image
											src="./src/assets/calendar_month.svg"
											borderColor={'#89B0EB'}
										/>
										<Text fontWeight={200}>This Year</Text>
									</Flex>
								</MenuButton>
							</Menu>
						</Flex>
						<Menu>
							<MenuButton as={Button} bg={'#FFFFFF'} rightIcon={<ChevronDownIcon />}>
								<Text fontWeight={200}>Location</Text>
							</MenuButton>
						</Menu>
						<Menu>
							<MenuButton as={Button} bg={'#FFFFFF'} rightIcon={<ChevronDownIcon />}>
								<Text fontWeight={200}>Status</Text>
							</MenuButton>
						</Menu>
					</Flex>
					<Spacer />
					<Stack direction={'row'}>
						<Button backgroundColor="#4318FF" color={'white'} fontWeight={100}>
							Assign Order
						</Button>
						<Button backgroundColor="#4318FF" color={'white'} fontWeight={100}>
							Add New Service Provider
						</Button>
					</Stack>
				</Flex>
				<Grid
					templateAreas={{
						base: `"main"
                            "sup"`,
						xl: `"main sup"`
					}}
					gridTemplateColumns={{
						base: "1fr",
						xl: "66% 1fr"
					}}
					gap={6}
				>
					<GridItem area={'main'}>
						<Flex direction={"column"} gap={4}>
							<Grid templateColumns={{
								base: 'repeat(1, 1fr)',
								md: 'repeat(2, 1fr)',
								lg: 'repeat(3, 1fr)',
							}} gap={4}>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody>
											<DashCards
												title="Rs. xxx.xx"
												heading="Total Service Provider"
												topImg='./src/assets/Icon-frame.png'
												color="yellow"
												stat="+5%"
											/>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody>
											<DashCards
												heading="New Service Provider"
												title="xxxx"
												topImg='./src/assets/Icon-frame2.png'
												color="red"
												stat="-10%"
											/>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody>
											<DashCards
												heading="Active Service Provider"
												title="xxxx"
												topImg='./src/assets/Icon-frame3.png'
												color="green"
												stat="+10%"
											/>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody>
											<Stack>
												<Flex alignItems="center" gap={5}>
													<Image src='./src/assets/Icon-frame4.png' width={{ base: "8vw", lg: '4vw' }} />
													<Box>
														<Text fontSize="lg" color="gray.500">Average Rating</Text>
														<Flex gap={1}>
															<StarIcon color={'#FBBC05'} />
															<StarIcon color={'#FBBC05'} />
															<StarIcon color={'#FBBC05'} />
															<StarIcon color={'#FBBC05'} />
															<StarIcon color={'#FBBC05'} />
														</Flex>
													</Box>
												</Flex>
												<Divider my={3} />
												<Flex alignItems="center" gap={8}>
													<Avatar size="md" name="Saikumar" src="https://bit.ly/kent-c-dodds" />
													<Flex direction={'column'} width={'100%'}>
														<Flex justifyContent="space-between">
															<Text fontWeight='bold'>Abhinav</Text>
															<Link color="#4318FF" href="#">View All</Link>
														</Flex>
														<Flex justifyContent="space-between">
															<Flex gap={1}>
																<StarIcon width={{ base: "1.5vw", lg: '0.7vw' }} color={'#FBBC05'} />
																<StarIcon width={{ base: "1.5vw", lg: '0.7vw' }} color={'#FBBC05'} />
																<StarIcon width={{ base: "1.5vw", lg: '0.7vw' }} color={'#FBBC05'} />
																<StarIcon width={{ base: "1.5vw", lg: '0.7vw' }} color={'#FBBC05'} />
																<StarIcon width={{ base: "1.5vw", lg: '0.7vw' }} color={'#FBBC05'} />
															</Flex>
															<Text fontSize="sm" color="#808080">1 day ago</Text>
														</Flex>
													</Flex>
												</Flex>
											</Stack>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody>
											<DashCards
												heading="Service Completion Rate"
												topImg='./src/assets/Icon-frame5.png'
												color="green"
												bottomImg='./src/assets/Icon-frame5-1.png'
												stat="85% completed"
												description="from last week"
												imgW={{ base: "6.5vw", lg: '3.15vw' }}
											/>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody>
											<DashCards
												heading="Service Provider Retension Rate"
												topImg='./src/assets/Icon-frame6.png'
												color="green"
												stat="+100%"
											/>
										</CardBody>
									</Card>
								</GridItem>
							</Grid>

							<Card borderRadius={borderRadius}>
								<CardBody>
									<LineChart />
								</CardBody>
							</Card>

							<Card borderRadius={borderRadius}>
								<CardBody>
									{/* Service Provider Segmentation & Demographics */}
									<Box p={2}>
										<StatsBoard />
									</Box>
								</CardBody>
							</Card>

							<Card borderRadius={borderRadius}>
								<CardBody>
									<Box p={2}>
										<Heading fontSize={{
											base: '3vw',
											md: '2.2vw',
											lg: '1.3vw',
										}} mb={5}>Top Service Providers</Heading>
										<Grid templateColumns={{
											base: 'repeat(1, 1fr)',
											sm: 'repeat(2, 1fr)',
											md: 'repeat(2, 1fr)',
											lg: 'repeat(4, 1fr)'
										}} gap={4}>
											<GridItem>
												<ServiceProvideComponent
													image={"./src/assets/serv1.png"}
													profiles={profiles}
													additionalCount={200}
													title={'Construction Sector'}
													stat={'+11.02%'}
												/>
											</GridItem>
											<GridItem>
												<ServiceProvideComponent
													image={"./src/assets/serv2.png"}
													profiles={profiles}
													additionalCount={180}
													title={'Health Care Sector'}
													stat={'+10.02%'}
												/>
											</GridItem>
											<GridItem>
												<ServiceProvideComponent
													image={"./src/assets/serv3.png"}
													profiles={profiles}
													additionalCount={150}
													title={'Home Services Sector'}
													stat={'+9%'}
												/>
											</GridItem>
											<GridItem>
												<ServiceProvideComponent
													image={"./src/assets/serv4.png"}
													profiles={profiles}
													additionalCount={100}
													title={'Pet Care Sector'}
													stat={'+5%'}
												/>
											</GridItem>
										</Grid>
									</Box>
								</CardBody>
							</Card>

							<Card borderRadius={borderRadius}>
								<CardBody>
									<Box p={2}>
										<StatsBoard2 />
									</Box>
								</CardBody>
							</Card>

							<Grid
								gridTemplateColumns={{
									base: "1fr",
									lg: "45% 1fr"
								}}
								gap={4}
							>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody >
											<Box p={2}>
												<PerformanceChart data={data} />
											</Box>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem>
									<Card borderRadius={borderRadius} height={'100%'}>
										<CardBody>
											<Box p={2}>
												<Heading fontSize={{
													base: '3vw',
													md: '2.2vw',
													lg: '1.3vw',
												}} mb={5}>Performance Metrics & Feedback</Heading>
												<Text color={'#808080'}>Leads per stage</Text>
												<DonutChartComponent labels={dcLabels} />
												<BarChartComponent />
											</Box>
										</CardBody>
									</Card>
								</GridItem>
							</Grid>
						</Flex>
					</GridItem>
					<GridItem area={'sup'} justifyContent={"center"}>
						<Card borderRadius={borderRadius}>
							<CardBody>
								<Flex alignItems="center" gap={5} >
									<Image src='./src/assets/Icon-frame7.png' width={'4vw'} />
									<Box>
										<Heading fontSize={{
											base: '3vw',
											md: '2.2vw',
											lg: '1.3vw',
										}} fontWeight="bold">Support & Compliance</Heading>
									</Box>
								</Flex>
								<Flex justifyContent={"space-between"} my={'30px'} alignItems={"center"}>
									<Text fontSize={{base: '3.2vw',md: '2vw' , lg: '1.2vw'}}>Support Tickets</Text>
									<Button borderRadius={30} px={5} bg={'#F4F7FE'} color={'#4318FF'}>View All</Button>
								</Flex>
								<Stack gap={3}>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"I am facing Technical Issue during the Signup process."}
										status={"Open"}
										labels={["Technical Error", "Health Care"]}
									/>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"I am facing Technical Issue during the Signup process."}
										status={"Escalated"}
										labels={["Technical Error", "Health Care"]}
									/>
								</Stack>
								<Flex justifyContent={"space-between"} my={'30px'} alignItems={"center"}>
									<Text fontSize={{base: '3.2vw',md: '2vw' , lg: '1.2vw'}}>Open Tickets</Text>
									<Button borderRadius={30} px={5} bg={'#F4F7FE'} color={'#4318FF'}>View All</Button>
								</Flex>
								<Stack gap={3}>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"I am facing Technical Issue during the Signup process."}
										status={"Open"}
										labels={["Payment", "Health Care"]}
									/>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"I am facing Technical Issue during the Signup process."}
										status={"Open"}
										labels={["Technical Error", "Health Care"]}
									/>
								</Stack>

								<Flex justifyContent={"space-between"} my={'30px'} alignItems={"center"}>
									<Text fontSize={{base: '3.2vw',md: '2vw' , lg: '1.2vw'}}>In Progress</Text>
									<Button borderRadius={30} px={5} bg={'#F4F7FE'} color={'#4318FF'}>View All</Button>
								</Flex>
								<Stack gap={3}>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"Status Pending"}
										status={"Pending"}
										labels={["Health Care", "Technical Error"]}
										progress={65}
									/>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"Status Pending"}
										status={"Pending"}
										labels={["Health Care", "Technical Error"]}
										progress={65}
									/>
								</Stack>
								<Flex justifyContent={"space-between"} my={'30px'} alignItems={"center"}>
									<Text fontSize={{base: '3.2vw',md: '2vw' , lg: '1.2vw'}}>Solved</Text>
									<Button borderRadius={30} px={5} bg={'#F4F7FE'} color={'#4318FF'}>View All</Button>
								</Flex>
								<Stack gap={3}>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"I am facing Technical Issue during the Signup process."}
										status={"Resolved"}
										labels={["Technical Error", "Health Care"]}
									/>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"I am facing Technical Issue during the Signup process."}
										status={"Resolved"}
										labels={["Technical Error", "Health Care"]}
									/>
								</Stack>

								<Flex justifyContent={"space-between"} my={'30px'} alignItems={"center"}>
									<Text fontSize={{base: '3.2vw',md: '2vw' , lg: '1.2vw'}}>Compliance Status</Text>
									<Button borderRadius={30} px={5} bg={'#F4F7FE'} color={'#4318FF'}>View All</Button>
								</Flex>
								<Stack gap={3}>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"Status Pending"}
										status={"Pending"}
										labels={["Health Care", "Technical Error"]}
										progress={65}
									/>
									<SupportCardComponent
										image={"https://bit.ly/kent-c-dodds"}
										name={"Name of the Raiser"}
										uid={"019273645"}
										description={"Status Pending"}
										status={"Pending"}
										labels={["Health Care", "Technical Error"]}
										progress={65}
									/>
								</Stack>
								<Button backgroundColor="#4318FF" color={'white'} mt={8} py={6} borderRadius={'10px'} fontWeight={100}>
									Raise a Ticket
								</Button>
							</CardBody>
						</Card>
					</GridItem>
				</Grid>
			</Stack>
		</>
	)
}

export default HomePage;