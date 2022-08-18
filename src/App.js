import logo from './logo.svg';
import './App.css';
import Intro from './components/Header';
import MyPortrait from './components/portrait';
import { chakra, HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import ProjectDisplay from './components/ProjectDisplay';
import { Flex } from '@chakra-ui/react'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
         <Intro>
         </Intro>
         <ProjectDisplay></ProjectDisplay>
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
