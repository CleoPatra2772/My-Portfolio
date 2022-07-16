import {Container, Row, Col} from "react-bootstrap";

export const Banner =() =>{
    return(
        <section className="banner" id="home">
           <Container>
           <Row className="align-items-center">

            <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{`Hello. I'm Cleo`}<span className="wrap"> web developer</span></h1>
            <p></p>
            </Col>

           </Row>
           </Container>
        </section>
    );


}