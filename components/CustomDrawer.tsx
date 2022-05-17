import { Box, Button, HStack, Icon, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiAlertCircle} from 'react-icons/fi'
import {MdOutlineDoneAll} from 'react-icons/md'
import {FaRegTrashAlt} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Link from 'next/link'

type Props = {
    isOpen:Boolean,
    onClose:Function,
    onOpen:Function
}

interface NavButton {
    nav :String|any,
    icon:React.ReactElement<any, string>
  } 

function CustomDrawer({isOpen,onClose,onOpen}: Props) {
        const drawer_open_breakpoint = useBreakpointValue({ base: false, md: true })

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

         let navBtnClick = (isOpen:Boolean)=>{
           if(isOpen){
             onClose()
           }else{
             onOpen()
           }
          }

  return (
    <>
   {(isOpen  || drawer_open_breakpoint) &&  <Box bgColor={'#1a1c1e'} p={4} h={'full'} w={'full'} zIndex={2} maxW={{base:'200px',md:'300px'}} top={0} left={0} position={{base:'fixed',md:'static'}}   >
        <Button _hover={{bgColor:'orange.200'}} _active={{bgColor:'orange.200'}} bgColor={'orange.300'} isFullWidth height={'14'} leftIcon={<AiOutlinePlus />}>
             New Task
        </Button>
        <VStack spacing={2} mt={5} >
                {
                  navBtn.map((btn)=>(
                    <Link href={'/test'}>
                      <Button key={btn.nav} onClick={()=>navBtnClick(isOpen)}  _focus={{outline:'none'}} color={'whiteAlpha.700'} size={'sm'} justifyContent={'start'} p={2} isFullWidth variant={'link'} leftIcon={btn.icon} >{btn.nav}</Button>
                    </Link>
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
    </Box>}
    </>
  )
}

export default CustomDrawer