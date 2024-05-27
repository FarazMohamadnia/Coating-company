import './SocialMedia.css'

// Icon import
import { FaInstagram , FaTiktok , FaFacebook , FaYoutube , FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Socialmedia(){
    AOS.init({
        delay:50
    })
    return(
        <div className="SocialMedia-body mt-4">
            <h2 className="font-style fw-bold text-center">SocialMedia</h2>
            <div className="SocialMedia-style my-4 ">
                <div data-aos="zoom-in">
                    <FaInstagram size={'2rem'} color='rgb(225 , 48, 108)'/>
                    <p className='fw-bold shadow'>Instagram</p>
                </div>
                <div data-aos="zoom-in">
                    <FaTiktok size={'2rem'} color='black'/>
                    <p className='fw-bold shadow'>Tiktok</p>
                </div>
                <div data-aos="zoom-in">
                    <FaSquareXTwitter size={'2rem'} color='black'/>
                    <p className='fw-bold shadow'>Twitter(X)</p>
                </div>
                <div data-aos="zoom-in">
                    <FaFacebook size={'2rem'} color='blue'/>
                    <p className='fw-bold shadow'>Facebook</p>
                    
                    
                </div>
                <div data-aos="zoom-in">
                    <FaLinkedin size={'2rem'} color='blue'/>
                    <p className='fw-bold shadow'>linkedin</p>
                </div>
                <div data-aos="zoom-in">
                    <FaYoutube size={'2rem'} color='red'/>
                    <p className='fw-bold shadow'>YouTube</p>
                </div>  
            </div>
        </div>
    )
}