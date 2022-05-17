import { Box, Checkbox, HStack, Tag, TagLabel, TagLeftIcon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {BsTag} from 'react-icons/bs'

type Props = {}

function Task({}: Props) {
  return (
    <Box px={5} py={5} maxW={'sm'} bgColor={'#1a1c1e'} color={'white'} rounded={"lg"}>
        <Text as={"h5"} fontSize={'sm'} display={'flex'} justifyContent={'start'} alignItems={'center'} gap={4}>
          <Checkbox defaultChecked/>
            Sun Feb 01 1998
        </Text>
        <VStack alignItems={'start'} ml={8}>
          <Text as={"h3"} fontWeight={"semibold"} fontSize={"lg"} >Fix Login and register form design</Text>

          <HStack mt={4}  >
          <Tag size={"lg"} variant='subtle' colorScheme='cyan' justifyContent={'center'} alignItems={'center'}>
            <TagLeftIcon   as={BsTag} />
            <TagLabel>Important</TagLabel>
          </Tag>
        </HStack>
        </VStack>
        
    </Box>
  )
}

export default Task