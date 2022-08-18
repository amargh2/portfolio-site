import { Flex } from "@chakra-ui/react"
import {Center} from '@chakra-ui/react'

const Footer = () => {
  const properties = {
    gitHubLink: 'github.com/amargh2',
    email: 'not sure i want that in here yet',
    address: 'Chicago, IL'
  }

  return (
    <Center bg='gray.100' shadow='lg'>
      <Flex justifyContent='center' direction='column' py='2rem' >
        Let's connect!
        <div>
          {properties.gitHubLink}
          {properties.email}
          {properties.address}
        </div>
      </Flex>
    </Center>
    
  )
}

export default Footer