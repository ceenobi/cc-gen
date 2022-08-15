import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  VStack,
  Text,
  HStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  chakra,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiArrowBack, BiEdit } from 'react-icons/bi';
import { VscSymbolColor } from 'react-icons/vsc';
import { RiImageAddLine } from 'react-icons/ri';

import useFetch from '../hooks/useFetch';
import { useToastHook } from '../hooks/useToast';
import Loader from '../utils/Loader';

export default function EditCard() {
  const [value, setValue] = useState([]);
  const [wrongFileType, setWrongFileType] = useState(false);
  const [imageAsset, setImageAsset] = useState();
  const [design, setDesign] = useState([]);
  const [bgCard, setBgCard] = useState();
  const [text, setText] = useState('');
  const { edit_id } = useParams();
  const { navigate } = useNavigate();
  const [handleToast] = useToastHook();
  const { error, data, loading } = useFetch(
    `http://localhost:5000/data/${edit_id}`
  );

  const { img, category, title, id } = data;

  if (error) {
    handleToast({ message: error.message, status: 'error' });
  }
  if (loading) return <Loader />;

  console.log('value', value);

  const addCard = async design => {
    const res = await fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(design),
    });

    const data = await res.json();

    setDesign([...design, data]);
  };

  const uploadImage = async e => {
    const selectedFile = e.target.files[0];
    const fileTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (fileTypes.includes(selectedFile.type)) {
      setWrongFileType(false);
      const formData = new FormData();
    }
  };

  const colors = [
    '#C21010',
    '#E9DAC1',
    '#21E1E1',
    '#876445',
    '#ECB390',
    '#1A4D2E',
    '#816797',
    '#F87474',
  ];

  console.log('colors', colors);

  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
      justify="space-between"
      gap={8}
      overflow="hidden"
      py='4rem'
      px={4}
      maxW="container.lg"
      mx="auto"
    >
      <Box
        w={{ base: '320px', md: '300px' }}
        h="80vh"
        overflowX="auto"
        borderLeft=".7px solid #9D9D9D"
        borderRight=".7px solid #9D9D9D"
        px={2}
      >
        <HStack
          spacing={3}
          display={{ base: 'none', xl: 'flex' }}
          onClick={() => navigate(-1)}
          cursor="pointer"
          as="button"
          top="0%"
          borderBottom=".7px solid #9D9D9D"
          w="full"
          py={3}
        >
          <Icon as={BiArrowBack} boxSize="20px" />
          <Text fontSize='md'>Edit properties</Text>
        </HStack>
        <chakra.form mt="5rem">
          <Accordion allowToggle mt="4rem">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Flex gap={1} align="center">
                      <Icon as={VscSymbolColor} />
                      Color
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <Flex gap={2} flexWrap="wrap">
                    {colors.map((color, i) => (
                      <Box
                        value={value}
                        key={i}
                        onClick={() => setValue(color)}
                        rounded="xl"
                        boxSize="20px"
                        bg={color}
                        cursor="pointer"
                      />
                    ))}
                  </Flex>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Flex gap={1} align="center">
                      <Icon as={RiImageAddLine} />
                      Image
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <Flex gap={2} flexWrap="wrap">
                    <Input
                      variant="unstyled"
                      py={3}
                      type="file"
                      cursor="pointer"
                      name="upload-image"
                      onChange={e => uploadImage(e)}
                    />
                  </Flex>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Flex gap={1} align="center">
                      <Icon as={BiEdit} />
                      Text
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box>
                  <Flex gap={2} flexWrap="wrap">
                    <Input
                      placeholder="change design text on card"
                      py={2}
                      value={text}
                      type="text"
                      cursor="pointer"
                      name="text"
                      border="1px solid #4267B2"
                      _placeholder={{ color: 'blackAlpha.600' }}
                      bg="white"
                      variant="outline"
                      onChange={e => setText(e.target.value)}
                    />
                  </Flex>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Flex direction="row" align="center" mt="2rem" gap={8}>
            {img?.map((item, i) => (
              <Box h="100px" w="auto" p={4} border="1px" key={i}>
                <Image
                  src={item}
                  alt="yyy"
                  boxSize="100%"
                  //onMouseEnter={() => setIndex(i)}
                />
              </Box>
            ))}
          </Flex>
          <VStack spacing={3} mt="2rem">
            <Button bg="paint.blue" variant="solid" color="white" w="full">
              Save and add to my collection
            </Button>
            <Button
              variant="outline"
              borderColor="paint.blue"
              color="paint.blue"
              w="full"
            >
              Download
            </Button>
          </VStack>
        </chakra.form>
      </Box>
      <Flex
        align="center"
        justify="center"
        border=".7px solid #9D9D9D"
        w={{ base: 'full', md: '480px', lg: '500px', xl: '600px' }}
        h={{ base: '400px', md: '600px' }}
        p={4}
        mt="2rem"
      >
        <Box
          h="350px"
          w={{ base: 'full', md: '380px', lg: '400px', xl: '500px' }}
          p={4}
          bg={value ? value : ''}
        >
          <Image src={img?.[0]} alt={title} boxSize="100%" />
        </Box>
      </Flex>
    </Flex>
  );
}
