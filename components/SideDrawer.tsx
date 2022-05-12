import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Icon, Input, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, {Key, useRef } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiAlertCircle} from 'react-icons/fi'
import {MdOutlineDoneAll} from 'react-icons/md'
import {FaRegTrashAlt} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'

type Props = {}
interface NavButton {
  nav :String|any,
  icon:React.ReactElement<any, string>
} 

const SideDrawer = (props: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLDivElement>(null)
    
    /* list of link buttons */
    let navBtn :NavButton[] = [
      {
        nav:'Important',
        icon:<FiAlertCircle fontSize={"1.3rem"} />
      },
      {
        nav:'Completed',
        icon:<MdOutlineDoneAll  fontSize={"1.3rem"}/>
      },
      {
        nav:'Removed',
        icon:<FaRegTrashAlt  fontSize={"1.3rem"}/>
      },
      {
        nav:'Due Soon',
        icon:<BsThreeDots  fontSize={"1.3rem"}/>
      }
    ]
    return (
        <>
          <Drawer
            isOpen={true}
            placement='left'
            onClose={onClose}
            
          >
            <DrawerContent bgColor={'#1a1c1e'}>
              <DrawerHeader>
                  <Button _hover={{bgColor:'orange.200'}} _active={{bgColor:'orange.200'}} bgColor={'orange.300'} isFullWidth height={'14'} leftIcon={<AiOutlinePlus />}>
                      New Task
                  </Button>
              </DrawerHeader>
    
              <DrawerBody>
                <VStack spacing={2} >
                {
                  navBtn.map((btn)=>(
                    <Button key={btn.nav}  _focus={{outline:'none'}} color={'whiteAlpha.700'} size={'sm'} justifyContent={'start'} p={2} isFullWidth variant={'link'} leftIcon={btn.icon} >{btn.nav}</Button>
                  ))
                }
                </VStack>
                <HStack mt={4} color={'whiteAlpha.700'} width={'100%'} justifyContent={'space-between'}>
                  <Text>Labels</Text>
                  <Icon as={BsThreeDots} />
                </HStack>
                <VStack>
                  <Button _focus={{outline:'none'}}  color={'whiteAlpha.700'} justifyContent={'start'} p={2} isFullWidth leftIcon={<AiOutlinePlusCircle fontSize={"1.3rem"}/>} variant={'link'}>Add lable</Button>
                </VStack>
              </DrawerBody>
    
              <DrawerFooter>

              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
}

export default SideDrawer