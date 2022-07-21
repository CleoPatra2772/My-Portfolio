import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Me from "../../assets/img/Me.png";
import Classic from "../../assets/img/classical.png";
import Workout from "../../assets/img/workout.png";
import './about.styles.css';
import { Navbar } from "react-bootstrap";

const About =() =>{
    return(
        
        <Fragment>
        <Container>
        <Col>
        <Row>
        <div className="about-container">
        <h1 className="about-me">About Me</h1>
        <img className="photo-me" src ={Me}/>
        <p>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.
        Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.
        Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.
        </p>

        <div className="hobbies">
        <div className="working-out">
        <img className="photo-workout" src ={Workout}/>
            <h3>Workout</h3>
            <p>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.
        Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.
        </p>
        
        </div>

        
        <div className="classical-music">
        <img className="photo-classical"  src ={Classic}/>
            <h3>Classical Music</h3>
            
            <p>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.
        Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.
        </p>
        
        </div>
       
       <div className="skill-container">
        <h3>What I can do: </h3>
        <div className="skills">
        
            <div className= "frontend">
            
            <ul>
                <h4>Frontend Development</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li>SASS</li>
                <li>React</li>
                <li>Typescript</li>
            </ul>
            </div>
    
            <div className= "frontend">
            <ul>
                <h4>Backend Development</h4>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Motoko</li>
                <li>Git</li>
                <li>Firebase</li>
            </ul>
            </div>
        
        </div>
        </div>


        </div>
        </div>
        </Row>
        </Col>
        </Container>
        </Fragment>
    )
}

export default About;