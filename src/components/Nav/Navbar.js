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


function NavScrollExample() {
  return (
    <Navbar  expand="md" className="bg-body-nav">
      <Container fluid>
        <Navbar.Brand href="#"><img className='favicon-images-style' src={img}/></Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'rgba(255, 255, 255, 0.699)'}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-light' to={'/'}>Home <RiHomeGearFill /></Link>
            <Link className='text-light' to={'/getQuote'}>Get a Quote <GiPriceTag /></Link>
            <Link className='text-light' to={'/Color'}>Colors <IoMdColorPalette /></Link>
            <Link className='text-light' to={'/feedback'}>
                Feedback <FaRegCommentDots />
            </Link>
            <Link className='text-light' >
              Product <MdOutlineProductionQuantityLimits />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;