import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import {BiLogOut} from 'react-icons/bi'

type Props = {
  name:string,
  signOut:Function
}


function MenuButtons({name,signOut}: Props) {
  const router = useRouter();
  return (
    <Menu>
    <MenuButton
      as={Avatar}
      aria-label='Options'
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      rounded={'md'}
      cursor={'pointer'}
    />
    <MenuList>
      <MenuItem icon={<BiLogOut />} onClick={()=>signOut().finally(()=>router.push('/Signin'))}>
        {name}
      </MenuItem>
    </MenuList>
  </Menu>
  )
}

export default MenuButtons