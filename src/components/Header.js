import {Image} from '@chakra-ui/react';
import {Flex} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import {Center} from '@chakra-ui/react'

function Intro() {
  
  return (
            <Flex pl={{lg:'15rem'}} shadow='lg' pt='3rem' bgPosition='center' justify='center' bgImage='url(/cloud7.jpg)'>
              <Flex mb='2rem' direction={{base:'column', md:'row', lg:'row'}}>
                <Flex pt='4' align='bottom' justifyContent='center' direction={{base:'column', md:'column',lg:'row'} }>
                  <Center pb='2rem'>
                    <Image src='/mesmall.jpg' rounded='full' maxW={{base:'15rem', md:'50rem', lg:'60rem'}} h={{base:'15rem', md:'18rem' }}></Image>
                  </Center>
                    <Flex pt={{lg:'1rem'}} pl={{lg:'1rem'}} direction='column'>
                      <Center>
                        <Heading fontweight='bold' pt={{lg:'2rem'}} pb='1rem'>Hi, I'm Anthony!</Heading>
                      </Center>
                        <Container maxWidth='60ch' mx='' fontSize='md' fontWeight='semibold'> I'm an explorer at heart with a love for tech, writing, travel, and intellectual growth.
                          I was a flight attendant for nearly a decade, and while I loved my time in the sky (and everywhere else, too!), I'd like to start working in 
                          a different kind of cloud! Have a look at my projects and progress below, and thank you for stopping by.
                        </Container>
                    </Flex>
                  </Flex>
                </Flex>
            </Flex>
    
  )
}

export default Intro