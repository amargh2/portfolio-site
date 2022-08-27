import './App.css';
import Intro from './components/Header';
import ProjectDisplay from './components/ProjectDisplay';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <header>
          <div>
            <Intro>
             </Intro>
          </div>
        </header>
        
          
            <ProjectDisplay></ProjectDisplay>
          
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
