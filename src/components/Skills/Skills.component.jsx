import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap"
import checked from '../../assets/img/checked.png';
import './skills.styles.css';

export const Skills = () =>{

    return(
       <Fragment>
        <Container fluid='md'>
        <Row>
        <h1>My Skills</h1>
        <Col className='one'>
        <h3>Frontend Skills</h3>
        <div className='skill-container'>
                <article className="actual-skill">        
                <h4>✔️ HTML</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ CSS</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ Boostrap</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ JQuery</h4>
                </article>
             
                <article className="actual-skill">
                <h4>✔️ SASS</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ JavaScript</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ Typescript</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ React</h4>
                </article>
        </div>

        </Col>
        <Col className='two'>
        <h3>Backend Skills</h3>
        <div className='skill-container'></div>
        <article className="actual-skill">
                <h4>✔️ Express.js</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ Node.js</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ MongoDB</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ Motoko</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ API</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ Git</h4>
                </article>
                <article className="actual-skill">
                <h4>✔️ Firebase</h4>
                </article>
        </Col>
        </Row>
        </Container>
        </Fragment>
       
    )

}