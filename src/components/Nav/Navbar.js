import './Navbar.css'


//react bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// react icon 
import { RiHomeGearFill } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdColorPalette } from "react-icons/io";
import { Link } from 'react-router-dom';

// import logo image
import img from '../../asset/Logo/nucoatingLogo.jpg'
import { NavDropdown, Offcanvas } from 'react-bootstrap';


function NavScrollExample() {
  return (
    <Navbar  expand="lg" className="bg-body-nav bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand><img className='favicon-images-style' src={img}/></Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'rgba(255, 255, 255, 0.699)'}}  aria-controls={`offcanvasNavbar-expand-${'lg'}`}/>
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                  Nucoating.com
                </Offcanvas.Title>
              </Offcanvas.Header>
        <Offcanvas.Body className='h-100 color-lg-white'>
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            // navbarScroll
          >
            <Link className='text-light text-decoration-none' to={'/'}>Home <RiHomeGearFill /></Link>
            <Link className='text-light text-decoration-none' to={'/getQuote'}>Request a Quote <GiPriceTag /></Link>
            <Link className='text-light text-decoration-none' to={'/Color'}>Colors <IoMdColorPalette /></Link>
            <Link className='text-light text-decoration-none' to={'/feedback'}>
              Review <FaRegCommentDots />
            </Link>
            <Link className='text-light text-decoration-none' >
              Product <MdOutlineProductionQuantityLimits />
            </Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item>
                Contactus@nucoating.com
              </NavDropdown.Item>
              <NavDropdown.Item>
                Quoterequest@nucoating.com
              </NavDropdown.Item>
              <NavDropdown.Item>
                Phone number
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;