import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  VStack,
  Text,
  HStack,
  Avatar,
  Textarea,
  IconButton,
} from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';
import {
  AiOutlineEdit,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { BsBookmarks } from 'react-icons/bs';

import useFetch from '../hooks/useFetch';
import { useToastHook } from '../hooks/useToast';
import Loader from '../utils/Loader';

export default function CardID() {
  const [index, setIndex] = useState(0);
  const [comment, setComment] = useState('');
  const { card_id } = useParams();
  const { error, data, loading } = useFetch(
    `http://localhost:5000/data/${card_id}`
  );
  const { data: cards } = useFetch(`http://localhost:5000/data`);
  const [handleToast] = useToastHook();

  const { img, category, title, id } = data;

  if (loading) {
    return <Loader />;
  }
  if (error) {
    handleToast({ message: error.message, status: 'error' });
  }

  const filterSimilar = cards.filter(item => item.category === category);
  console.log('fil', filterSimilar);
  const alreadyExists = filterSimilar.filter(item => item.id !== id);
  console.log('f', alreadyExists);

  return (
    <>
      <Box
        align="center"
        py="7rem"
        px={4}
        maxW="container.lg"
        mx="auto"
        gap={14}
      >
        <Flex
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={10}
          mb="2rem"
        >
          <HStack spacing={4} w="full" display={{ base: 'flex', md: 'none' }}>
            {' '}
            <Button
              bg="paint.blue"
              variant="solid"
              w="220px"
              color="white"
              leftIcon={<HiOutlineDownload />}
            >
              Download
            </Button>
            <Button
              variant="outline"
              borderColor="paint.teal"
              color="paint.teal"
              w="220px"
              leftIcon={<AiOutlineEdit />}
            
            >
              Edit
            </Button>
          </HStack>
          <Box
            h="350px"
            w={{ base: 'full', md: '380px', lg: '400px', xl: '600px' }}
          >
            <Image src={img && img[index]} alt={title} boxSize="100%" />
          </Box>
          {/* mobile icon */}
          <HStack spacing={4} display={{ base: 'flex', md: 'none' }} mr="auto">
            <IconButton
              color="paint.teal"
              borderColor="paint.teal"
              variant="outline"
              size="lg"
              aria-label="Save"
              icon={<BsBookmarks />}
            />
            <IconButton
              color="paint.teal"
              borderColor="paint.teal"
              variant="outline"
              size="lg"
              aria-label="like"
              icon={<AiOutlineHeart />}
            />
            <IconButton
              color="paint.teal"
              borderColor="paint.teal"
              variant="outline"
              size="lg"
              aria-label="Share"
              icon={<AiOutlineShareAlt />}
            />
          </HStack>
          {/* desktop icon */}
          <VStack
            spacing={4}
            w={{ base: 'full', md: '280px', lg: '300px', xl: '300px' }}
            px={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <Button
              bg="paint.blue"
              variant="solid"
              w="220px"
              color="white"
              leftIcon={<HiOutlineDownload />}
            >
              Download
            </Button>
            <Button
              variant="outline"
              borderColor="paint.teal"
              color="paint.teal"
              w="220px"
              leftIcon={<AiOutlineEdit />}
              as={Link} 
              to={`/card-edit/${id}`}
            >
              Edit
            </Button>
            <Button
              variant="outline"
              borderColor="paint.teal"
              color="paint.teal"
              w="80px"
              size="sm"
              leftIcon={<BsBookmarks />}
            >
              Save
            </Button>
            <Button
              variant="outline"
              borderColor="paint.teal"
              color="paint.teal"
              w="80px"
              size="sm"
              leftIcon={<AiOutlineHeart />}
            >
              Like
            </Button>
            <Button
              variant="outline"
              borderColor="paint.teal"
              color="paint.teal"
              w="80px"
              size="sm"
              leftIcon={<AiOutlineShareAlt />}
            >
              Share
            </Button>
          </VStack>
        </Flex>

        <Flex mt="2rem" gap={10} direction={{ base: 'column', md: 'row' }}>
          <Box
            mr="auto"
            w={{ base: 'full', md: '380px', lg: '400px', xl: '600px' }}
          >
            <Text
              textStyle="pmini"
              mb={2}
              textAlign="start"
              textDecoration="underline"
            >
              Other views
            </Text>
            <Flex direction="row" align="center" gap={8}>
              {img?.map((item, i) => (
                <Box h="150px" w="auto" p={4} border="1px" key={i}>
                  <Image
                    src={item}
                    alt="yyy"
                    boxSize="100%"
                    onMouseEnter={() => setIndex(i)}
                  />
                </Box>
              ))}
            </Flex>
            <Box
              w={{ base: 'full', md: '280px', lg: '300px', xl: '300px' }}
              display={{ base: 'block', md: 'none' }}
              mt="2rem"
            >
              <Text
                textStyle="pmini"
                mb={2}
                textAlign="start"
                textDecoration="underline"
              >
                View similar designs
              </Text>
              <Flex direction={{ base: 'flex', md: 'column' }} gap={8}>
                {alreadyExists?.map(item => (
                  <Box
                    w={{ base: '125px', md: 'full' }}
                    as={Link}
                    to={`/card-details/${item.id}`}
                    key={item.id}
                  >
                    <Image src={item.img[1]} alt={item.title} />
                  </Box>
                ))}
              </Flex>
            </Box>
            <Text
              textStyle="pmini"
              mt="2rem"
              textAlign="start"
              textDecoration="underline"
            >
              Comments
            </Text>
            <HStack spacing={4} mt={4}>
              <Avatar as={Link} to="/#" src="thh" size="sm" name="John" />
              <Textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Add comment..."
                size="md"
              />
            </HStack>
          </Box>
          <Box
            w={{ base: 'full', md: '280px', lg: '300px', xl: '300px' }}
            display={{ base: 'none', md: 'block' }}
          >
            <Text
              textStyle="pmini"
              mb={2}
              textAlign="start"
              textDecoration="underline"
            >
              View similar designs
            </Text>
            <Flex direction={{ base: 'flex', md: 'column' }} gap={8}>
              {alreadyExists?.map(item => (
                <Box
                  w={{ base: '125px', md: 'full' }}
                  as={Link}
                  to={`/card-details/${item.id}`}
                  key={item.id}
                >
                  <Image src={item.img[1]} alt={item.title} />
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    
    </>
  );
}
