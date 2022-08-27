import { SimpleGrid, Link, Icon, Box, Flex, Heading, Center, Image} from "@chakra-ui/react";
import {FiExternalLink} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";
import { Text } from "@chakra-ui/react";

const ProjectDisplay = () => {
  
  const projects = [
    { name: 'Crystal Shop',
      link:'https://amargh-shopping-app.netlify.app/',
      gitHubLink: 'https://github.com/amargh2/shopping-app',
      imgURL: './crystal-shop.jpg',
      description:'Fully functional mobile-first storefront with working shopping cart, product sorting, and page routing. Built with React using hooks. Click the link icon to see it live! I just think crystals are neat.',
    },
    { name: 'Battleship',
      link:'https://amargh-battleship.netlify.app/',
      gitHubLink:'https://github.com/amargh2/battleship',
      imgURL: './BattleShip.jpg',
      description:'Battleship game with drag and drop ship placement and click to attack functionality.  Written in vanilla JavaScript using Test Driven Development (TDD). Click the link icon to play!',
    },
    { name: 'Memory Game',
      gitHubLink:'https://github.com/amargh2/memory-game',
      imgURL: './memory-game.jpg',
      description:'A memory game that challenges you to click each picture only once. Built with React using hooks.',
    },
    { name: 'To-Do-List',
      gitHubLink:'https://github.com/amargh2/to-do-list',
      imgURL: './todo.jpg',
      description:'A simple to-do list app built from HTML, vanilla JS, and CSS (Tailwind). Functional at different breakpoints with multiple list tracking.',
    },
    { name: 'Weather App',
      gitHubLink:'https://github.com/amargh2/weather-app',
      imgURL: './weather.jpg',
      description:'A simple app that gets weather based on a provided location and displays a funny gif based on the result. Uses fetch/async/promises and REST APIs and processes JSON data.',
    },
    { name: 'Restaurant Page',
      gitHubLink:'https://github.com/amargh2/restaurant-page',
      imgURL: './restaurantpic.png',
      description: 'This is a restaurant landing page built in pure vanilla JS and handwritten CSS. About, menu, and contact page. One of my first ever projects.'
    }
  ]

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
          <Flex justify='space-between' pt='2rem' pb='2px'>
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