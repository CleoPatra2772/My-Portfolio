import './contact.styles.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contact from '../../assets/img/2.png';


export const Contact = () => {

    // const formInitialDetails = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     message: '',
    // }

    // const [formDetails, setFormDetails] = useState(formInitialDetails);
    // const [buttonText, setButtonText] = useState('Send');

    // const [status, setStatus] = useState({});

    // const onFormUpdate = (category, value) => {
    //    setFormDetails({
    //     ...formDetails,
    //     [category]: value,
    // })
    // }

    // const handleSubmit =async (e) =>{
    //     e.preventDefault();
    //     setButtonText('Sending');
    //     let response = await fetch('http://localhost:5000/contact',{
    //         method: "POST",
    //         header: {
    //             "Content-Type": "Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });

    //     setButtonText("Send");
    //     let result = response.json();
    //     setFormDetails(formInitialDetails);
    //     if(result.code === 200){
    //         setStatus({ success: true, message: 'Message sent successfully'});
    //     }else{
    //         setStatus({ success: false, message: 'Something is wrong, please try again'});
    //     }


    //}


    return(
        <section className="contact" id="connect">
         
            <Container >
            <img className='contact-image' src={contact} alt='Contact Me'/>
                    <Col md={6}>
                 
                    <div className='form-container'>
                    
                    <h2>Get In Touch</h2>
                    <form className='form' action="https://formsubmit.co/7f81db755cf6ba1bc9d7d3b3f2c34711" method="POST">
                
                        
                            <Col sm={6} className="px-1">
                                <input type="text" name="First-Name" placeholder="First Name"
                                required
                                />
                                
                            </Col>

                            <Col sm={6} className="px-1">
                            <input type="text" name="Last-Name" placeholder="Last Name"
                                required
                                />
                            </Col>

                            <Col sm={6} className="px-1">
                            <input type="email" name="Email" placeholder="email"
                                required
                                />
                            </Col>
                            <Col>
                                <textarea row="6"  name= "Message" placeholder="message"
                                />
                                <button type='submit'><span>Send</span></button>
                            </Col>
                          
                      
                    </form>
                  
                    </div>

                    <div className='img-container'>
                    
                    </div>
                  
                   
                    </Col>
              
            </Container>
        </section>
    )
}

