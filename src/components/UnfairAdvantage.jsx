
import { Container, Row, Col, Image } from "react-bootstrap";

function UnfairAdvantage(){
    
  return (
                <Container >
                    <Row className=' text-center mb-4 mb-md-5'>
                        <Col>
                            <h2 className='heading'>Unfair <span className="animated-gradient-text">Advantage</span>​</h2>
                            <p className='mx-width-700'>A team of people who think differently. People who are inspired by the best ideas and minds in the world. A team with history.</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                    <Col sm={6} className='px-2 lg-25-per mb-4 mb-sm-0'>
                        <div className='image-box-wrapper rounded-4 bg-gray p-4 h-100'>
                            <div className='mb-3'> 
                                <Image src="/assets/images/reeve-collins.jpg" alt="Reeve" loading="lazy" className='w-100' fluid/>
                            </div>
                            <div>
                                <h4 className="fw-bold gradient-color">Reeve Collins</h4>
                                <p className='fw-medium sub-heading-2 ff-manrope text-white ls-4'>CHAIRMAN</p>
                                <ul className="list-unstyled  f-size-15">
                                    <li>Creator of the Stablecoin</li>
                                    <li>Founder – Tether</li>
 	
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}className='px-2 lg-25-per'>
                    <div className='image-box-wrapper rounded-4 bg-gray p-4 h-100'>
                            <div className='mb-3'> 
                                <Image src="/assets/images/bundeep.jpg" alt="Bundeep" loading="lazy" className='w-100' fluid/>
                            </div>
                            <div>
                                <h4 className=" fw-bold gradient-color">Bundeep Singh Rangar</h4>
                                <p className='fw-medium sub-heading-2 ff-manrope text-white ls-4'>CHIEF EXECUTIVE OFFICER</p>
                                <ul className="list-unstyled  f-size-15">
 	                                <li>Previously Founded Premfina (Funded by Draper, Rakuten, Thomson Family, Madison Dearborn and Morgan Stanley)</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                 
                    </Row>
                   
                </Container>
  );
}

export default UnfairAdvantage;