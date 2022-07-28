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
        <div className="about-container" id="about me">
        <h2 className="about-me">About Me</h2>
        <img className="photo-me" src ={Me}/>
        <p> Hello World. This is Cleo! I graduated with a Bachelor's degree in Biology, but I felt like something isn't right.
        Luckily, I found the right puzzle. Thus began my journey as a self-taught web developer... </p>
       <p>
        Learning web development is a fun experience espcially for someone like me, who enjoys patterns and logic.
        Here are two more things about me: 
        </p>

        <div className="hobbies">
        <div className="working-out">
        <img className="photo-workout" src ={Workout}/>
            <h3>Workout</h3>
            <p>I have been working out for over nine years now. It is a great way for me to relax and recharge.
        </p>
        
        </div>

        
        <div className="classical-music">
        <img className="photo-classical"  src ={Classic}/>
            <h3>Classical Music</h3>
            
            <p>This is a hobby I picked up when I was coding and working on projects. I enjoy what I do :)
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
                <li>GraphQL</li>
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