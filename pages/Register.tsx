import {Flex} from '@chakra-ui/react'
import React from 'react'
import SignUp from '../components/Signup/SignUp'
type Props = {}

function Register({}: Props) {3
  
  return (
        <>
          <Flex width={'100%'} height={'100%'}>
              <SignUp />
          </Flex>
        </>
  )
}

export default Register