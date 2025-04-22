import { Container, Row, Col, Image } from "react-bootstrap"


function Bubble(){
    return(
        <Container className="position-relative d-block z-n1">
        <Row  className="position-absolute w-100">
            <Col className="text-start">
                <Image src="/assets/images/bubble-1.webp" width={200} height={200} className="animate-bubble-1"/>
            </Col>
            <Col className="text-end">
                <Image src="/assets/images/bubble-1.webp" width={300} height={300} className="animate-bubble-2"/>
            </Col>
        </Row>
    </Container>
    )
}

export default Bubble