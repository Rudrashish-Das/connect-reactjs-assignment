import { Flex, Text, Stack, Box, Divider, Image } from "@chakra-ui/react";

const getHash = (color) =>{
    if(color.toLowerCase() === 'yellow')
        return '#FBBC05';

    if(color.toLowerCase() === 'red')
        return '#EE5D50';

    if(color.toLowerCase() === 'green')
        return '#18CE98';

    return '#FBBC05';
}

const DashCards = ({ heading, color, stat, topImg, bottomImg=undefined, title=undefined, description="more from last week", imgW={base: "8vw" ,lg:'4vw'} } ) => {     
    return(
        <Stack>
            <Flex alignItems="center" gap={5}>
                <Image src={topImg} width={{base: "8vw" ,lg:'4vw'}}/>
                <Box>
                    <Text fontSize="lg" color="gray.500">{heading}</Text>
                    {title !== undefined ?
                        <Text fontSize="2xl" fontWeight="bold">{title}</Text>
                        : <></>
                    }
                </Box>
            </Flex>
            <Divider my={3}/>
            <Flex alignItems="center" gap={5}>
                { bottomImg === undefined ? 
                    <Image src={`./${color}-stat.png`} width={imgW}/>
                    :
                    <Image src={bottomImg} width={imgW}/>
                }
                <Text fontSize="sm" color={'#808080'}><span style={{color: getHash(color) }}>{stat}</span> {description}</Text>
            </Flex>
        </Stack>
    )
};

export default DashCards;
