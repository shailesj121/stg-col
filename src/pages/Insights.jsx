import { Container, Row, Col } from "react-bootstrap";
import Bubble from "../components/bubble";
import { motion } from 'framer-motion';


function Insights() {
  return (
    <motion.div  initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }} className="main">
    <section className="my-md-5 py-md-5">   
        <Container fluid className='p-0 my-5 pt-5'>
            <Row className='h-100 justify-content-center align-items-center text-center  position-relative mt-5 pt-5'>
                <Col>
                    <Bubble/>
                    <h1 className="fw-semibold hero-h1 max-width-700 vision">Stay tuned for <span className="animated-gradient-text" style={{    background: "linear-gradient(93deg, #83BFFF 0.64%, #CAE2FF 42.8%, #4491E3 93.29%)"}}> industry updates and events</span></h1>
                </Col>
            </Row>
        </Container>
    </section>
</motion.div>
  );
}   

export default Insights;