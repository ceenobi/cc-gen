import React from 'react';
import { Box } from '@chakra-ui/react';
//import { ColorModeSwitcher } from '../ColorModeSwitcher';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
      {/* <ColorModeSwitcher
        justifySelf="flex-end"
        pos="absolute"
        bottom="80%"
        left="90%"
      /> */}
      <Footer />
    </Box>
  );
}
