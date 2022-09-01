import { SimpleGrid, Link, Icon, Box, Flex, Heading, Center, Image} from "@chakra-ui/react";
import {FiExternalLink} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import projects from './projectlist'

const ProjectDisplay = () => {

  const addSpecialLinks = (project) => {
    if (project.name === 'Battleship' || project.name === 'Crystal Shop') {
      return (
        <Link href={project.link}><Icon as={FiExternalLink} h={6} w={6}/></Link>)
    }
   else return
  }

  
  const processedProjects = projects.map(project => {
    return (<Flex _hover={{borderColor:'cyan.100'}} background='white' justify='center' direction='column' py='1rem' px='1rem' rounded='md' mx={{sm:'2rem', md:'0', lg:'0'}} border='solid 5px white' shadow='lg'>
              <Center>
                <Image src={project.imgURL} h='20rem' rounded='lg' objectFit='contain' alt='picture of the thing'/>
              </Center>
          <Flex justify='space-between' pt='2rem'>
            <Flex>
              <Heading size='md'>{project.name}</Heading>
            </Flex>
            <Flex>
              {addSpecialLinks(project)}
              <Link href={project.gitHubLink}><Icon as={FaGithub} h={6} w={6}/></Link>
            </Flex>
          </Flex>
          <Box fontWeight='medium' pt='20px'>{project.description}</Box>
          </Flex>)
  })

  return (
    <Flex justify='center' direction='column' pb='2rem'>
      <SimpleGrid pt='1rem' mx={{base:'', md:'2rem', lg:'4rem'}} columns={{sm:1, md:2, lg:3}} spacing={5}>
        {processedProjects}
      </SimpleGrid>
    </Flex>
  )


}

export default ProjectDisplay