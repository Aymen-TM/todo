import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Login from '../components/Login/Login'
import { useAuth } from '../contexts/userContext';

type Props = {}

function Signin({}: Props) {

  const { authUser, loading,signOut_ } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if(authUser != null){
      signOut_()
    }
  }, [])

  return (
  <>
          <Flex width={'100%'} height={'100%'}>
              <Login />
          </Flex>
        </>
  )
}

export default Signin