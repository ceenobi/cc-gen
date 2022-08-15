import React, { useId } from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FcCheckmark } from 'react-icons/fc';

export default function About() {
  const ID = useId();
  return (
    <Box mt="4rem">
      <Box w="full" h="full">
        <Image
          src="https://res.cloudinary.com/ceenobi/image/upload/q_auto/v1659656756/samples/zuri/Frame_1_ekaqr8.webp"
          boxSize="100%"
          alt="headerimg"
          objectFit="cover"
        />
      </Box>
      <Box
        maxW="container.lg"
        mx="auto"
        textAlign="start"
        mb="4rem"
        px={4}
        py="2rem"
      >
        <Heading textStyle="h3" mb="2rem" textAlign="center">
          About us
        </Heading>
        <Text textStyle="note">
          Cardvo was founded in 2022 by Zuri, and was developed by Team Proj CC
          gen/128. Our purpose is to serve you an array of fancy credit card
          designs that you can view, edit, download and share with friends on
          social media. Users can also create their own designs based on
          preference as there are no limits to creativity on Cardvo. <br />{' '}
          Cardvo has about Fifty thousand (50,000) active users around the world
          with over Two hundered and twenty (220) card designs available in
          about Seventy-four (74) countries. If you want to know more or require
          assistance, you can send us a mail via the{' '}
          <Box as="span" color="#4267B2">
            <Link to="/contact">Contact us page.</Link>
          </Box>
          &nbsp; Little things matter to your happiness; unleash your creativity
          with Cardvo. Our authenticated users have full access to the website,
          they are able to download credit card code sample, see usage example,
          interact with the documentation,comment under a design, react and
          share on social media save data and come back to download. Mean while
          you cannot have this experince if you do not have an account with Card
          vo.{' '}
          <Box as="span" color="#4267B2">
            <Link to="/signup">Join us now.</Link>
          </Box>
        </Text>
      </Box>
      <Box maxW="container.xl" mx="auto" px={4} py="2rem" mb="4rem">
        <Heading textStyle="h3" textAlign="left" mb="2rem">
          Facts
        </Heading>
        <Flex justify="space-between" flexWrap="wrap" gap={4}>
          <Box
            bg="#85A19A"
            h="300px"
            w={{ base: 'full', md: '360px', lg: '300px', xl: '400px' }}
            rounded="lg"
            mb={2}
          >
            <VStack
              spacing={6}
              justify="center"
              align="center"
              h="full"
              color="white"
            >
              <Heading as="h2">50k +</Heading>
              <Text>Active users around the world</Text>
            </VStack>
          </Box>
          <Box
            bg="#85A19A"
            h="300px"
            w={{ base: 'full', md: '360px', lg: '300px', xl: '400px' }}
            rounded="lg"
            mb={2}
          >
            <VStack
              spacing={6}
              justify="center"
              align="center"
              h="full"
              color="white"
            >
              <Heading as="h2">220k +</Heading>
              <Text>Credit card designs</Text>
            </VStack>
          </Box>
          <Box
            bg="#85A19A"
            h="300px"
            w={{ base: 'full', md: '360px', lg: '300px', xl: '400px' }}
            rounded="lg"
            mb={2}
          >
            <VStack
              spacing={6}
              justify="center"
              align="center"
              h="full"
              color="white"
            >
              <Heading as="h2">74 +</Heading>
              <Text>Active countries</Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Box maxW="container.xl" mx="auto" px={4} py={5} mb="5rem">
        <Heading textStyle="h3" textAlign={['center', 'left']} mb="2rem">
          Meet the founders
        </Heading>
        <Flex justify="space-between" flexWrap="wrap" gap={4}>
          <Box
            mb={3}
            w={{ base: 'full', md: '360px', lg: '300px', xl: '400px' }}
          >
            <Box mb={3}>
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1659663088/samples/zuri/Frame_457_zjbejn.png"
                alt="founders"
                boxSize="100%"
                objectFit="cover"
                rounded="lg"
              />
            </Box>
            <VStack spacing={2} alignItems="left">
              <Text textStyle="psmall">J.O. Ademola</Text>
              <Text textStyle="pmini">Founder</Text>
            </VStack>
          </Box>
          <Box
            mb={3}
            w={{ base: 'full', md: '360px', lg: '300px', xl: '400px' }}
          >
            <Box mb={3}>
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1659663089/samples/zuri/Frame_458_foule8.png"
                alt="founders"
                boxSize="100%"
                rounded="lg"
              />
            </Box>
            <VStack spacing={2} alignItems="left">
              <Text textStyle="psmall">A.J. Styles</Text>
              <Text textStyle="pmini">Co Founder</Text>
            </VStack>
          </Box>
          <Box
            mb={3}
            w={{ base: 'full', md: '360px', lg: '300px', xl: '400px' }}
          >
            <Box mb={3}>
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1659663088/samples/zuri/Frame_459_lzpcqm.png"
                alt="founders"
                boxSize="100%"
                rounded="lg"
              />
            </Box>
            <VStack spacing={2} alignItems="left">
              <Text textStyle="psmall">B.O. Kalajaye</Text>
              <Text textStyle="pmini">Co Founder</Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Box textAlign="center" px={4} py={20} bg="#fbfbfb ">
        <Heading textStyle="h3" mb="2rem">
          Subscribe for financial advice
        </Heading>
        <Text textStyle="note" mb="3rem">
          We help our users make better financial choices towards receiving cash
          rewards and saving money.
        </Text>
        <Flex
          maxW="container.lg"
          mx="auto"
          gap={6}
          direction={{ base: 'column', lg: 'row' }}
          justify="center"
          align="center"
        >
          <Box w={['full', '400px', '500px']}>
            <Image
              src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1659666203/samples/zuri/Frame_437_rh29we.png"
              alt="imagecustomer"
              objectFit="cover"
              boxSize="100%"
            />
          </Box>
          <VStack spacing={2} alignItems="center">
            <HStack spacing={4} w="full">
              <Icon as={FcCheckmark} color="teal.400" fontSize="20px" />
              <Text textStyle="note">
                Need a credit card with no annual fee?
              </Text>
            </HStack>
            <HStack spacing={4} w="full">
              <Icon as={FcCheckmark} color="teal.400" fontSize="20px" />
              <Text textStyle="note">
                Need insight on cash rewards on purchases?
              </Text>
            </HStack>
            <HStack spacing={4} w="full">
              <Icon as={FcCheckmark} color="teal.400" fontSize="20px" />
              <Text textStyle="note">
                Need insight on to know ranges of cash limits?
              </Text>
            </HStack>
            <HStack spacing={4} w="full">
              <Icon as={FcCheckmark} color="teal.400" fontSize="20px" />
              <Text textStyle="note">
                Need to know cash limits that fits your spending habits?
              </Text>
            </HStack>

            <InputGroup size="md" w={['full', '250px', '350px']}>
              <Input
                id={`${ID}-email`}
                type="email"
                placeholder="Enter email to subscribe"
                border="1px solid #3182CE"
                _placeholder={{ color: 'blackAlpha.600' }}
                focusBorderColor="gray.500"
              />
              <InputRightElement width="6rem">
                <Button
                  type="submit"
                  bg="blue.400"
                  size="md"
                  color="white"
                  variant="ghost"
                >
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
