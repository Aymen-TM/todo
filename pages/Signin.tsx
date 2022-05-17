import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Login/Login'

type Props = {}

function Signin({}: Props) {
  return (
  <>
          <Flex width={'100%'} height={'100%'}>
              <Login />
          </Flex>
        </>
  )
}

export default Signin