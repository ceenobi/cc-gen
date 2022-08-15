import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Flex,
  Button,
  LinkOverlay,
  LinkBox,
  Divider
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AccordionBox from '../components/AccordionBox';

export default function Contact() {
  return (
    <Box>
      <Flex justify="center" align="center" bg="#C0CCE5" px={4} py="4rem">
        <Box w={{ base: '250px', md: '400px' }} mt="2rem">
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659808195/samples/zuri/rafiki_1_u8okn7.png"
            boxSize="100%"
            alt="headerimg"
            objectFit="cover"
          />
        </Box>
      </Flex>
      <Flex
        justify="center"
        align="center"
        maxW="container.xl"
        mx="auto"
        py={{ base: '2rem', md: '4rem' }}
      >
        <Heading textStyle="h2">Contact us anytime</Heading>
      </Flex>
      <Flex
        justify="center"
        align="center"
        py="4rem"
        direction="column"
        bg="#F9F9F9"
        mx="auto"
      >
        <Box maxW="container.xl" mx="auto" px={4}>
          <Text textStyle="p" fontSize={['md', 'lg']} textAlign="center" mb={3}>
            Have a question about our products and services?{' '}
            <Link to="/signin">
              <Box as="span" color="#4267B2">
                Log in
              </Box>
            </Link>
            &nbsp; to view our full FAQ page.
            <br />
            If you prefer to email us, you can do so at cardvo@gmail.com
          </Text>
          <Flex justify="center">
            <LinkBox title="email me">
              <LinkOverlay href="mailto:cardvo@gmail.com">
                <Button variant="big-button">Email us</Button>
              </LinkOverlay>
            </LinkBox>
          </Flex>
        </Box>
      </Flex>
      <Box bg="#ECF3F1" py="4rem">
        <Flex
          justify="space-between"
          align="center"
          maxW="container.md"
          mx="auto"
          direction={{ base: 'column', md: 'row' }}
          px={4}
        >
          <Flex
            justify="center"
            align="center"
            direction="column"
            w="230px"
            py="2rem"
          >
            <Box boxSize="70px" mb={4}>
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659814642/samples/zuri/messages_imziem.png"
                boxSize="100%"
              />
            </Box>
            <VStack spacing={2} textAlign="center" mb={6}>
              <Text color="#262626">Message an agent</Text>
              <Text color="#5E5E5E" fontSize="sm">
                Message an agent to get your questions answered
              </Text>
            </VStack>
            <Button variant="small-button">Send Message</Button>
          </Flex>
          <Box
            h="300px"
            w="1px"
            border=".7px"
            bg="black"
            display={{ base: 'none', md: 'block' }}
          />
          <Divider
            border="4px"
            variant="solid"
            bg="white"
            py=".2rem"
            //w='300px'
            display={{ base: 'flex', md: 'none' }}
          />
          <Flex
            justify="center"
            align="center"
            direction="column"
            w="230px"
            py="2rem"
          >
            <Box boxSize="70px" mb={4}>
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659814623/samples/zuri/call-calling_ylwtke.png"
                boxSize="100%"
              />
            </Box>
            <VStack spacing={2} textAlign="center" mb={4}>
              <Text color="#262626">NGN-1600-CARD VO</Text>
              <Text color="#5E5E5E" fontSize="sm">
                +234-810-3005-678 (English) <br /> We're availabe to help you 24
                hours a day
              </Text>
            </VStack>
            <Button variant="small-button">Call Now</Button>
          </Flex>
        </Flex>
      </Box>
      <Box py="4rem" maxW="container.lg" mx="auto" px={4}>
        <Heading textStyle="h2" mb="2rem" textAlign="center">
          Customer Service Frequently Asked Questions
        </Heading>
        <AccordionBox />
      </Box>
    </Box>
  );
}
