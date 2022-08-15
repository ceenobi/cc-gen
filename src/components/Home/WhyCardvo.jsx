import React from 'react';
import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';
import Buttonz from '../../hooks/useButton';

export default function WhyCardvo() {
  return (
    <Box bg="paint.grey">
      <Box py="4rem" px={4} maxW="container.lg" mx="auto">
        <Heading as="h2" size={['xl', 'xl']} textAlign="center" mb="4rem">
          Why Cardvo product?
        </Heading>
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column-reverse', md: 'row' }}
          mb="2rem"
          gap={10}
        >
          <Stack spacing={6} w={{ base: 'full', md: '326px' }}>
            <Heading as="h2" size="md">
              Build From Template
            </Heading>
            <Text textStyle="pmini">
              Sort through design from creatives and will the choice to use as
              templates.{' '}
            </Text>
            <Buttonz
              name="Explore"
              to="/expore"
              variant="outline"
              color="paint.teal"
              borderColor="paint.teal"
            />
          </Stack>
          <Box h="320px" w={{ base: 'full', md: '350px', lg: '450px' }}>
            <Image
              src="https://res.cloudinary.com/ceenobi/image/upload/v1659905820/samples/zuri/Frame_424_zd1fsk.png"
              alt="imagecard"
              boxSize="100%"
            />
          </Box>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          gap={10}
          direction={{ base: 'column', md: 'row' }}
          mb="2rem"
        >
          <Box h="320px" w={{ base: 'full', md: '350px', lg: '450px' }}>
            <Image
              src="https://res.cloudinary.com/ceenobi/image/upload/v1659907708/samples/zuri/BigRectangle_l2lkwl.png"
              alt="imagecard"
              boxSize="100%"
            />
          </Box>
          <Stack spacing={6} w={{ base: 'full', md: '326px' }}>
            <Heading as="h2" size="md">
              Unlock Your Creativity
            </Heading>
            <Text textStyle="pmini">
              From colours, to images, to text and fonts, will the power to
              create any design you want, within confined templates
            </Text>
            <Buttonz
              name="Explore"
              to="/expore"
              variant="outline"
              color="paint.teal"
              borderColor="paint.teal"
            />
          </Stack>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          gap={10}
          direction={{ base: 'column-reverse', md: 'row' }}
          mb="2rem"
        >
          <Stack spacing={6} w={{ base: 'full', md: '326px' }}>
            <Heading as="h2" size="md">
              Curated Financial Advice
            </Heading>
            <Text textStyle="pmini">
              We show you ways to save money and get cash rewards.
            </Text>
            <Buttonz
              name="Subscribe to mailing list"
              to="/expore"
              variant="outline"
              color="paint.teal"
              borderColor="paint.teal"
            />
          </Stack>
          <Box h="320px" w={{ base: 'full', md: '350px', lg: '400px' }}>
            <Image
              src="https://res.cloudinary.com/ceenobi/image/upload/v1659907704/samples/zuri/Frame_y424_iokdvq.png"
              alt="imagecard"
              boxSize="100%"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
