import React from 'react';
import { Box, Image, Text, Stack, HStack, AvatarGroup, Avatar} from '@chakra-ui/react';

const ProfileGroup = ({ profiles, additionalCount }) => {
  return (
    <Stack direction="row" spacing={-4} alignItems={'center'}>
        <AvatarGroup size="sm" max={3} spacing={["-0.4rem","-0.5rem",'-0.6rem','-0.9rem', '-1rem']}>
            {profiles.map((profile, index) => (
                <Avatar height={{ base: '6vw', lg: '2vw'}} width={{ base: '6vw', lg: '2vw'}} 
                key={index} zIndex={index} name={profile.alt} src={profile.src} border="2px solid white" />
            ))}
        </AvatarGroup>
      {additionalCount > 0 && (
        <Text ml={1} fontSize={{
            base: '2vw',
            lg: '1vw'
        }} color="black">+{additionalCount}</Text>
      )}
    </Stack>
  );
};

export default ProfileGroup;
