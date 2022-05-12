import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthUserProvider } from '../contexts/userContext'


function MyApp({ Component, pageProps }: AppProps) {
  
  return <ChakraProvider>
    <AuthUserProvider>
    <Component {...pageProps} />
    </AuthUserProvider>
  </ChakraProvider>
   
}

export default MyApp
