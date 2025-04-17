import { Container } from "react-bootstrap";

function Nopage(){
    return (
        <Container>
            <div className="text-center mt-5 pt-5">
                <h1 className="display-1">404</h1>
                <h2 className="mt-3">Page Not Found</h2>
                <p className="mt-3">The page you are looking for does not exist.</p>
            </div>
        </Container>
    )
}

export default Nopage;