import React from 'react';
import { Box, Flex, Text, Heading, Image, VStack } from '@chakra-ui/react';
import Buttonz from '../../hooks/useButton';

export default function TemplateCard() {
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
        <VStack spacing={6}>
          <Heading as="h2" size={['xl', 'xl']} textAlign="center">
            Easy-to-use templates to unlock your creativity
          </Heading>
          <Text textStyle="pmini">
            From nicknames to a picture of your cat, create a credit design that
            resonates with you
          </Text>
        </VStack>
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          mb="2rem"
          gap={10}
        >
          <Box h="320px" w={{ base: 'full', md: '270px', lg: '450px' }}>
            <Image
              src="https://res.cloudinary.com/ceenobi/image/upload/v1659931569/samples/zuri/1_ebzjrj.png"
              alt="cccard"
              boxSize="100%"
              objectFit="fill"
            />
          </Box>
          <Flex
            h="320px"
            w={{ base: 'full', md: '320px', lg: '450px' }}
            gap={{ base: '5', md: 'none' }}
            justify="center"
          >
            <Flex direction="column" gap={8}>
              <Flex
                justify="space-between"
                w="220px"
                h="140px"
                bg="#DDDDDD"
                py={3}
                m="auto"
              >
                <Box w="100px" h="120px">
                  <Image
                    src="https://res.cloudinary.com/ceenobi/image/upload/v1659932001/samples/zuri/BACK_1_1_vw03ug.png"
                    alt="cf"
                    boxSize="100%"
                  />
                </Box>
                <Box w="100px" h="120px">
                  <Image
                    src="https://res.cloudinary.com/ceenobi/image/upload/v1659932002/samples/zuri/CARD2_1_1_j2qjck.png"
                    alt="cf"
                    boxSize="100%"
                  />
                </Box>
              </Flex>
              <Flex align="center" h="140px" p={3} bg="#C0CCE5">
                <Box w="80%" h="100px" m="auto">
                  <Image
                    src="https://res.cloudinary.com/ceenobi/image/upload/v1659932001/samples/zuri/CARD2019_rusxpu.png"
                    alt="cf"
                    boxSize="100%"
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex direction="column" gap={3} bg="#CFE0DC" py={3}>
              <Box w="80%" h="100px" m="auto">
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659932001/samples/zuri/CARD019_pzmzi8.png"
                  alt="cf"
                  boxSize="100%"
                />
              </Box>
              <Box w="80%" h="100px" mr="auto">
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659932001/samples/zuri/yBACK2_wbbagn.png"
                  alt="cf"
                  boxSize="100%"
                />
              </Box>
              <Box w="80%" h="100px" m="auto">
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/v1659932001/samples/zuri/CARD2_4_1_l3grtz.png"
                  alt="cf"
                  boxSize="100%"
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Buttonz
          to="/explore"
          name="Explore Designs"
          bg="paint.blue"
          color="white"
          variant="solid"
          _hover={{ bg: '#4267B2' }}
        />
      </Flex>
    </>
  );
}
