import { Col, Container, Row, Nav, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Subscribe } from "../form";



function Footer(){
    return (
        <footer className="py-md-5">
            <section className="py-5 footer-section">
                <Container fluid>
                    <Row className="pb-0 pb-sm-3">
                        <Col sm={6} className="col-12 text-center text-sm-start mb-5 mb-sm-0">
                            <Nav.Link as={Link} to="/" className="d-inline-block"> 
                                <Image src="/assets/images/piprotocol.svg" alt="Pi Potocol" className="mb-3"/>
                            </Nav.Link>
                            <p className="p-16 mx-auto ms-sm-0" style={{maxWidth: '360px'}}>Pi Protocol is the evolution of the stablecoin ecosystem with its unique value propositions</p>
                            <Subscribe/>
                        </Col>

                        <Col className="mb-4 mb-sm-0">
                            <div className="footer-nav-links-conainer mx-auto me-sm-0 max-width-content text-end">
                                <h5 className="footer-links-heading max-width-content gradient-color mb-3 mx-auto ms-md-auto me-sm-0">Comapany</h5>
                                <Nav className="m-0 ms-sm-auto text-gray max-width-content d-flex flex-column text-center text-sm-end">
                                    <Nav.Link as={Link} to="/" className='text-gray p-0 mb-2 ff-poppins fw-normal ls-unset '>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/contact" className='text-gray p-0 mb-2 ff-poppins fw-normal ls-unset'>Get in touch</Nav.Link>
                                    <Nav.Link as={Link} to="/insights" className='text-gray p-0  mb-2 ff-poppins fw-normal ls-unset'>Insights</Nav.Link>
                                    <Nav.Link as={Link} to="https://docs.piprotocol.com/docs/Overview/introduction/" className='ext-gray p-0 ff-poppins fw-normal ls-unset'>Documentation</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                    <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} className="mb-4"/>
                    <Row>
                        <Col className="text-white sub-heading-2 align-content-center">© 2025 Pi Protocol</Col>
                        <Col>
                            <div className="d-flex gap-3 gap-sm-4  justify-content-end">
                                <span>
                                    <a className="" href="https://t.me/Piprotocol_official" target="_blank">
                                        <Image src="/assets/images/telegram.svg" width={19} />
                                    </a>
                                </span>

                                <span>
                                    <a className="" href="https://discord.com/invite/8B5jWdbKSg" target="_blank">
                                        <Image src="/assets/images/discord.svg"  width={22}  /> 
                                    </a>
                                </span>

                                <span>
                                    <a className="" href="https://x.com/piprotocol" target="_blank">
                                        <Image src="/assets/images/twitter.svg"  width={18}  />
                                    </a>
                                </span>

                                <span>
                                    <a className="" href="https://www.linkedin.com/company/piprotocol/" target="_blank">
                                        <Image src="/assets/images/linkedin.svg"  width={21} />
                                    </a>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    );
}


export default Footer;