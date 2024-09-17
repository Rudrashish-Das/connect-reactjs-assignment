import React from 'react';
import { Box, Image, Text, Stack, Flex, } from '@chakra-ui/react';
import ProfileGroup from '../ProfileGroup/ProfileGroup';

const ServiceProvideComponent = ({ profiles, additionalCount, image, title, stat, borderRadius=15 }) => {
  return (
      <Stack p={2} border={'1px'} color={'#CCCCCC'} borderRadius={borderRadius} height={'100%'}>
          <Image width={'100%'} src={image} />
          <Text color={'black'} fontSize={{base: '3vw', lg: '1vw' }} fontWeight={'bold'}>{title}</Text>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
              <ProfileGroup profiles={profiles} additionalCount={additionalCount} />
              <Box bg={'#E6F8EF'} color={'#18CE98'} p={'0.2vw'} borderRadius={{ base: '0.6vw', lg: '0.3vw' }} 
              px={{base: '1vw', lg: '0.5vw'}} fontSize={{base: '2vw', lg: '1vw'}}>
                  {stat}
              </Box>
          </Flex>
      </Stack>
  );
};

export default ServiceProvideComponent;
