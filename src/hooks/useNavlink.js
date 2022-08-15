import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function useNavlink() {
  const location = useLocation();

  const handleNavButton = ({ to, name, ...rest }) => {
    const isActive = location.pathname === to;
    return (
      <NavLink to={to}>
        <Button
          variant={isActive ? 'ghost' : 'outline'}
          colorScheme={isActive ? '#4267B2' : ''}
          size={['sm', 'md', 'lg']}
          {...rest}
        >
          {name}
        </Button>
      </NavLink>
    );
  };
  const handleNavText = ({ to, name, ...rest }) => {
    return (
      <NavLink
        to={to}
        fontSize={['sm', 'md', 'lg']}
        {...rest}
        _hover={{ color: '#4267B2' }}
        className={navData =>
          navData.isActive && location.pathname !== '/' ? 'activeLink' : ''
        }
      >
        {name}
      </NavLink>
    );
  };
  return [handleNavButton, handleNavText];
}
