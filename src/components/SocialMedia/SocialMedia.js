import './SocialMedia.css'

// Icon import
import { FaInstagram , FaTiktok , FaFacebook , FaYoutube , FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Socialmedia(){
    AOS.init({
        delay:50
    })
    return(
        <div className="SocialMedia-body mt-4">
            <h2 className="font-style fw-bold text-center">SocialMedia</h2>
            <div className="SocialMedia-style my-4 ">
                <div data-aos="zoom-in">
                <Link to={'https://www.instagram.com/nucoat_coating?igsh=NWw0N3hrdXRyajhp'}>
                    <FaInstagram size={'2rem'} color='rgb(225 , 48, 108)'/>
                    <p className='fw-bold shadow'>Instagram</p>
                </Link>
                </div>
                <div data-aos="zoom-in">
                <Link to={'https://www.facebook.com/profile.php?id=61560519038900'}>
                    <FaFacebook size={'2rem'} color='blue'/>
                    <p className='fw-bold shadow'>Facebook</p>
                </Link>
                </div>
                <div data-aos="zoom-in">
                <Link to={'https://www.youtube.com/@NucoatCoating'}>
                    <FaYoutube size={'2rem'} color='red'/>
                    <p className='fw-bold shadow'>YouTube</p>
                </Link>
                </div>  
            </div>
        </div>
    )
}