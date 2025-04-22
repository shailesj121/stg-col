import { Container, Row, Col } from "react-bootstrap";
import Bubble from "../components/bubble";
import Form from "../components/form";
import { motion } from 'framer-motion';

function Contact(){
    return(
        <motion.div  initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="main">
        <section className="mt-5 pt-1">
            <Container  className='mt--5 pt-3 p-0'>
                    <Bubble/>
                <Row className='mt-0 mt-md-5 pt-5   position-relative p-2'>
                    <div className="col-0 col-sm-6  my-3 my-sm-0">
                        <h1 className="fw-semibold text-start contact">Get in Touch <br/><span style={{ background: "linear-gradient(93deg, #83BFFF 0.64%, #CAE2FF 42.8%, #4491E3 93.29%)"}}>with Us</span></h1>
                    </div>
                    <div className="col-0 col-sm-6">
                        <Form />
                    </div>
                </Row>
            </Container>
        </section>
    </motion.div>
    )
}
export default Contact