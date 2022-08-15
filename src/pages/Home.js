import React from 'react';
import { Box, Flex, Heading, Text, HStack, Image } from '@chakra-ui/react';

import Buttonz from '../hooks/useButton';
import SmallCards from '../components/Home/SmallCards';
import WhyCardvo from '../components/Home/WhyCardvo';
import Quotes from '../components/Home/Quotes';
import TemplateCard from '../components/Home/TemplateCard';

export default function Home() {
  return (
    <Box mt={{ base: '2rem', md: '5rem' }}>
      <Flex pos="relative">
        <Flex
          pos="absolute"
          zIndex={-20}
          justify="flex-end"
          left="70%"
          top="40%"
        >
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659834270/samples/zuri/Ellipse_49_xb0p2y.png"
            alt="circlelarge"
            boxSize="100%"
            display={{ base: 'none', md: 'flex' }}
          />

          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659903017/samples/zuri/CirclEllipse_49_bpjkb5.png"
            alt="circlesmall"
            boxSize="100%"
            display={{ base: 'flex', md: 'none' }}
          />
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          direction={['column-reverse', 'row']}
          maxW="container.xl"
          mx="auto"
        >
          <Flex
            justify="flex-start"
            py={7}
            px={4}
            direction="column"
            gap={6}
            w={{ base: 'full', md: '370px', lg: '530px', xl: '530px' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading
              as="h2"
              size={['xl', 'xl', '2xl']}
              fontWeight="bold"
              mt={{ base: '2rem', md: 'null' }}
            >
              <Box as="span" color="teal.200">
                Customise
              </Box>
              &nbsp;your credit cards
            </Heading>
            <Text textStyle="pmini" fontSize={['md', 'lg']} px={2}>
              Choose the looks, style and design of your card. Create a design
              that resonates with you.
            </Text>
            <HStack
              spacing={6}
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <Buttonz to="/signin" name="Sign in" variant="outline" />
              <Buttonz
                to="/explore"
                name="Explore Designs"
                bg="paint.blue"
                color="white"
                variant="solid"
                _hover={{ bg: '#4267B2' }}
              />
            </HStack>
          </Flex>
          <Flex
            justify="flex-end"
            py={7}
            px={4}
            direction="column"
            align="center"
            w={{ base: 'full', md: '360px', lg: '460px', xl: '700px' }}
          >
            <Box
              pos="relative"
              ml="auto"
              bg="#ECF3F1"
              w={{ base: 'full', md: '360px', lg: '460px', xl: '700px' }}
            >
              <Box
                w={{ base: '250px', md: '250px', lg: '350px', xl: '400px' }}
                ml="auto"
              >
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1659746580/samples/zuri/12_1_dkvodf.png"
                  alt="ccimagelarge"
                  boxSize="100%"
                />
              </Box>
              <Box
                pos="absolute"
                bottom="0%"
                right="15%"
                h={{ base: '220px', md: '250px', lg: '300px', xl: '400px' }}
                w={{ base: 'fullpx', md: '300px', lg: '410px', xl: '600px' }}
                zIndex={5}
              >
                <Image
                  src="https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_auto/v1659746579/samples/zuri/Rectangle_v8y7qx.png"
                  alt="ccimage"
                  boxSize="100%"
                />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="center"
        align="center"
        gap={8}
        py="4rem"
        px={4}
        direction="column"
        maxW="container.xl"
        mx="auto"
      >
        <Text textStyle="pmini" mt={{ base: '4rem', md: '6rem' }}>
          Trusted by 20+ financial users
        </Text>
        <Flex
          justify="center"
          align="center"
          flexWrap="wrap"
          gap={10}
          cursor="pointer"
        >
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659834270/samples/zuri/Vector_oi9uef.png"
            alt="circle"
            boxSize="50px"
          />
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659836455/samples/zuri/Vyctor_tpmppi.png"
            alt="circle"
            boxSize="50px"
          />
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659834270/samples/zuri/Vector2_tgbuvc.png"
            alt="circle"
            boxSize="50px"
          />
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659834270/samples/zuri/Vector3_wlrcyt.png"
            alt="circle"
            boxSize="50px"
          />
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659836123/samples/zuri/Vect_chk2og.png"
            alt="circle"
            boxSize="50px"
          />
          <Image
            src="https://res.cloudinary.com/ceenobi/image/upload/v1659834271/samples/zuri/Vector5_zdx75h.png"
            alt="circle"
            boxSize="50px"
          />
        </Flex>
      </Flex>
      <SmallCards />
      <WhyCardvo />
      <Quotes />
      <TemplateCard />
    </Box>
  );
}
