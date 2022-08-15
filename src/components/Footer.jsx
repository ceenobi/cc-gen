import React, { useId } from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Icon,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
} from '@chakra-ui/react';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';
import { TbBrandFacebook } from 'react-icons/tb';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  const ID = useId();
  const hoverStyle = {
    _hover: {
      color: 'red.400',
    },
  };
  return (
    <Box py={10} bg="#091a30" color="white">
      <Flex
        justify="space-between"
        textAlign="start"
        gap={6}
        maxW="container.lg"
        mx="auto"
        mb={12}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex justify="space-between" flex="1" py={4} px={4}>
          <Flex direction="column" gap={4} justify="flex-start" flex="1">
            <Text fontSize={['lg', 'xl']} fontWeight="medium">
              Our company
            </Text>
            <Flex direction="column" gap={4} justify="flex-start">
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/about"
                sx={hoverStyle}
              >
                About us
              </Text>
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/#"
                sx={hoverStyle}
              >
                Credit cards
              </Text>
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/#"
                sx={hoverStyle}
              >
                Testimonials
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            gap={4}
            justify="flex-start"
            flex="1"
            textAlign="left"
          >
            <Text fontSize={['lg', 'xl']} fontWeight="medium">
              Services
            </Text>
            <Flex direction="column" gap={4} justify="flex-start">
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/#"
                sx={hoverStyle}
              >
                Explore designs
              </Text>
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/#"
                sx={hoverStyle}
              >
                Financial advice
              </Text>
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/#"
                sx={hoverStyle}
              >
                Mailing list
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Divider display={{ base: 'flex', md: 'none' }} />
        <Flex justify="space-between" flex="1" py={4} px={4}>
          <Flex direction="column" gap={4} justify="flex-start" flex="1">
            <Text fontSize={['lg', 'xl']} fontWeight="medium">
              Support
            </Text>
            <Flex direction="column" gap={4} justify="flex-start">
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/#"
                sx={hoverStyle}
              >
                FAQ
              </Text>
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/contact"
                sx={hoverStyle}
              >
                Contact us
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap={4} justify="flex-start" flex="1">
            <Text fontSize={['lg', 'xl']} fontWeight="medium">
              Useful resources
            </Text>
            <Flex direction="column" gap={4} justify="flex-start">
              <Text
                fontSize={['sm', 'md']}
                fontWeight="light"
                as={RouterLink}
                to="/documentation"
                sx={hoverStyle}
              >
                Documentation
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Divider display={{ base: 'flex', md: 'none' }} />
      </Flex>
      <Flex
        justify="space-between"
        maxW="container.lg"
        mx="auto"
        direction={{ base: 'column-reverse', md: 'row' }}
        px={4}
      >
        <Flex direction="column" gap={4} justify="flex-start" mb={3}>
          <Text fontSize={['lg', 'xl']} fontWeight="medium">
            Visit us on social media!
          </Text>
          <HStack spacing={4} role="group">
            <Link href="https://www.youtube.com" isExternal>
              <Icon
                as={AiOutlineYoutube}
                boxSize="20px"
                _hover={{
                  color: 'red',
                }}
              />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Icon
                as={RiTwitterLine}
                boxSize="20px"
                _hover={{
                  color: 'blue.400',
                }}
              />
            </Link>
            <Link href="https://www.facebook.com" isExternal>
              <Icon
                as={TbBrandFacebook}
                boxSize="20px"
                _hover={{
                  color: 'blue.600',
                }}
              />
            </Link>
            <Link href="https://www.instagram.com" isExternal>
              <Icon
                as={AiOutlineInstagram}
                boxSize="20px"
                _hover={{
                  color: 'red.400',
                }}
              />
            </Link>
          </HStack>
          <Text fontSize="sm" fontWeight="light">
            copyright @2022 Yenspace. Allrights reserved.
          </Text>
        </Flex>
        <Flex direction="column" gap={4} justify="flex-start" mb={3}>
          <Text fontSize={['lg', 'xl']} fontWeight="medium" textAlign="start">
            Subscribe to mailing list
          </Text>
          <InputGroup size="md" w={['90%', '250px', '350px']}>
            <Input
              id={`${ID}-email`}
              type="email"
              placeholder="Enter email to subscribe"
              border="1px solid #3182CE"
              _placeholder={{ color: 'blackAlpha.600' }}
              focusBorderColor="gray.500"
              bg="white"
            />
            <InputRightElement width="6rem">
              <Button
                type="submit"
                bg="paint.blue"
                size="md"
                color="white"
                variant="ghost"
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
}
