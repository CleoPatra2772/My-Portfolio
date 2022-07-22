import { useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import  GrayGalaxy  from "../../assets/img/GrayGalaxy.png";
import './banner.styles.css';
import resume from '../../assets/resume/CleoGaoResumeSample.docx';

export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate= ["a Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 -Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();

        }, delta)
        
        return ()=> { clearInterval(ticker)};

    },[text]);

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText ==''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
           <Container>
           <Row className="align-items-center">

            <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my portfolio</span> */}
            <h1>{`Hello. I'm Cleo`}<span className="wrap"> {text}</span></h1>
            <p>When I first looked at the pictures taken by the James Webb Space Telescope I was amazed by the universe and technology.
            This brings me back to the day when I started my computer science course. I couldn't stop wondering, how did people come up and design such an intricate system. 
            Computers, internet, blockchains are so <em>magical</em> and wonderful. I aim to make applications with simplicity and purpose.

            
            
            </p>
            <button className="vvd" type="button" class="btn btn-secondary" onClick={() => console.log('connect')}>
                       <a download href={resume}>Download My Resume </a> 
                        <ArrowRightCircle size={25}/>
                    </button>
            </Col>

            <Col xs={12} md={6} xl={5}>
            <img className="headerImg" src={GrayGalaxy} alt="Header Img" />

            </Col>

           </Row>
           </Container>
        </section>
    );


}