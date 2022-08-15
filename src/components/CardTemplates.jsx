import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CardTemplates({ result, loading, error, data }) {
  const filteredData = data?.filter(res => {
    const filter = res.category === result;
    if (result === '') {
      return res;
    } else {
      return res.category.toLowerCase().includes(result) || filter;
    }
  });

  return (
    <>
      <Heading as="h2" size="md" px={2} mr="auto" mb="2rem">
        All free card designs
      </Heading>
      <Box px={4}>
        {error}
        {loading}
        <Flex
          justify="space-evenly"
          align="center"
          gap={10}
          direction={{ base: 'column', md: 'row' }}
          mb="2rem"
          mx="auto"
          flexWrap="wrap"
        >
          {filteredData.map(item => {
            const { id, img, title } = item;
            return (
              <Box
                as={Link}
                to={`/card-details/${id}`}
                key={id}
                w={{ base: 'full', md: '270px', lg: '300px', xl: '320px' }}
              >
                <Image src={img[0]} alt={title} objectFit="contain" />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}
