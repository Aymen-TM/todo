import { useColorModeValue } from '@chakra-ui/react';
import { createContext, useContext } from 'react'


  const light_dark_Context = createContext({
    bg : "red",
    textColor:'red',
    btnColor:'red'
  });

  export function CustomColorModeProvider({ children }:any) {
      
  const bg = useColorModeValue('#1a1c1e', 'white')
  const color = useColorModeValue('orange.200', 'gray.100')
  const btnColor = useColorModeValue('#e2e8f0', 'gray.100')

    let mode = {
        bg: bg,
        textColor: color,
        btnColor:btnColor
    }
    return <light_dark_Context.Provider value={mode}>{children}</light_dark_Context.Provider>;
  }
  // custom hook to use the authUserContext and access authUser and loading
export const useCustomColorMode = () => useContext(light_dark_Context);