import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ChakraProvider} from '@chakra-ui/react'
import { AuthUserProvider } from '../contexts/userContext'
import { CustomColorModeProvider } from '../contexts/colorContext'
import theme from '../theme'
import Layouts from '../layouts/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  
  return <ChakraProvider theme={theme}>
    <CustomColorModeProvider>
      <AuthUserProvider>
        <Layouts>
            <Component {...pageProps} />
        </Layouts>
      </AuthUserProvider>
    </CustomColorModeProvider>
  </ChakraProvider>
  
   
}

export default MyApp
