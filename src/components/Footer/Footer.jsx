import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { BiMap, BiPhone } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Card bg="dark" text="white" className="rounded">

            <div className="border-bottom border-white rounded">
                <Card.Header as="h4">Hotelify</Card.Header>
            </div>
            <Container fluid>
                <Card.Body>

                    <div className="d-flex">

                        <div className="col-md-4 border-end border-white mr-2">
                            <div className="mb-2">
                                <Card.Title>Company</Card.Title>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, atque. Exercitationem quos commodi sit nesciunt explicabo corporis, repudiandae a suscipit quasi ratione minus aperiam unde deleniti sapiente iste ducimus quis?</p>
                        </div>

                        <div className="col-md-4 border-end border-white mx-2">
                            <div className="mb-2">
                                <Card.Title>Contact Us</Card.Title>
                            </div>
                            <ul className="list-unstyled">
                                <li className='my-1 mx-2'><BiMap /> 345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</li>
                                <li className='my-1 mx-2'><BiPhone /> (123) 456-7890 </li>
                                <li className='my-1 mx-2'><AiOutlineMail /> hotelify@gmail.com</li>
                            </ul>
                        </div>

                        <div className="col-md-3 ml-2">
                            <div className="mb-2">
                                <Card.Title>Social Media</Card.Title>
                            </div>
                            <ul className="list-unstyled d-flex flex-wrap">
                                <Link to="/" class="unstyled-link"><li className='my-1 mx-2'><FiFacebook size={40} /></li></Link>
                                <Link to="/" class="unstyled-link"><li className='my-1 mx-2'><FiTwitter size={40} /></li></Link>
                                <Link to="/" class="unstyled-link"><li className='my-1 mx-2'><FiInstagram size={40} /></li></Link>
                                <Link to="/" class="unstyled-link"> <li className='my-1 mx-2'><FiYoutube size={40} /></li></Link>
                                <Link to="/" class="unstyled-link"> <li className='my-1 mx-2'><FiLinkedin size={40} /></li></Link>
                            </ul>
                        </div>

                    </div>

                </Card.Body>

            </Container>
            <Card.Footer className="border-top border-white text-center pt-2">
                <Card.Text><span>&copy;{new Date().getFullYear()} Copyright:</span> hotelify.com</Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default Footer