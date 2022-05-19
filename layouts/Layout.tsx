import { Box, ChakraProvider, Container, Flex, useDisclosure, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import CustomDrawer from '../components/CustomDrawer'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/userContext'

type Props = {
    children:any
}

function Layouts({children}: Props) {
    let { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen:false})
    const { authUser, loading,signOut_ } = useAuth();
  return (
    <>
    <Head>
        <title>todo</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex bgColor={'#080a0b'} height={"100vh"}>
        {authUser && <CustomDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}  />}
        <VStack w={'full'}>
            {authUser && <Navbar isOpen={isOpen} onClose={onClose} onOpen={onOpen} signOut={signOut_} />}
            <Box as="main"  w={"full"}  h={'full'} overflow={'auto'}   >
                <Container maxW={"1440px"} mx={"auto"} h={'full'} py={4} >
                    {children}
                </Container>
            </Box>  
        </VStack>
    </Flex>
    </>
  )
}

export default Layouts