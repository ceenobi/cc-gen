import { Box, CloseButton, Flex, Text, Icon, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { FiHome, FiCompass } from 'react-icons/fi';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';
import { GrContactInfo } from 'react-icons/gr';

const LinkItems = [
  { label: 'Home', icon: FiHome, href: '/' },
  { label: 'Explore', icon: FiCompass, href: '/explore' },
  { label: 'About us', icon: ImOffice, href: '/about' },
  { label: 'Contact us', icon: GrContactInfo, href: '/contact' },
  { label: 'Sign in', icon: FaUser, href: '/signin' },
  { label: 'Sign up', icon: FaUserPlus, href: '/signup' },
];

export default function Sidebar({ isOpen, onClose, ...rest }) {
  const navigate = useNavigate();

  const navigateToPath = (type, state) => {
    navigate(`${type}`, { state });
    if (isOpen) onClose();
  };

  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Heading as="h2" size={['lg', 'xl']}>
          Card Vo
        </Heading>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <Flex
          key={i}
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: '#4267B2',
            color: 'white',
          }}
        >
          {link.icon && (
            <Icon
              mr="4"
              fontSize="20"
              _groupHover={{
                color: 'white',
              }}
              as={link.icon}
            />
          )}
          <Text
            onClick={() => navigateToPath(link.href, link.label)}
            color="#3F3F3F"
            fontSize="1.2rem"
          >
            {link.label}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}
