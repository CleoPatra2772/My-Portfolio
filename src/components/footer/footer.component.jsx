import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './footer.styles.css';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

export const Footer =()  =>{
  const year = new Date().getFullYear();

  return (
   
      <footer className= 'footer'>
        <Container>
        <Col sm={6}>
            </Col>
        <Row className= 'align-item-center'>
        <Col sm={6}>
       
        </Col>
            <Col sm={6} className="text-center text-sm-end">
            
              <div className="social-icon">
              <a href="https://github.com/CleoPatra2772"><img src={navIcon1} /></a>
              <a href=""><img src={navIcon2} /></a>
              <a href="https://www.instagram.com/cleopatra_2277/"><img src={navIcon3} /></a>
              </div>
              <p>Copyright ⓒ {year}. All Right Reserved by Cleo Gao</p>
            </Col>
            </Row>
        </Container>
      </footer>
   
  );
}


