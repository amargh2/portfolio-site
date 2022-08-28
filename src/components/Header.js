import {Image} from '@chakra-ui/react';
import {Flex} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import {Center} from '@chakra-ui/react'

function Intro() {
  
  return (
            <Flex pl={{lg:'15rem'}} pt='3rem' bgPosition='center' justify='center' bgImage='url(/cloud5.jpg)'>
              <Flex mb='2rem' direction={{base:'column', md:'row', lg:'row'}}>
                <Flex pt='4' align='bottom' justifyContent='center' direction={{base:'column', md:'column',lg:'row'} }>
                  <Center pb='2rem'>
                    <Image src='/me.jpg' rounded='full' maxW={{base:'15rem', md:'50rem', lg:'60rem'}} h={{base:'15rem', md:'20rem' }}></Image>
                  </Center>
                    <Flex pt={{lg:'1rem'}} pl={{lg:'1rem'}} direction='column'>
                      <Center>
                        <Heading fontweight='bold' pb='1rem'>Hi, I'm Anthony!</Heading>
                      </Center>
                        <Container maxWidth='60ch' mx='' fontSize='md' fontWeight='semibold'> I'm an explorer at heart with a love for tech, travel, and intellectual growth.
                          In my career so far I have had the opportunity to learn so much about people,
                          service, adaptability, and kindness -- all while getting to travel the world and work with new colleagues from all walks of life.
                          I loved my time in the sky (and everywhere else, too!), but now I'm ready to work in a different kind of cloud! My skills in web development are primarily self-taught,
                          though I do have some past experience in IT and active IT certifications, as well as a B.A. in English for all your documentation needs. Most of all, I love code and the joy of learning and building. Have a look at some of my
                          projects and progress below!
                        </Container>
                    </Flex>
                  </Flex>
                </Flex>
            </Flex>
    
  )
}

export default Intro