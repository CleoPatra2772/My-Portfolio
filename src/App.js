import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/navbar.component';
import { Banner } from './components/banner/banner.component';
import { Skills } from './components/skills/skills.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/about.component';
import { Projects } from './components/projects/projects.component';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner />
    
    <Skills />
    <Projects/>
    <About />
    
  
     
    </div>
  );
}

export default App;
