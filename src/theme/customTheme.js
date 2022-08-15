import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const theme = extendTheme(
  {
    colors: {
      paint: {
        teal: '#6B817B',
        blue: '#4267B2',
        pink: '#FA5396',
        grey: '#F9F9F9',
        white: '#fff',
        typo: '#5E5E5E',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
      },
    },
    fonts: {
      heading: `'Lato', sans-serif`,
      body: `'Lato', sans-serif`,
    },
    p: {
      color: '#3F3F3F',
      fontWeight: '300',
    },

    styles: {
      global: props => ({
        'html, body': {
          // bg: 'blackAlpha.700',
          // lineHeight: 'tall',
          // color: 'whiteAlpha.800',
        },
        '::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
        '.activeLink': {
          outline: 'none',
          borderBottom: '2px solid #4299E1',
          fontSize: '18px',
          color: '#4267B2',
          _hover: {
            color: '#4267B2',
          },
        },
        '.page-item.active': {
          bg: 'paint.blue',
          rounded: 'sm',
          color: '#fff',
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          // fontSize: 'xl',
          fontWeight: 'medium',
          _hover: {
            bg: '#4267B2',
          },
        },
        variants: {
          'with-shadow': {
            border: '1px solid #A0AEC0',
            w: 'full',
            h: '56px',
            color: '#5E5E5E',
            _hover: {
              bg: '#4267B2',
              color: 'white',
            },
          },
          'big-button': {
            w: ['12.875em', '19.875em'],
            h: '3.25em',
            bg: '#4267B2',
            borderRadius: '0.5em',
            color: '#FFFFFF',
          },
          'small-button': {
            bg: '#4267B2',
            borderRadius: '0.5em',
            color: '#FFFFFF',
          },
        },
      },
    },
    textStyles: {
      p: {
        fontSize: '1.75em',
        fontWeight: 'medium',
        lineHeight: '2.2em',
      },
      psmall: {
        fontSize: '1.5em',
        fontWeight: '600',
        lineHeight: '120%',
        color: '#3F3F3F',
      },
      pmini: {
        fontSize: '1em',
        fontWeight: '400',
        lineHeight: '150%',
        color: '#5E5E5E',
      },
      h2: {
        color: '#262626',
        fontWeight: '500',
        fontSize: '4em',
        lineHeight: '4.8em',
      },
      h3: {
        color: '#262626',
        fontWeight: 'bold',
      },
      note: {
        color: '#5E5E5E',
        fontWeight: '400',
        fontSize: '1em',
        lineHeight: '2.25em',
      },
    },
  },
  { breakpoints }
);

export default theme;
