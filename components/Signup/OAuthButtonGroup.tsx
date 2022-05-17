import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { useCustomColorMode } from '../../contexts/colorContext'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'

const providers = [
  { name: 'Google', icon: <GoogleIcon boxSize="5" /> },
  { name: 'Twitter', icon: <TwitterIcon boxSize="5" /> },
  { name: 'GitHub', icon: <GitHubIcon boxSize="5" /> },
]

type Props ={

}

function OAuthButtonGroup(props:Props) {
  const {bg,textColor,btnColor} = useCustomColorMode()
  return(
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full" bg={btnColor} >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
  )
}
export default OAuthButtonGroup;