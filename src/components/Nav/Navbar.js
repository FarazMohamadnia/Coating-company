import './Navbar.css'


//react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// react icon 
import { RiHomeGearFill } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function NavScrollExample() {
  return (
    <Navbar  expand="md" className="bg-body-nav">
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'rgba(255, 255, 255, 0.699)'}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' href="#action1">Home <RiHomeGearFill /></Nav.Link>
            <Nav.Link className='text-light' href="#action2">gheymat <GiPriceTag /></Nav.Link>
            <Nav.Link className='text-light' href="#">
                product <MdOutlineProductionQuantityLimits />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;