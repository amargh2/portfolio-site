import { Box } from '@chakra-ui/react';
import {Image} from '@chakra-ui/react';
import {Flex} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import {SimpleGrid} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import {Center} from '@chakra-ui/react'
function Intro() {
  return (
            <Flex mb='2rem' bg='gray.100' justifyContent='center' direction={{base:'column', md:'row', lg:'row'}} space='7' shadow='lg'>
              <Flex py='2rem' justifyContent='center' direction={{base:'column', md:'column',lg:'row'} }>
                <Center>
                  <Image src='/me.jpg' rounded='full' maxW={{base:'15rem', md:'50rem', lg:'60rem'}} h={{base:'15rem', md:'20rem' }}></Image>
                </Center>
                  <Flex justifyContent='center' direction='column'>
                    <Center>
                      <Heading pb='2rem'>Hi, I'm Anthony</Heading>
                    </Center>
                      <Container maxWidth='100ch' mx='' fontSize='md' fontWeight='semibold'> I'm a former flight attendant with a love for tech, travel, and learning. 
                        In my career so far I have had the opportunity to learn so much about people,
                        service, adaptability, and kindness -- all while getting to explore the world and work with new colleagues from all walks of life. 
                        I loved my time in the sky, but I'm ready to work in a different kind of cloud! My skills in web development are primarily self taught, but I do have past experience
                        in IT, a few active IT certifications (CCNA, A+, N+), and a love for learning and building. 
                        You can count on me
                        to stay humble and curious, work a problem calmly under pressure and deadlines, eagerly contribute to the team, and work patiently and kindly with colleagues and clients. 
                        I also am an avid runner
                        and gamer. :)
                      </Container>
                  </Flex>
                </Flex>
              </Flex>
    
  )
}

export default Intro