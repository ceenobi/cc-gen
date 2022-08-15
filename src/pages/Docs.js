import React from 'react'
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
import { Link , Outlet, useRoutes} from 'react-router-dom';
import Documentation from './Documentation';
import Introduction from '../components/Documentation/Introduction';
import HowTos from '../components/Documentation/HowTos';

export default function Docs() {
     let element = useRoutes([
       {
         path: '/',
         element: <Route1 />,
         
       },
       {
         path: 'route2',
         element: <Route2 />,
       },
       {
         path: 'route3',
         element: <Route3 />,
         children: [
           { path: 'child1', element: <Child1 /> },
           { path: 'child2', element: <Child2 /> },
         ],
       },
       { path: '*', element: <NotFound /> },
     ]);

     const bgText = [
       {
         id: 'Introduction',
         info: 'Introduction to Card vo',
         path: 'introductiontoCardvo',
       },
       { id: 'Hello', info: 'Introduction to hwklll vo', path: 'howtos' },
     ];
  return (
    <Box>
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
          {element}
        </Box>
      </Flex>
    </Box>
  );
}

const Route1 = () => <Introduction/>;
const Route2 = () => <HowTos />;
const Route3 = () => {
  return (
    <div>
      <h1>Route3</h1>
      <ul>
        <li>
          <Link to="child1">Child1</Link>
        </li>
        <li>
          <Link to="child2">Child2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
const Child1 = () => <h2>Child1</h2>;
const Child2 = () => <h2>Child2</h2>;
const NotFound = () => <h1>NotFound</h1>;
