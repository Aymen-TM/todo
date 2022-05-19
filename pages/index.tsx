import { Box, Flex, Grid, GridItem, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Task from '../components/Task'
import { useAuth } from '../contexts/userContext'



const Home: NextPage = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (authUser == null && !loading){
      router.push('/Signin')
    }else{
      return;
    }
      
  }, [authUser,loading])


  return (
    <>
        <SimpleGrid columns={{base:1,lg:3}} spacing={10}>
          
        </SimpleGrid>
    </>
  )
}

export default Home
