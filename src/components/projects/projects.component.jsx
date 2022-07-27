import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import proImg1 from "../../assets/img/projects/proImg1.png";
import proImg2 from "../../assets/img/projects/proImg2.png";
import proImg3 from "../../assets/img/projects/proImg3.png";
import proImg4 from "../../assets/img/projects/proImg4.png";
import movie from  '../../assets/img/projects/movie-app.png';
import cryptoAtlas from  '../../assets/img/projects/crypto-atlas.png';
import drum from  '../../assets/img/projects/Drum-kit.png';
import simon from  '../../assets/img/projects/simon.png';
import dkeeper from  '../../assets/img/projects/dkeeper.png';
import { ProjectCard } from "../project-card/project-card.component";
import './projects.styles.css';

export const Projects =() =>{

    const projects =[
        {
        title: "E-commerce Store", 
        description: "Online clothing store that utilizes Firebase as database and user authentication. It is built with React, typescript, SASS, Redux-sagas",
        imgUrl: proImg1,
        },
        {
            title: "Movie-app", 
            description: "A website where you can find movie information! It uses redux thunk to organize and fetch all data from IMDb API",
            imgUrl: movie,
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
        description: "A todo-list built using JavaScript, Node.js, Epress.js and MongoDB",
        imgUrl: proImg3,
            },

        {
        title: "Crypto-Altas", 
        description: "Checkout the latest cryptocurrencies stats and news. This website is built with html, bootstrap, and requests data using axios ",
        imgUrl: cryptoAtlas,
            },
              
    ];

    const projectsTwo =[
        {
            title: "DKeeper", 
            description: "Decentralized keeper app that allow you do write down things that are important, delete once you finish! It is made using Internet Computer, React and Motoko",
            imgUrl: dkeeper,
        },
        {
        title: "DrumKit", 
        description: "An online drum set built by using DOM and Javascript ",
        imgUrl: drum,
        },

        {
        title: "SimonGame", 
        description: "A Memory game built using JavaScript",
        imgUrl: simon,
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

                    <Tab.Pane eventKey="second">
                    <Row>
                    {
                        projectsTwo.map((project, index) =>{
                            return(
                                <ProjectCard key={index} 
                                    {...project}
                                />
                            )
                        })
                    }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">More is yet to come!!! </Tab.Pane>

                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
     

        </section>
    );
}