import React from 'react';
import { 
  Box, 
  Flex, 
  IconButton, 
  VStack, 
  Spacer, 
  useColorModeValue 
} from '@chakra-ui/react';
import { 
  FiMenu, 
  FiHome, 
  FiArchive, 
  FiMessageSquare, 
  FiSettings, 
  FiHelpCircle 
} from 'react-icons/fi';

const Sidebar = () => {
    const isActive = (path) => location.pathname === path;

    return (
        <Box
            as="nav"
            bg={'white'}
            w="60px"
            h="100vh"
            position="fixed"
            top="0"
            left="0"
            // p="2"
            display={{
                base: 'none',
                md: 'block'
            }}
        >
            <Flex direction="column" align="center" h="full" gap={2}>
                <Flex width={'100%'}>
                    { isActive('/menu') ?
                        <Box bg={'black'} width={'1px'} borderRightRadius={15}>
                        </Box>
                        : 
                        <Box width={1} borderRightRadius={15}>
                        </Box>
                    }
                    <IconButton
                        aria-label="Menu"
                        icon={<FiMenu />}
                        variant={isActive('/menu') ? "solid" : "ghost"}
                        bg={isActive('/menu') ? '#0000001A' : "white"}
                        size="lg"
                        width={'100%'}
                        borderRadius={0}
                    />
                </Flex>

                <VStack spacing="2" align="stretch" flex="1" width={'100%'}>
                    <Flex>
                        { isActive('/') ?
                            <Box bg={'black'} width={1} borderRightRadius={15}>
                            </Box>
                          : 
                          <Box width={1} borderRightRadius={15}>
                        </Box>
                        }
                        <IconButton
                            aria-label="Home"
                            icon={<FiHome />}
                            variant={isActive('/') ? "solid" : "ghost"}
                            bg={isActive('/') ? '#0000001A' : "white"}
                            size="lg"
                            width={'100%'}
                            borderRadius={0}
                        />
                    </Flex>
                    <Flex>
                        { isActive('/archive') ?
                            <Box bg={'black'} width={1} borderRightRadius={15}>
                            </Box>
                            : <Box width={1} borderRightRadius={15}></Box>
                        }
                        <IconButton
                            aria-label="Archive"
                            icon={<FiArchive />}
                            variant={isActive('/archive') ? "solid" : "ghost"}
                            bg={isActive('/archive') ? '#0000001A' : "white"}
                            size="lg"
                            width={'100%'}
                            borderRadius={0}
                        />
                    </Flex>
                    <Flex>
                        { isActive('/messages') ?
                            <Box bg={'black'} width={1} borderRightRadius={15}>
                            </Box>
                            : <Box width={1} borderRightRadius={15}></Box>
                        }
                        <IconButton
                            aria-label="Messages"
                            icon={<FiMessageSquare />}
                            variant={isActive('/messages') ? "solid" : "ghost"}
                            bg={isActive('/messages') ? '#0000001A' : "white"}
                            size="lg"
                            width={'100%'}
                            borderRadius={0}
                        />
                    </Flex>
                </VStack>

                <Spacer />

                <VStack spacing="4" mb="4">
                    <IconButton
                        aria-label="Help"
                        icon={<FiHelpCircle />}
                        variant="ghost"
                        size="lg"
                        isRound
                    />
                    <IconButton
                        aria-label="Settings"
                        icon={<FiSettings />}
                        variant="ghost"
                        size="lg"
                        isRound
                    />
                </VStack>
            </Flex>
        </Box>
    );
};

export default Sidebar;
