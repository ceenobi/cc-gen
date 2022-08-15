import React, { useState, useId } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
  Center,
  VStack,
  Button,
  FormControl,
  Checkbox,
  chakra,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from '../utils/InputTypes';
import registerOptions from '../utils/InputValidation';

export default function Signup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ID = useId();

  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const handleError = errors => {};

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Box maxW="container.xl" mx="auto" px={4}>
      <Flex justify="space-between" gap={6}>
        <Flex
          direction="column"
          justify="center"
          w={{ base: 'full', md: '350px' }}
          display={{ base: 'none', md: 'flex' }}
          mx="auto"
          pos="relative"
        >
          {/* <HStack
            spacing={2}
            as={Link}
            to="/"
            display={{ base: 'none', xl: 'flex' }}
            pos="absolute"
            top="10%"
          >
            <Icon as={BiArrowBack} boxSize="20px" />
            <Text fontSize={['md', 'lg']}>Back</Text>
          </HStack> */}
          <Box h="400px" w="350px">
            <Image
              src="https://res.cloudinary.com/ceenobi/image/upload/v1659702749/samples/zuri/pana_bv7etz.png"
              alt="signin"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
          <Text fontSize={['md', 'lg']} mt="2rem" color="#5E5E5E">
            Do more than exploring. Create, edit, save, and share designs with
            friends.
          </Text>
        </Flex>
        <Center height="auto" display={{ base: 'none', md: 'block' }}>
          <Divider orientation="vertical" border="1px" variant="solid" />
        </Center>
        <Flex
          direction="column"
          justify="center"
          mt={{ base: '6rem', md: '7rem' }}
          w={{ base: 'full', md: '350px' }}
          mx="auto"
        >
          <VStack spacing={4}>
            <Heading textStyle="h2">Create your account</Heading>
            <Text fontSize={['lg', 'xl']} fontWeight="medium" textStyle="pmini">
              Enjoy full access to{' '}
              <Box as="span" color="#2C4577" fontWeight="bold">
                200+
              </Box>{' '}
              Credit Card designs.{' '}
              <Box as="span" color="#2C4577" fontWeight="bold">
                Free
              </Box>{' '}
              for all to use.
            </Text>
          </VStack>
          <VStack spacing={4} mt="2rem">
            <Button variant="with-shadow" leftIcon={<FcGoogle />}>
              Sign up with Google
            </Button>
            <Button variant="with-shadow" leftIcon={<FaFacebookF />}>
              Sign up with Facebook
            </Button>
          </VStack>
          <Flex align="center" gap={2} justify="center" mt="2rem">
            <Divider
              orientation="horizontal"
              w="130px"
              border="1px"
              variant="solid"
            />
            <Text color="#5E5E5E">OR</Text>
            <Divider
              orientation="horizontal"
              w="130px"
              border="1px"
              variant="solid"
            />
          </Flex>
          <VStack spacing={4} py={10} mx="auto">
            <FormProvider {...methods}>{/* errors */}</FormProvider>
            <chakra.form onSubmit={handleSubmit(onSubmit, handleError)}>
              <FormControl>
                <FormInput
                  name="fullname"
                  placeholder="Last and first name"
                  type="text"
                  label="Full name"
                  required
                  {...register('fullname', registerOptions.fullname)}
                />
                {errors?.fullname && (
                  <Box as="span" color="red.400">
                    {errors.fullname.message}
                  </Box>
                )}
              </FormControl>
              <FormControl>
                <FormInput
                  name="email"
                  placeholder="email@example.com"
                  type="email"
                  label="EMAIL"
                  required
                  {...register('email', registerOptions.email)}
                />
                {errors?.email && (
                  <Box as="span" color="red.400">
                    {errors.email.message}
                  </Box>
                )}
              </FormControl>
              <FormControl>
                <FormInput
                  name="password"
                  type="password"
                  label="PASSWORD"
                  placeholder="password"
                  required
                  {...register('password', registerOptions.password)}
                />
                {errors?.password && (
                  <Box as="span" color="red.400">
                    {errors.password.message}
                  </Box>
                )}
              </FormControl>
              <Flex justify="space-between" mb={8}>
                <Checkbox defaultChecked id={`${ID}-subscribe`} color="#5E5E5E">
                  Send me emails relating to financial advice?
                </Checkbox>
              </Flex>
              <Flex justify="space-between" mb={8}>
                <Checkbox
                  defaultChecked
                  id={`${ID}-subscribeCard`}
                  color="#5E5E5E"
                >
                  I have read and agreed to
                  <Link to="/#">
                    <Box as="span" color="#4267B2">
                      &nbsp;Cardvo Terms of use and privacy policy.
                    </Box>
                  </Link>
                </Checkbox>
              </Flex>
              <Button
                variant="with-shadow"
                bg="#4267B2"
                isLoading={isSubmitting}
                type="submit"
                color="white"
              >
                Sign up
              </Button>
            </chakra.form>
            <Text textStyle="pmini">
              Already have an account? &nbsp;
              <Link to="/signin">
                <Box as="span" color="#4267B2" cursor="pointer">
                  Sign in
                </Box>
              </Link>
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
