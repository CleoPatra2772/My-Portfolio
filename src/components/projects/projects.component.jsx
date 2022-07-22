import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import proImg1 from "../../assets/img/projects/proImg1.png";
import proImg2 from "../../assets/img/projects/proImg2.png";
import proImg3 from "../../assets/img/projects/proImg3.png";
import proImg4 from "../../assets/img/projects/proImg4.png";
import { ProjectCard } from "../project-card/project-card.component";
import './projects.styles.css';

export const Projects =() =>{

    const projects =[
        {
        title: "E-commerce Store", 
        description: "Online clothing store that utilizes Firebase. It is built with React, graphQL. Then, upgraded using SASS, Redux-sagas, typescript.",
        imgUrl: proImg1,
        },

        {
        title: "OpenD", 
        description: "OpenSea mockup: A site you can mint, list and buy NFTs. Built using React and a smart contract language- Motoko",
        imgUrl: proImg2,
        },

        {
        title: "DSurv", 
        description: "Curve mockup: Claim your Cleo Tokens today! Built using React and a smart contract language- Motoko",
        imgUrl: proImg4,
        },

        {
        title: "To-Do List", 
        description: "A todo-list built using JavaScript, Epress.js and MongoDB",
        imgUrl: proImg3,
            },


    ];
    return(
        <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my projects</p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                    {
                        projects.map((project, index) =>{
                            return(
                                <ProjectCard key={index} 
                                    {...project}
                                />
                            )
                        })
                    }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">Loren Ipsum </Tab.Pane>
                    <Tab.Pane eventKey="third">Loren Ipsum </Tab.Pane>

                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={''}></img>

        </section>
    );
}