import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useCustomColorMode } from '../../contexts/colorContext'
import  OAuthButtonGroup  from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'




type Props = {}

function Login({}: Props) {
  const router = useRouter();
  const {bg,textColor} = useCustomColorMode()
  return (
    <Container maxW="lg" py={{ base: '12' }} px={{ base: '0', sm: '8' }} bgColor={bg} rounded={"md"}>
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })} color={textColor}>
            Log in to your account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color={textColor}>Don't have an account?</Text>
            <Button variant="link" colorScheme="blue" onClick={()=>router.push('/Register')}>
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl color={textColor}>
              <FormLabel htmlFor="email" >Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField color={textColor} />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked color={textColor}>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm" >
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button variant="solid" >SIGN IN</Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap"  color={textColor}>
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  )
}

export default Login