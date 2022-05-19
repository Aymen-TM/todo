import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi'
import { useCustomColorMode } from '../contexts/colorContext';
import { useAuth } from '../contexts/userContext';
import { db } from '../firebase';
import MenuButtons from './MenuButtons';

type Props = {
  onOpen:Function,
  onClose:Function,
  isOpen:Boolean,
  signOut:Function
}

function Navbar({onOpen,onClose,isOpen,signOut}: Props) {

  const {textColor} = useCustomColorMode()
  const { authUser} = useAuth();
  const [name,setName] = useState<string>()
  

  const getUserData =async () => {
    const user = query(collection(db, "users"), where("id", "==", authUser.uid));
    const querySnapshot = await getDocs(user);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setName(doc.data().username)
    });
  }
    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
      getUserData()
    }, [name])
  

  
    return (
      <>
        <Box  py={2}  px={4} w={'full'}  h={'20'}>
          <Flex h={16}  >
            <HStack  alignItems={'center'} flexGrow={1}>
            <IconButton
              display={{base:'flex',md:'none'}}
              variant='outline'
              colorScheme='orange'
              aria-label='responsive menu button'
              size={"lg"}
              cursor={'pointer'}
              onClick={()=>isOpen ? onClose() : onOpen()}
              icon={<HiMenuAlt3 />}
               /> 
              <Text  color={"orange.300"} fontWeight={"semibold"} fontSize={'3xl'} >ToDo</Text>
            </HStack>
            <HStack alignItems={'center'} >
              <Text as={'h3'} fontSize={'2xl'} color={textColor}>{name}</Text>
              <MenuButtons name={'test'} signOut={signOut} />
            </HStack>
          </Flex>
        </Box>
      </>
    );
}

export default Navbar