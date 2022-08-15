import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';
import { Link, Outlet, useRoutes } from 'react-router-dom';
import Introduction from '../components/Documentation/Introduction';
import HowTos from '../components/Documentation/HowTos';
import bgText from '../utils/DocFile';

export default function Documentation() {
  const [active, setActive] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    if (active) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [active]);

  useEffect(() => {
    if (activeBtn) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [activeBtn]);

  //   const feature = [<Introduction />, <HowTos />];

  return (
    <>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        gap={8}
        overflow="hidden"
        py="4rem"
        px={4}
        maxW="container.lg"
        mx="auto"
      >
        <Box
          h="600px"
          overflow="auto"
          w="320px"
          borderLeft=".7px solid #9D9D9D"
          borderRight=".7px solid #9D9D9D"
          px={2}
        >
          <Accordion allowToggle mt="4rem">
            {bgText.map(item => (
              <AccordionItem key={item.id}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {item.id}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    textStyle="pmini"
                    cursor="pointer"
                    type="button"
                    onClick={() => setActive(true)}
                    as={Link}
                    to={`/${item.path}`}
                  >
                    {item.info}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Box h="70vh" overflow="auto" w="full">
          {/* {active && (
            <>
              {feature.map(item => (
                <>{item}</>
              ))}
            </>
          )} */}
          <Introduction />
          {/* <HowTos active={active} /> */}
        </Box>
      </Flex>
      <Outlet />
    </>
  );
}
