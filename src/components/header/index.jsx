import { Link } from 'react-router-dom'; // Add this import
import { Navbar, Nav, Container, NavDropdown, Button, Image } from 'react-bootstrap';
import { NavLink as RouterNavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { useState } from 'react';

function Header() {

  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar
  };

  return (
    <Navbar expanded={expanded} expand="xl" fixed="top" className='mt-3'>
      <Container fluid className='header bg-dark rounded-5 py-2 px-2 px-lg-3'>
        <Navbar.Brand as={Link} to="/" className='p-0 m-0'>
          <Image
            src="src/assets/images/piprotocol.svg"
            width="170"
            alt="Pi Protocol"
            className='brand-logo'
          />
        </Navbar.Brand>

        {/* <Navbar.Toggle aria-controls="main-navbar"/> */}

        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="main-navbar">
          {/* Nav Links */}
          <Nav className="ms-auto me-auto align-items-center text-gray p-3 p-xl-0">
            <RouterNavLink
              as={Link}
              to="/"
              className='text-gray nav-link w-100'
              end
              onClick={handleNavClick}
            >
              Home
            </RouterNavLink>
            <RouterNavLink
              as={Link}
              onClick={handleNavClick}
              to="/vision"
              className='text-gray nav-link  w-100'
            >
              Vision
            </RouterNavLink>
            <RouterNavLink
              as={Link}
              onClick={handleNavClick}
              to="/insights"
              className='text-gray nav-link  w-100'
            >
              Insights
            </RouterNavLink>

            <NavDropdown title="Community" id="community-dropdown" className='text-gray  w-100'>
              <NavDropdown.Item href="https://x.com/piprotocol" target="_blank" className='bg-dark ps-3 pe-5 py-2 border-bottom-gray-custom '>X (Twitter)</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/company/piprotocol/" className='bg-dark ps-3 pe-5 py-2 border-bottom-gray-custom' target="_blank">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://discord.com/invite/8B5jWdbKSg" className='bg-dark ps-3 pe-5 py-2 border-bottom-gray-custom' target="_blank">Discord</NavDropdown.Item>
              <NavDropdown.Item href="https://t.me/Piprotocol_official" className='bg-dark ps-3 pe-5 py-2' target="_blank">Telegram</NavDropdown.Item>
            </NavDropdown>

            <RouterNavLink
              as={Link}
              onClick={handleNavClick}
               target="_blank"
              to="https://docs.piprotocol.com/docs/Overview/introduction/"
              className='text-gray nav-link  w-100'
            >
              Documentation
            </RouterNavLink>

          </Nav>
        </Navbar.Collapse>
        {/* Button */}
        <Nav.Link as={Link} to="/contact" className="p-0">
          <div className="glow-button-wrap">
            <Button className="glow-button text-dark bg-light rounded-5 fw-semibold border-0 d-flex flex-column header-btn z-0">
              <div className='overflow-hidden bg-light rounded-5 z-1 '>
                <span className="label-up">Start Exploring</span>
                <span className="label-up">Start Exploring</span>
              </div>
            </Button>
          </div>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
