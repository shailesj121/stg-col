import { Container, Row, Col, Image } from 'react-bootstrap';
import UnfairAdvantage from '../components/UnfairAdvantage';
import { motion } from 'framer-motion';


function Home(){
   
    return (
        <motion.div  initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="main">
            <section className='gradient-light' style={{background: `url("/assets/images/home-hero-shadow.svg")`}}></section>
                <section>
                    <Container fluid className='p-0 full-height position-relative'>
                        <motion.div  initial={{ opacity: 0}}  animate={{ opacity: 1}} transition={{ duration: 1 }} className='h-100 hero-video-container hero-bg-fliter'>
                            <video src="/assets/images/home-hero-vid.mp4" className='w-100 h-100 object-fit-cover width-sm-lg-1200' autoPlay loop muted="muted" playsInline="" controlsList="nodownload"></video>
                        </motion.div>
                        <Row className='h-100 justify-content-center align-items-center text-center  position-relative'>
                            <Col>
                                <h1>Stablecoins, <span className='animated-gradient-text'>Reimagined</span></h1>
                                <p className='pehragraph-24 px-5'>Use your Principal, Keep your Interest.</p>
                            </Col>
                        </Row>
                        <a href="#twoTokens" className='position-absolute bottom-60-px left-50'>
                            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path className="arr-1" d="M18.3401 20.7647L19.9724 22.3985L11.0765 31.2976C10.9339 31.441 10.7644 31.5549 10.5777 31.6326C10.391 31.7103 10.1907 31.7502 9.98852 31.7502C9.78629 31.7502 9.58606 31.7103 9.39935 31.6326C9.21264 31.5549 9.04313 31.441 8.90059 31.2976L-4.08776e-07 22.3985L1.63229 20.7663L9.98621 29.1186L18.3401 20.7647Z" fill="#97C1F3"></path> <path className="arr-2" d="M18.3401 11.0001L19.9724 12.6339L11.0765 21.5329C10.9339 21.6764 10.7644 21.7902 10.5777 21.8679C10.391 21.9456 10.1907 21.9856 9.98852 21.9856C9.78629 21.9856 9.58606 21.9456 9.39935 21.8679C9.21264 21.7902 9.04313 21.6764 8.90059 21.5329L-4.08776e-07 12.6339L1.63229 11.0016L9.98621 19.354L18.3401 11.0001Z" fill="#97C1F3"></path> <path className="arr-3" d="M18.3401 7.07239e-05L19.9724 1.6339L11.0765 10.5329C10.9339 10.6764 10.7644 10.7902 10.5777 10.8679C10.391 10.9456 10.1907 10.9856 9.98852 10.9856C9.78629 10.9856 9.58606 10.9456 9.39935 10.8679C9.21264 10.7902 9.04313 10.6764 8.90059 10.5329L-4.08776e-07 1.6339L1.63229 0.00161068L9.98621 8.35399L18.3401 7.07239e-05Z" fill="#97C1F3"></path> </svg>
                        </a>
                    </Container>
                </section>

                <section id='twoTokens' className='section-margin section-padding'>
                    <Container>
                        <Row className=' text-center'>
                            <Col>
                                <h2 className='heading'>Two Tokens, <span className='animated-gradient-text'>Double the Benefits</span>​</h2>
                                <p className='mx-width-900'>Pi Protocol splits the stablecoin game: USP holds your USD value, USI grows your earnings.Trade or spend USP anywhere, while USI works quietly to boost returns.</p>
                            </Col>
                        </Row>
                        <video className='w-100' src="/assets/images/two-tokens-vid.mp4" autoPlay loop muted="muted" playsInline="" controlsList="nodownload"></video>
                    
                    </Container>
                </section>

            <section className='section-margin'>
                <Container className='margin-top-negative-60'>
                    <Row className='text-center mb-2 mb-sm-5'>
                        <Col>
                            <h2 className='heading'><span className='animated-gradient-text'>Roadmap</span>​</h2>
                        </Col>
                    </Row>
                   <Row className='position-relative'>
                    
                    <Col lg={3} md={6} className=' image-box col-6 hover-text-white mb-4 mb-lg-0'>
                        <div className='image-box-img position-relative image-box-img-1 mb-2'> 
                            <Image  src="/assets/images/roadmap-image.svg" alt="" loading="lazy" width={273} height={317} fluid/>
                        </div>
                        <div className='text-gray3'>
                            <h3 className="fw-medium text-gray3">Q1 25</h3>
                            <ul className="mb-0 f-style-2 list-styled">
                                <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>Beta Testing Phase</p></li>
                                <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>Invite-Only Access</p></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className=' image-box col-6 hover-text-white mb-4 mb-lg-0'>
                    <div className='image-box-img position-relative image-box-img-2 mb-2'> 
                        <Image src="/assets/images/roadmap-image.svg" alt="" loading="lazy" width={273} height={317} fluid/>
                    </div>
                    <div className='text-gray3'>
                        <h3 className="fw-medium text-gray3">Q2 25</h3>
                        <ul className="mb-0 f-style-2 list-styled">
                            <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>Public Launch</p></li>
                            <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>DEX Availability for USP Stablecoin</p></li>
                        </ul>
                    </div>
                    </Col>
                    <Col lg={3} md={6}  className=' image-box col-6 hover-text-white'>
                    <div className='image-box-img position-relative image-box-img-3 mb-2'> 
                        <Image src="/assets/images/roadmap-image.svg" alt="" loading="lazy" width={273} height={317} fluid/>
                    </div>
                    <div className='text-gray3'>
                        <h3 className="fw-medium text-gray3">Q3 25</h3>
                        <ul className="mb-0 f-style-2 list-styled">
                            <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>Pi Governance Structure Implementation</p></li>
                            <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>USPi Exchange Listings</p></li>
                        </ul>
                    </div>
                    </Col>
                    <Col lg={3} md={6} className=' image-box col-6 hover-text-white'>
                    <div className='image-box-img position-relative image-box-img-4 mb-2'> 
                        <Image src="/assets/images/roadmap-image.svg" alt="" loading="lazy" width={273} height={317} fluid/>
                    </div>
                    <div className='text-gray3'>
                        <h3 className="fw-medium text-gray3">Q4 25</h3>
                        <ul className="mb-0 f-style-2 list-styled">
                            <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>Ecosystem Scaling</p></li>
                            <li className='text-gray3'><p className='text-gray3 f-style-2 mb-0'>RWA Coverage Expansion</p></li>
                        </ul>
                    </div>
                    </Col>
                   
                   </Row>
                   
                </Container>
            </section>

            <section className='section-margin'>
                <UnfairAdvantage/>
            </section>

            <section className='section-margin'>
                <Container className=''>
                    <Row className=' text-center mb-4 mb-md-5'>
                        <Col>
                            <h2 className='heading'>Featured <span className='animated-gradient-text'>In</span> </h2>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                    <Col md={4} lg={3} className='px-3 mb-3 mb-md-0'>
                        <div className='image-box-wrapper rounded-4 bg-gray2  h-100 align-content-center text-center'>
                            <a href='https://www.thecoinrepublic.com/2025/02/20/tether-co-founder-reeve-collins-and-pi-protocols-new-usp-stablecoin-all-you-need-to-know/' target="_blank" rel="noopener"  className='d-block h-100 p-4 p-md-3 p-lg-4 align-content-center'  >
                            <Image src="/assets/images/pymnts.svg" alt="" loading="lazy" fluid className='py-2'/>
                            </a>
                        </div>
                    </Col>

                    <Col md={4} lg={3} className='px-3 mb-3 mb-md-0'>
                        <div className='image-box-wrapper rounded-4 bg-gray2 h-100 align-content-center text-center'>
                        <a href='https://www.bloomberg.com/news/articles/2025-02-18/tether-co-founder-is-working-on-yield-bearing-stablecoin-rival?srnd=homepage-europe' target="_blank" rel="noopener" className='d-block h-100 p-4 p-md-3 p-lg-4 align-content-center' >
                            <Image src="/assets/images/bloomberg.svg" alt="" loading="lazy" fluid className='py-2'/>
                            </a>
                        </div>
                    </Col>

                    <Col md={4} lg={3} className='px-3 '>
                        <div className='image-box-wrapper rounded-4 bg-gray2 h-100 align-content-center text-center'>
                            <a href='https://www.thecoinrepublic.com/2025/02/20/tether-co-founder-reeve-collins-and-pi-protocols-new-usp-stablecoin-all-you-need-to-know/' target="_blank" rel="noopener" className='d-block h-100 p-4 p-md-3 p-lg-4 align-content-center' >
                                <Image src="/assets/images/coin-republic.svg" alt="" loading="lazy" fluid className='py-2'/>
                            </a>
                        </div>
                    </Col>
                 
                    </Row>
                   
                </Container>
            </section>

            <section id='flexibility' className=''>
                <Container className=''>
                    <Row className=' text-center'>
                        <Col>
                            <h4 className='text-md-start m-0 text-center pehragraph-24 p-0 lh-1 text-gray2'>The Pi Protocol</h4>
                            <h2 className='heading text-md-start text-center'>Breaking <span className='animated-gradient-text'>Barriers</span> </h2>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col md={5}>
                            <div>
                                <video src="/assets/images/breaking-barriers.mp4" className='w-100 object-fit-contain' autoPlay loop muted="muted" playsInline controlsList="nodownload"></video>
                            </div>
                        </Col>
                        <Col md={7} className='align-content-center'>
                            <div>
                                <Row className="flexibility-row">
                                    <Col className='px-sm-2 px-lg-4 mb-5 col-6'>
                                        <div className='text-center text-sm-start d-sm-flex align-items-start '>
                                            <Image src="/assets/images/flexible1.svg" className='mb-3' />
                                            <div className='ps-sm-3'>
                                                <h3 className='m-0 mb-1 text-light fw-normal'>Flexible</h3>
                                                <p  className='m-0 p'>Your choice of on chain yield assets</p>
                                            </div>
                                        </div>
                                    </Col>   
                                    <Col className='px-sm-2 px-lg-4 mb-5 col-6'>
                                        <div className='text-center text-sm-start d-sm-flex align-items-start '>
                                            <Image src="/assets/images/transparent1.svg" className='mb-3' />
                                            <div className='ps-sm-3'>
                                                <h3 className='m-0 mb-1 text-light fw-normal'>Transparent</h3>
                                                <p  className='m-0 p'>Visibility of collateral</p>
                                            </div>
                                        </div>
                                    </Col> 
                                    <Col className='px-sm-2 px-lg-4 mb-5 col-6'>
                                        <div className='text-center text-sm-start d-sm-flex align-items-start '>
                                            <Image src="/assets/images/secure1.svg" className='mb-3' />
                                            <div className='ps-sm-3'>
                                                <h3 className='m-0 mb-1 text-light fw-normal'>Secure</h3>
                                                <p  className='m-0 p'>Minimal counterparty risk</p>
                                            </div>
                                        </div>
                                    </Col> 
                                    <Col className='px-sm-2 px-lg-4 mb-5 col-6'>
                                        <div className='text-center text-sm-start d-sm-flex align-items-start '>
                                            <Image src="/assets/images/innovative1.svg" className='mb-3' />
                                            <div className='ps-sm-3'>
                                                <h3 className='m-0 mb-1 text-light fw-normal'>Innovative</h3>
                                                <p  className='m-0 p'>Maximise yield without sacrificing utility</p>
                                            </div>
                                        </div>
                                    </Col> 
                                    <Col className='px-sm-2 px-lg-4 mb-5 col-6'>
                                        <div className='text-center text-sm-start d-sm-flex align-items-start '>
                                            <Image src="/assets/images/rewarding1.svg" className='mb-3' />
                                            <div className='ps-sm-3'>
                                                <h3 className='m-0 mb-1 text-light fw-normal'>Rewarding</h3>
                                                <p  className='m-0 p'>Benefit from growing Pi ecosystem</p>
                                            </div>
                                        </div>
                                    </Col> 
                                    <Col className='px-sm-2 px-lg-4 mb-0 mb-sm-0 col-6'>
                                        <div className='text-center text-sm-start d-sm-flex align-items-start '>
                                            <Image src="/assets/images/scalable1.svg" className='mb-3' />
                                            <div className='ps-sm-3'>
                                                <h3 className='m-0 mb-1 text-light fw-normal'>Scalable</h3>
                                                <p  className='m-0 p'>Built for web 3 with robust governance</p>
                                            </div>
                                        </div>
                                    </Col> 
                                                                                                        
                                </Row>
                            </div>
                        </Col>
                    </Row>
                   
                </Container>
            </section>
        </motion.div>
    );
}

export default Home;