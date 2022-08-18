import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import {Heading} from '@chakra-ui/react'
const ProjectDisplay = () => {
  
  const projects = [
    { name: 'BattleShip',
      link:'https://github.com/amargh2/to-do-list',
      imgURL: './BattleShip.jpg',
      description:'BattleShip game with drag and drop ship placement made entirely with vanilla JavaScript and Test Driven Development (TDD).',
    },
    { name: 'To-Do-List',
      link:'https://github.com/amargh2/to-do-list',
      imgURL: './todo.jpg',
      description:'A simple to-do list app built from HTML, vanilla JS, and CSS (Tailwind)',
    },
    { name: 'Crystal Shop',
      link:'https://github.com/amargh2/to-do-list',
      imgURL: './crystal-shop.jpg',
      description:'Fully functional storefront with working shopping cart and routing. Built with React.',
    },
    { name: 'Memory Game',
      link:'https://github.com/amargh2/to-do-list',
      imgURL: './memory-game.jpg',
      description:'A memory game that challenges you to click each picture only once. Built with React.',
    },
    { name: 'Weather App',
      link:'https://github.com/amargh2/to-do-list',
      imgURL: './weather.jpg',
      description:'A simple app that gets weather based on a provided location. Uses async/promises/fetch and processes JSON data.',
    },
    { name: 'Restaurant Page',
      link:'https://github.com/amargh2/restaurant-page',
      imgURL: './restaurantpic.png',
      description: 'This is a restaurant landing page built from CSS and dynamically generated with vanilla JS.'
    }
  ]
  
  const processedProjects = projects.map(project => {
    return (<Flex justifyContent='center' direction='column' px='1rem' py='2rem' rounded='md' mx={{sm:'2rem', md:'0', lg:'0'}} border='solid 5px' shadow='lg' w='' h='' borderColor='gray.100'>
          <Center><Heading size='md' pb='2px'>{project.name}</Heading></Center>
          <Box>
            <Center>
              <Image src={project.imgURL} h='15rem' maxW='35rem' rounded='lg' alt='picture of the thing'/>
            </Center>
          </Box>
          <Box fontWeight='medium' pt='20px'>{project.description}</Box>
          </Flex>)
  })

  return (
    <Center py='2rem'>
      <SimpleGrid mx={{base:'none', md:'8rem'}} columns={{sm:1, md:2, lg:3}} spacing={10}>
        {processedProjects}
      </SimpleGrid>
    </Center>
  )
}

export default ProjectDisplay