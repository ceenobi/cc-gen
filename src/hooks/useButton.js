import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Buttonz({ to, color, variant, bg, name, ...rest }) {
  return (
    <Link to={to}>
      <Button
        variant={variant}
        bg={bg}
        color={color}
        size={['md', 'lg']}
        // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}
