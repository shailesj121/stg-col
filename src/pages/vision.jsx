import { Container, Row, Col } from "react-bootstrap";
import UnfairAdvantage from "../components/UnfairAdvantage";
import Globe from "../components/globe";
import Bubble from "../components/bubble";
import { motion } from 'framer-motion';

function Vision(){
    return(
        <motion.div  initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="main">
            <section className="position-relative">
                <div className='h-100 vision-globe-wrapper hero-video-container hero-bg-fliter'>
                    <Globe/>
                </div>
                <Container fluid className='p-0 full-height'>
                    <Row className='h-100  justify-content-center align-items-center text-center  position-relative px-3'>
                        <Col>
                            <h1 className="fw-semibold mb-3 vision">Pi Protocol <span className="animated-gradient-text" style={{    background: "linear-gradient(93deg, #83BFFF 0.64%, #CAE2FF 42.8%, #4491E3 93.29%)"}}>Vision</span></h1>
                            <p className='max-width-700'>Create a decentralized aggregator infrastructure for stable coins with uncorrelated and transparent collateral to enable utility and maximize yield in a highly flexible and scalable manner</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Bubble/>
            <section className='section-padding '>
                <UnfairAdvantage/>
            </section>
        </motion.div>
    )
}

export default Vision;