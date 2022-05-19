import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { useRouter } from 'next/router'
import * as React from 'react'
import {useState} from 'react'
import { useCustomColorMode } from '../../contexts/colorContext'
import { useAuth } from '../../contexts/userContext'
import { db } from '../../firebase'
import { PasswordField } from './PasswordField'




type Props = {}

function SignUp({}: Props) {
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [passwordOne, setPasswordOne] = useState<string>("");
  const [passwordTwo, setPasswordTwo] = useState<string>("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {bg,textColor} = useCustomColorMode()


  const {createUser_WithEmailAndPassword} = useAuth()

  const onSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if(passwordOne === passwordTwo)
      createUser_WithEmailAndPassword(email, passwordOne).then(authUser => {
        console.log("Success. The user is created in Firebase")
        console.log(authUser)
        const userRef = addDoc(collection(db,'users'),{
          id:authUser.user.uid,
          email:authUser.user.email,
          username:firstname+' '+lastname,
          timestamp:Timestamp.now()
        })
        
      }).finally(()=>{
        router.push("/");
      })
      .catch(error => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message)
      });
    else
      setError("Password do not match")
    event.preventDefault();
  };

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
              <Input id="FirstName" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
            </FormControl>
            <FormControl color={textColor}>
              <FormLabel htmlFor="LastName" >Last Name</FormLabel>
              <Input id="LastName" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
            </FormControl>
            </HStack>
            <FormControl color={textColor}>
              <FormLabel htmlFor="email" >Email</FormLabel>
              <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <PasswordField color={textColor} label={"Password"} onChange={(e: { target: { value: React.SetStateAction<string> } })=>setPasswordOne(e.target.value)} value={passwordOne} />
            <PasswordField color={textColor} label={"Password Confirmation"} onChange={(e: { target: { value: React.SetStateAction<string> } })=>setPasswordTwo(e.target.value)} value={passwordTwo} />
          </Stack>
          <Button variant="solid" onClick={(e)=>onSubmit(e)} >SIGN UP</Button>
        </Stack>
      </Box>
    </Stack>
  </Container>
  )
}

export default SignUp
