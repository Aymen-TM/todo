import { Box, Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import SideBar from '../components/SideDrawer'



const Home: NextPage = () => {
  
  return (
      <Box bgColor={'#080a0b'} height={"100vh"}>
        <Head>
          <title>todo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <SideBar />
        
      </Box>
  )
}

export default Home
