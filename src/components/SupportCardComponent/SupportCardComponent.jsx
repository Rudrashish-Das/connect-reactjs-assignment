import React from 'react';
import {
    Flex,
    Avatar,
    Text,
    Divider,
    Button,
    CardBody,
    Card,
    Box,
    Progress,
} from '@chakra-ui/react';

const getStyles = (label) => {
    let bgColor = 'gray';
    let borderColor = 'gray';
    if (label.toLowerCase() === "health care") {
        bgColor = "#4318FF1A";
        borderColor = '#4318FF';
    } else if (label.toLowerCase() === "technical error" || label.toLowerCase() === "payment") {
        bgColor = "#FF847C1A";
        borderColor = '#FF847C';
    }

    return { backgroundColor: bgColor, borderColor };
};

const getStatusStyles = (label) => {
    let bgColor = 'gray';
    let borderColor = 'gray';
    let fontColor = 'black';
    if (label.toLowerCase() === "open") {
        bgColor = "#0054E71A";
        borderColor = '#0054E7';
        fontColor = '#0054E7';
    } else if (label.toLowerCase() === "escalated") {
        bgColor = "#FB8A051A";
        borderColor = '#E77D00';
        fontColor = '#E77D00';
    } else if (label.toLowerCase() === "resolved") {
        bgColor = "#0297381A";
        borderColor = '#029738';
        fontColor = '#029738';
    }


    return { backgroundColor: bgColor, borderColor, fontColor };
};

const StatusComponent = ({ status, borderRadius = 15 }) => {
    const { backgroundColor, borderColor, fontColor } = getStatusStyles(status);
    return (
        <Box
            bg={backgroundColor}
            border="1px solid"
            borderColor={borderColor}
            borderRadius={borderRadius}
            height={'25px'}
            fontSize={'0.8rem'}
            px={'16px'}
            mt={'10px'}
            alignContent={'center'}
            color={fontColor}
            width={'fit-content'}
        >
            Status: {status}
        </Box>
    );
}

const SupportCardComponent = ({ image, name, uid, description, status, labels = ["Technical Error", "Health Care"], borderRadius = 15, progress = 0 }) => {

    return (
        <Card width={'100%'} borderRadius={borderRadius} boxShadow="custom">
            <CardBody>
                <Flex alignItems="center" gap={5}>
                    <Avatar size="md" name={name} src={image} />
                    <Flex direction={"column"} width={'100%'}>
                        <Flex width={'100%'} alignItems={"center"} justifyContent={"space-between"}>
                            <Text fontSize="sm" color={'#2B3674'} fontWeight={'bold'}>{uid}</Text>
                            <Flex gap={'8px'}>
                                {labels.map((label, index) => {
                                    const { backgroundColor, borderColor } = getStyles(label);
                                    return (
                                        <Box key={index}
                                            bg={backgroundColor}
                                            border="1px solid"
                                            borderColor={borderColor}
                                            borderRadius={borderRadius}
                                            height={'25px'}
                                            fontSize={{
                                                base: '0.7rem',
                                                md: '0.8rem',
                                                lg: '0.75rem',
                                                xl: '0.65rem',
                                                '2xl': '0.8rem'

                                            }}
                                            px={'10px'}
                                            alignContent={'center'}
                                        >
                                            {label}
                                        </Box>
                                    );
                                })}
                            </Flex>
                        </Flex>
                        <Text fontSize="sm" color={'#2B3674'}>{name}</Text>
                    </Flex>
                </Flex>
                <Divider my={3} />
                {status.toLowerCase() !== "pending" ?
                    <>
                        <Text fontSize="md">{description}</Text>
                        <StatusComponent status={status} borderRadius={borderRadius} />
                    </>
                    :
                    <>
                        <Text fontSize="md">{description}</Text>
                        <Progress borderRadius={borderRadius} colorScheme='yellow' size='sm' value={progress} mt={3} />
                    </>
                }
            </CardBody>
        </Card>
    );
};

export default SupportCardComponent;
