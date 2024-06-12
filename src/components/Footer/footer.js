import { Col } from 'react-bootstrap'
import './footer.css'
import { Link } from 'react-router-dom'

// icon 
import { IoIosColorPalette } from "react-icons/io";
import { FaInstagram , FaFacebook , FaTiktok , FaTwitter,FaPhoneSquare ,FaLinkedin , FaYoutube , FaHome , FaMailBulk , FaSearchLocation} from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";




export default function Footer(){
    return(
        <>
            <div className='footer-container d-flex d-md-flex d-sm-flex flex-wrap justify-content-between'>
                <Col className='' sm={4} md={5} >
                    <p className='font-style fw-bold'>Social Networks</p>
                    <Link to={'/'}><FaInstagram />-Instagram</Link>
                    <Link to={'/'}><FaTiktok />-Tiktok</Link>
                    <Link to={'/'}><FaFacebook />-Facebook</Link>
                    <Link to={'/'}><FaTwitter />-X(twitter)</Link>
                    <Link to={'/'}><FaLinkedin />-linkedin</Link>
                    <Link to={'/'}><FaYoutube />-YouTube</Link>
                </Col>
                <Col className='' sm={4} md={4}>
                    <p className='font-style fw-bold'>Routes</p>
                    <Link to={'/'}><FaHome />-Home</Link>
                    <Link to={'/getQuote'}><IoIosPricetags />-Request a Quote</Link>
                    <Link to={'/feedback'}><VscFeedback />-Review</Link>
                    <Link to={'/Color'}><IoIosColorPalette />-Colors</Link>
                    <Link to={'/'}><MdOutlineProductionQuantityLimits />-Product </Link>
                </Col>
                <Col className='' sm={4} md={3}>
                <p className='font-style fw-bold'>Contact us</p>
                    <Link ><FaMailBulk />1-Contactus@nucoating.com</Link>
                    <Link ><FaMailBulk />2-Quoterequest@nucoating.com</Link>
                    <Link ><FaPhoneSquare />1-Phone number: 4435376383</Link>
                </Col>
                <Col sm={12}>
                    <p className='ms-2'><FaSearchLocation />-Address : 7377 Washington Boulevard suite 105, Elkridge, Maryland 21075</p>
                </Col>
            </div>
            <div className='Footer-description'>
                <p>
                    This website has been custom-designed for the nucoating team.
                </p>
            </div>
        </>
    )
}