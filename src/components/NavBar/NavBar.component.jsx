import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import Logo from "../../assets/img/logo.png";
import './navbar.styles.css';


export const NavigationBar = () =>{
    const [activeLink, setActivelink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll =() =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }

            window.addEventListener("scroll", onScroll);

            return ()=> window.removeEventListener("scroll", onScroll);
        }
    },[]);

    const onUpdateActiveLink =(value) =>{
        setActivelink(value);

    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className ="navbar-logo" src={Logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                 <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === '[home]' ? 'active-navbar-link': 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
                >Home</Nav.Link>
                <Nav.Link href="#about me" className={activeLink === '[about me]' ? 'active-navbar-link': 'navbar-link'}
                onClick={() => onUpdateActiveLink('about me')}
                >About Me</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === '[projects]' ? 'active-navbar-link': 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                
                {/* <Nav.Link href="#About Me" className={activeLink === 'about me' ? 'active-navbar-link': 'navbar-link'}
                onClick={() => onUpdateActiveLink('about me')}
                >About Me</Nav.Link> */}
                
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
 
                    <a href="https://github.com/CleoPatra2772"><img src={navIcon1} alt=' '/></a> 
                    <a href="#"><img src={navIcon2} alt=' '/></a>
                    <a href="https://www.instagram.com/cleopatra_2277/"><img src={navIcon3} alt=' '/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}>
                        <span>Let's Connect</span>
                    </button>
                </span>
                
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    );



};