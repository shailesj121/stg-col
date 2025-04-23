import { Button, Col, Row } from "react-bootstrap"


function Form(){
    return(
        <form>
    <div className="mb-4">
      <input type="text" className="form-control bg-gray2 text-white ph-text-gray rounded-0 border-0 p-3 ph-opacity-50" id="name" placeholder="Name" />
    </div>
    
    <div className="mb-4">
      <input type="email" className="form-control bg-gray2 text-white rounded-0 border-0 p-3 ph-opacity-50" id="email" placeholder="Email" />
    </div>

    <div className="mb-4">
      <input type="text" className="form-control bg-gray2 text-white ph-text-gray rounded-0 border-0 p-3 ph-opacity-50" id="company" placeholder="Company" />
    </div>
    
    
    <div className="mb-4">
      <textarea className="form-control  bg-gray2 rounded-0 text-white border-0 p-3 ph-opacity-50" id="message" rows="4" placeholder="message"></textarea>
    </div>
    
    <div className="glow-button-wrap justify-items-center ">
                <Button className="glow-button text-dark bg-light rounded-0  fw-semibold border-0 d-flex flex-column header-btn z-0">
                  <div className='overflow-hidden bg-light rounded-0 z-1 px-4 '>
                  <span className="label-up">Submit</span>
                  <span className="label-up">Submit</span>
                  </div>
                </Button>
              </div>
  </form>
    )
}


function Subscribe(event) {
  return(
    <Row>
      <Col lg={8} className="col-12 text-center text-sm-start">
    <form className="subscribe-form">
      <div className="bg-gray2 d-flex p-2 ps-3 rounded-2">

     <input type="email" className="form-control no-border-focus text-white  ph-text-gray rounded-0 bg-transparent border-0 p-0 ph-opacity-50" id="email" placeholder="Your Email" />
     <div className="glow-button-wrap justify-items-center text-center">
                <Button className="glow-button text-dark bg-light rounded-0  fw-semibold border-0 d-flex flex-column header-btn z-0">
                  <div className='overflow-hidden bg-light rounded-0 z-1 px-2 '>
                  <span className="label-up">Subscribe</span>
                  <span className="label-up">Subscribe</span>
                  </div>
                </Button>
              </div>
      </div>
      </form>
      </Col>
      </Row>
  )

  }

export default Form
export {Subscribe}