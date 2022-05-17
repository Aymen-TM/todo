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
  Image,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { useCustomColorMode } from '../../contexts/colorContext'
import { PasswordField } from './PasswordField'
import Htodo from '../../public/Htodo.png'




type Props = {}

function SignUp({}: Props) {
  const {bg,textColor} = useCustomColorMode()
  return (
    <Container maxW="lg" py={{ base: '12' }} px={{ base: '0', sm: '8' }} bgColor={bg} rounded={"md"}>
    <Stack spacing="8">
      <Stack>
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'md' })} color={textColor}>
            Create your account here
          </Heading>
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
            <HStack>
            <FormControl color={textColor}>
              <FormLabel htmlFor="FirstName" >First Name</FormLabel>
              <Input id="FirstName" type="text" />
            </FormControl>
            <FormControl color={textColor}>
              <FormLabel htmlFor="LastName" >Last Name</FormLabel>
              <Input id="LastName" type="text" />
            </FormControl>
            </HStack>
            <FormControl color={textColor}>
              <FormLabel htmlFor="email" >Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField color={textColor} label={"Password"} />
            <PasswordField color={textColor} label={"Password Confirmation"} />
          </Stack>
          <Button variant="solid" >SIGN UP</Button>
        </Stack>
      </Box>
    
    </Stack>
  </Container>
  )
}

export default SignUp
