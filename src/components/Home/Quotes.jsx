import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';

export default function Quotes() {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        py="4rem"
        px={4}
        direction="column"
        maxW="container.xl"
        mx="auto"
        gap={14}
      >
        <Heading as="h2" size={['xl', 'xl']} textAlign="center">
          Join over 50,000 people worldwide
        </Heading>
        <Flex justify="center" align="center" gap={10} flexWrap="wrap">
          <Box
            w={{ base: 'full', md: '320px', lg:'360px' }}
            h="320px"
            bg="white"
            border="1px solid #6B817B"
            p={4}
            pos="relative"
          >
            <Box w="20px" h="30px" mb="2rem">
              <Flex>
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659926583/samples/zuri/quote_zo8isg.png"
                  boxSize="100%"
                  alt="quote"
                />
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659926583/samples/zuri/quote_zo8isg.png"
                  boxSize="100%"
                  alt="quote"
                />
              </Flex>
            </Box>
            <VStack spacing={4} align="start" mb="2rem">
              <Text textStyle="pmini">
                I’m glad I found Card Vo, My friend recommended this to me and I
                can’t believe how easy and fast I was able to inscribe my nick
                name on my card!
              </Text>
            </VStack>
            <HStack
              justify="flex-end"
              spacing={2}
              pos="absolute"
              bottom="10%"
              right="0"
              px={4}
            >
              <Box>
                <Text textStyle="pmini" fontWeight="bold">
                  Calatrava Manderi
                </Text>
                <Text textStyle="pmini" color="#7D7D7D" textAlign="right">
                  City Bank
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659927375/samples/zuri/imgf_gtd8dd.png"
                  boxSize="100%"
                  alt="avatar"
                />
              </Box>
            </HStack>
          </Box>
          <Box
            w={{ base: 'full', md: '320px', lg:'360px' }}
            h="320px"
            bg="white"
            border="1px solid #6B817B"
            p={4}
            pos="relative"
          >
            <Box w="20px" h="30px" mb="2rem">
              <Flex>
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659926583/samples/zuri/quote_zo8isg.png"
                  boxSize="100%"
                  alt="quote"
                />
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659926583/samples/zuri/quote_zo8isg.png"
                  boxSize="100%"
                  alt="quote"
                />
              </Flex>
            </Box>
            <VStack spacing={4} align="start" mb="2rem">
              <Text textStyle="pmini">
                I have always loved the idea of expressing my creative. Card Vo,
                gave me the chance to celebrate my doodle on my Card! It is a
                big deal for me because it sells my brand effortlessly.
              </Text>
            </VStack>
            <HStack
              justify="flex-end"
              spacing={2}
              pos="absolute"
              bottom="10%"
              right="0"
              px={4}
            >
              <Box>
                <Text textStyle="pmini" fontWeight="bold">
                  Amaka Adenuga
                </Text>
                <Text textStyle="pmini" color="#7D7D7D" textAlign="right">
                  Gt Bank
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659928147/samples/zuri/imgm_fury0x.png"
                  boxSize="100%"
                  alt="avatar"
                />
              </Box>
            </HStack>
          </Box>
          <Box
            w={{ base: 'full', md: '320px', lg:'360px' }}
            h="320px"
            bg="white"
            border="1px solid #6B817B"
            p={4}
            pos="relative"
          >
            <Box w="20px" h="30px" mb="2rem">
              <Flex>
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659926583/samples/zuri/quote_zo8isg.png"
                  boxSize="100%"
                  alt="quote"
                />
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659926583/samples/zuri/quote_zo8isg.png"
                  boxSize="100%"
                  alt="quote"
                />
              </Flex>
            </Box>
            <VStack spacing={4} align="start" mb="2rem">
              <Text textStyle="pmini">
                I’m glad I found Card Vo, My friend recommended this to me and I
                can’t believe how easy and fast I was able to inscribe my nick
                name on my card!
              </Text>
            </VStack>
            <HStack
              justify="flex-end"
              spacing={2}
              pos="absolute"
              bottom="10%"
              right="0"
              px={4}
            >
              <Box>
                <Text textStyle="pmini" fontWeight="bold">
                  Peter Lumberick
                </Text>
                <Text textStyle="pmini" color="#7D7D7D" textAlign="right">
                  City Bank
                </Text>
              </Box>
              <Box>
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659928147/samples/zuri/imgd_qgjrds.png"
                  boxSize="100%"
                  alt="avatar"
                />
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
