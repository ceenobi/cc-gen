import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Select,
  Button,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

import CardTemplates from '../components/CardTemplates';
import useFetch from '../hooks/useFetch';
import { useToastHook } from '../hooks/useToast';
import Loader from '../utils/Loader';
import PaginatedItems from '../hooks/usePagination';

export default function Explore() {
  const [q, setQ] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { error, data, loading } = useFetch('http://localhost:5000/data');
  const [handleToast] = useToastHook();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  if (error) {
    handleToast({ message: error.message, status: 'error' });
  }
  if (loading) {
    return <Loader />;
  }
  const postPerPage = 6;
  const totalData = data.length;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterData = data.slice(indexOfFirstPost, indexOfLastPost);

  let inputHandler = e => {
    var lowerCase = e.target.value.toLowerCase();
    setQ(lowerCase);
  };
  const searchItem = e => {
    if (q.trim()) {
      setQ(e.target.value.toLowerCase());
    }
  };

  const cardsTypes = data.reduce((cardData, { category, title }) => {
    if (!cardData[category]) cardData[category] = [];
    cardData[category].push(title);
    return cardData;
  }, {});

  const cardObjects = Object.entries(cardsTypes);
  const cardObjToArray = cardObjects.map(item => item[0]);

  return (
    <>
      <Flex
        justify="center"
        align="center"
        py="7rem"
        px={4}
        direction="column"
        maxW="container.xl"
        mx="auto"
        gap={14}
      >
        <VStack spacing={6}>
          <Heading as="h2" size={['xl', 'xl']} textAlign="center">
            Find your Unique Design
          </Heading>
          <Text textStyle="pmini">Create your custom credit Card.</Text>
        </VStack>
        <Box>
          <InputGroup w={{ base: 'full', md: '320px', lg: '600px' }}>
            <InputLeftElement width="5rem">
              <Select
                rounded="none"
                placeholder="All"
                value={q}
                onChange={e => setQ(e.target.value)}
              >
                {cardObjToArray.map((value, i) => (
                  <option value={value} key={i}>
                    {value}
                  </option>
                ))}
              </Select>
            </InputLeftElement>
            <Input
              placeholder="Any design style on your mind?"
              border="1px solid #4267B2"
              _placeholder={{ color: 'blackAlpha.600' }}
              bg="white"
              variant="outline"
              pl="6rem"
              value={q}
              onChange={inputHandler}
            />
            <InputRightElement width="6rem">
              <Button
                leftIcon={<FiSearch />}
                bg="paint.blue"
                variant="solid"
                type="submit"
                color="white"
                rounded="none"
                onClick={searchItem}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Heading as="h2" size="md" mb="2rem">
            Explore hundreds of free credit card designs
          </Heading>
          <Flex
            justify="space-between"
            align="center"
            gap={10}
            direction={{ base: 'column', md: 'row' }}
            mb="2rem"
            mx="auto"
            display={{ base: 'none', md: 'flex' }}
          >
            <Box
              h="250px"
              w={{ base: 'full', md: '200px', lg: '250px', xl: '370px' }}
              pos="relative"
            >
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659959018/samples/zuri/Frame_571_cszlp2.png"
                alt="imagecard"
                boxSize="100%"
              />
              <Box
                pos="absolute"
                top="0%"
                left="0%"
                w="full"
                h="full"
                opacity={0}
                _hover={{ bg: 'blackAlpha.700', opacity: '0.9' }}
                cursor="pointer"
              >
                <Heading
                  as="h2"
                  size="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  h="full"
                  color="white"
                >
                  TEXT
                </Heading>
              </Box>
            </Box>
            <Box
              h="250px"
              w={{ base: 'full', md: '200px', lg: '250px', xl: '370px' }}
              pos="relative"
            >
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659959019/samples/zuri/Frame_558_jojbaz.png"
                alt="imagecard"
                boxSize="100%"
              />
              <Box
                pos="absolute"
                top="0%"
                left="0%"
                w="full"
                h="full"
                opacity={0}
                _hover={{ bg: 'blackAlpha.700', opacity: '0.9' }}
                cursor="pointer"
              >
                <Heading
                  as="h2"
                  size="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  h="full"
                  color="white"
                >
                  ART
                </Heading>
              </Box>
            </Box>
            <Box
              h="250px"
              w={{ base: 'full', md: '200px', lg: '250px', xl: '370px' }}
              pos="relative"
            >
              <Image
                src="https://res.cloudinary.com/ceenobi/image/upload/v1659959019/samples/zuri/Frame_572_lx2kag.png"
                alt="imagecard"
                boxSize="100%"
              />
              <Box
                pos="absolute"
                top="0%"
                left="0%"
                w="full"
                h="full"
                opacity={0}
                _hover={{ bg: 'blackAlpha.700', opacity: '0.9' }}
                cursor="pointer"
              >
                <Heading
                  as="h2"
                  size="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  h="full"
                  color="white"
                >
                  PHOTOS
                </Heading>
              </Box>
            </Box>
          </Flex>
          {cardObjToArray.map((item, i) => (
            <Button
              item={item}
              key={i}
              mx={3}
              mb={3}
              variant="outline"
              borderColor="paint.blue"
              onClick={() => setQ(q)}
            >
              {item}
            </Button>
          ))}
        </Box>
        <CardTemplates
          result={q}
          loading={loading}
          error={error}
          data={filterData}
        />
        <Flex mr="auto">
          {totalData > postPerPage && (
            <PaginatedItems
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalData}
              postPerPage={postPerPage}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
}
