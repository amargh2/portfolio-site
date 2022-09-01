import {Flex, Text, Center, Link, Icon, Heading} from '@chakra-ui/react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { AiFillLinkedin } from "react-icons/ai"
import { FaStrava } from 'react-icons/fa'

const Footer = () => {
  const properties = {
    gitHubLink: 'https://www.github.com/amargh2',
    email: 'not sure i want that in here yet',
    address: 'Chicago, IL',
    linkedInLink:'https://www.linkedin.com/in/anthony-margherio-26b26850/'
  }

  return (
      <Flex justify='center' direction='column' bgImage='/sunsetsky.jpg' py='1rem' >
        <Center>
          <Heading size='md' pb='1rem'>Let's connect!</Heading>
        </Center>
        <Center>
          <Flex>
            <Link href={properties.gitHubLink}><Icon w={8} h={8} as={FaGithub}/></Link>
            <Link href={properties.linkedInLink}><Icon h={8} w={8} as={AiFillLinkedin}/></Link>
          </Flex>
        </Center>
        <Center>
          <Flex fontWeight='semibold' fontSize='lg'>{properties.address}</Flex>
        </Center>
      </Flex>
    
  )
}

export default Footer