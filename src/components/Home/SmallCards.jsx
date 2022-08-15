import React from 'react'
import {Box, Flex, Text, Heading, Image, VStack} from '@chakra-ui/react'

export default function SmallCards() {
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
          Getting started with Cardvo product
        </Heading>
        <Flex justify="center" align="center" gap={10} flexWrap="wrap">
          <Box
            w={{ base: 'full', md: '316px' }}
            h="236px"
            bg="white"
            rounded="lg"
            boxShadow="0px 2px 15px rgba(66, 103, 178, 0.5)"
            p={4}
            pos="relative"
          >
            <Box w="80px" h="80px" mb="2rem">
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659868252/samples/zuri/Ellipse_36_budezv.png"
                boxSize="100%"
                alt="explore"
              />
            </Box>
            <VStack
              spacing={4}
              align="start"
              pos="absolute"
              bottom="10%"
              px={2}
            >
              <Text textStyle="pmini" color="#262626">
                Explore
              </Text>
              <Text textStyle="pmini">
                Sort through design from creatives and will the choice to use as
                templates.
              </Text>
            </VStack>
          </Box>
          <Box
            w={{ base: 'full', md: '316px' }}
            h="236px"
            bg="white"
            rounded="lg"
            boxShadow="0px 2px 15px rgba(66, 103, 178, 0.5)"
            p={4}
            pos="relative"
          >
            <Box w="80px" h="80px" mb="2rem">
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659868252/samples/zuri/Ellipse_36_budezv.png"
                boxSize="100%"
                alt="explore"
              />
            </Box>
            <VStack
              spacing={4}
              align="start"
              pos="absolute"
              bottom="10%"
              px={2}
            >
              <Text textStyle="pmini" color="#262626">
                Create
              </Text>
              <Text textStyle="pmini">
                Fredom to play and customize from our growing collection of card
                designs
              </Text>
            </VStack>
          </Box>
          <Box
            w={{ base: 'full', md: '316px' }}
            h="236px"
            bg="white"
            rounded="lg"
            boxShadow="0px 2px 15px rgba(66, 103, 178, 0.5)"
            p={4}
            pos="relative"
          >
            <Box w="80px" h="80px" mb="2rem">
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659868252/samples/zuri/Ellipse_36_budezv.png"
                boxSize="100%"
                alt="explore"
              />
            </Box>
            <VStack
              spacing={4}
              align="start"
              pos="absolute"
              bottom="10%"
              px={2}
            >
              <Text textStyle="pmini" color="#262626">
                Use
              </Text>
              <Text textStyle="pmini">
                Save, download, share and will the power to make this a reality
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
