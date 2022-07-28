import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/navbar/navbar.component';
import { Banner } from './components/banner/banner.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/about.component';
import { Projects } from './components/projects/projects.component';
import { Contact } from './components/contact/contact.component';
import { Footer } from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <Banner />
    
    <About />
    <Projects/>
    <Contact />
    <Footer />
    
    
  
     
    </div>
  );
}

export default App;
