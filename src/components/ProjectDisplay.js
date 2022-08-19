import { SimpleGrid, Link, Icon, Box, Flex, Heading, Center, Image} from "@chakra-ui/react";
import {FiExternalLink} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";


const ProjectDisplay = () => {
  
  const projects = [
    { name: 'Crystal Shop',
      link:'https://github.com/amargh2/shopping-app',
      imgURL: './crystal-shop.jpg',
      description:'Fully functional mobile-first storefront with working shopping cart, product sorting, and page routing. Built with React using hooks.',
    },
    { name: 'BattleShip',
      link:'https://github.com/amargh2/battleship',
      imgURL: './BattleShip.jpg',
      description:'BattleShip game with drag and drop ship placement and click to attack functionality.  Written in vanilla JavaScript using Test Driven Development (TDD).',
    },
    { name: 'To-Do-List',
      link:'https://github.com/amargh2/to-do-list',
      imgURL: './todo.jpg',
      description:'A simple to-do list app built from HTML, vanilla JS, and CSS (Tailwind). Functional at different breakpoints with multiple list tracking.',
    },
    { name: 'Memory Game',
      link:'https://github.com/amargh2/memory-game',
      imgURL: './memory-game.jpg',
      description:'A memory game that challenges you to click each picture only once. Built with React using hooks.',
    },
    { name: 'Weather App',
      link:'https://github.com/amargh2/weather-app',
      imgURL: './weather.jpg',
      description:'A simple app that gets weather based on a provided location and displays a funny gif based on the result. Uses fetch/async/promises and REST APIs and processes JSON data.',
    },
    { name: 'Restaurant Page',
      link:'https://github.com/amargh2/restaurant-page',
      imgURL: './restaurantpic.png',
      description: 'This is a restaurant landing page built in pure vanilla JS and handwritten CSS. About, menu, and contact page. One of my first ever projects.'
    }
  ]
  
  const processedProjects = projects.map(project => {
    return (<Flex justify='center' direction='column' px='1rem' py='2rem' rounded='md' mx={{sm:'2rem', md:'0', lg:'0'}} border='solid 5px' shadow='lg' w='' h='' borderColor='gray.100'>
              <Center>
                <Image src={project.imgURL} h='15rem' maxW='20rem' rounded='lg' objectFit='contain' alt='picture of the thing'/>
              </Center>
          <Flex justify='space-between' pt='2rem' pb='2px'>
            <Heading size='md'>{project.name}</Heading>
            <Flex>
              <Link href={project.link}><Icon as={FaGithub} h={6} w={6}/> <Icon as={FiExternalLink} h={6} w={6}/> </Link>
            </Flex>
          </Flex>
          <Box fontWeight='medium' pt='20px'>{project.description}</Box>
          </Flex>)
  })

  return (
    <Center pb='2rem'>
      <SimpleGrid mx={{base:'', md:'2rem', lg:'5rem'}} columns={{sm:1, md:2, lg:3}} spacing={5}>
        {processedProjects}
      </SimpleGrid>
    </Center>
  )
}

export default ProjectDisplay