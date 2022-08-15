import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from './components/Layout';
import theme from './theme/customTheme';
import AppRouter from './Routes/AppRouter';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AppRouter/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
