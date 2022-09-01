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
      description:'Fully functional mobile-first storefront with working shopping cart, product sorting, and page routing. I made this from scratch with React using functional components and hooks and styled it with Tailwind. The app is responsive at all breakpoints and features dropdown panels and interactive elements. Click the link icon to see it live!',
    },
    { name: 'Battleship',
      link:'https://amargh-battleship.netlify.app/',
      gitHubLink:'https://github.com/amargh2/battleship',
      imgURL: './BattleShip.jpg',
      description:'Battleship game with drag and drop ship placement and click to attack functionality. A simple game, but challenging myself to build it from vanilla JavaScript with features I was unfamiliar with was a great learning experience that made me much more comfortable with JavaScript. Click the link to play!' 
    },
    { name: 'Memory Game',
      gitHubLink:'https://github.com/amargh2/memory-game',
      imgURL: './memory-game.jpg',
      description:'A memory game that challenges you to click each picture only once. This was my first React project, so it is fairly simple, but it was great practice with hooks and functional components.',
    },
    { name: 'To-Do-List',
      gitHubLink:'https://github.com/amargh2/to-do-list',
      imgURL: './todo.jpg',
      description:'A simple to-do list app built from HTML, vanilla JS, and CSS (Tailwind). This was an early project for me so the code is a little messy, but I am proud I was able to build this all on my own.',
    },
    { name: 'Restaurant Page',
      gitHubLink:'https://github.com/amargh2/restaurant-page',
      imgURL: './restaurantpic.png',
      description: 'This is a single page application/restaurant page built in vanilla JS and handwritten vanilla CSS with all elements generated via DOM manipulation. This project uses JavaScript classes and webpack.'
    },
    { name: 'Weather App',
      gitHubLink:'https://github.com/amargh2/weather-app',
      imgURL: './weather.jpg',
      description:'A barebones app that gets weather using API calls based on a provided location and displays a funny gif based on the result. Uses fetch/async/promises and REST APIs and processes JSON data. I am currently planning a better looking and more interactive rework in React.',
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