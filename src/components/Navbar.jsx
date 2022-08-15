import React, { useState, useEffect } from 'react';
import {
  Box,
  HStack,
  Heading,
  useColorModeValue,
  Text,
  IconButton,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  Flex,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import useNavlink from '../hooks/useNavlink';
import Sidebar from './Sidebar';
//import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [handleNavButton, handleNavText] = useNavlink();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/signin' && location.pathname !== '/signup') {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return (
    <Box
      borderBottomColor={useColorModeValue('blue.700', 'blue.600')}
      bg={useColorModeValue('#F9F9F9', 'blackAlpha.900')}
      borderBottom="1px"
      zIndex={10}
      position="fixed"
      top={0}
      w="full"
    >
      <HStack
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
        align="center"
        spacing={10}
        h="16"
        px={4}
      >
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} isOpen={isOpen} />
          </DrawerContent>
        </Drawer>
        <Flex align="center">
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659828951/samples/zuri/Ellipse_4_usjmhw.png"
            alt="logo"
            boxSize='40px'
          />
          <Heading as={Link} to="/" fontSize='2.2em' color="#3F3F3F">
            Card
            <Box as="span" color="#6280BF">
              vo
            </Box>
          </Heading>
        </Flex>
        {visible && (
          <>
            <HStack
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              ml={8}
              flex="1"
            >
              <Text as={handleNavText} name="Explore" to="/explore" />
              <Text as={handleNavText} name="About us" to="/about" />
              <Text as={handleNavText} name="Contact us" to="/contact" />
            </HStack>
            <HStack
              spacing={4}
              justify="flex-end"
              display={{ base: 'none', md: 'flex' }}
            >
              <Text as={handleNavButton} to="/signin" name="Sign in" borderColor='#4267B2'/>
              <Text
                as={handleNavButton}
                to="/signin"
                name="Sign up"
                bg="#4267B2"
                color="white"
              />
            </HStack>
          </>
        )}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </HStack>
    </Box>
  );
}
