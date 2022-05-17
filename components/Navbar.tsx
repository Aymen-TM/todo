import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {HiMenuAlt3} from 'react-icons/hi'

type Props = {
  onOpen:Function,
  onClose:Function,
  isOpen:Boolean
}

function Navbar({onOpen,onClose,isOpen}: Props) {
  
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
            <HStack alignItems={'center'}>
              <IconButton
              variant='outline'
              color={'gray.100'}
              borderColor={'gray.100'}
              aria-label='notification'
              size={"lg"}
              cursor={'pointer'}
              icon={<IoMdNotificationsOutline />}
              _hover={{backgroundColor:'none'}}
              _focus={{outline:'none'}}
               /> 
              <Avatar
                    size={'md'}
                    rounded={"md"}
                    name={"Mus"}
                    ml={4}
                  />

            </HStack>
          </Flex>
        </Box>
      </>
    );
}

export default Navbar