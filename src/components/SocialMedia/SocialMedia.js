import './SocialMedia.css'

// Icon import
import { FaInstagram , FaTiktok , FaPhoneSquare , FaFacebook} from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Socialmedia(){
    return(
        <div className="SocialMedia-body mt-4">
            <h2 className="font-style fw-bold text-center">SocialMedia</h2>
            <div className="SocialMedia-style my-4 ">
                <div>
                    <FaInstagram size={'2.5rem'} color='rgb(225 , 48, 108)'/>
                    <p className='fw-bold shadow'>Instagram</p>
                </div>
                <div>
                    <FaTiktok size={'2.5rem'} color='black'/>
                    <p className='fw-bold shadow'>Tiktok</p>
                </div>
                <div>
                    <FaPhoneSquare size={'2.5rem'} color='green'/>
                    <p className='fw-bold shadow'>Phone</p>
                </div>
                <div>
                    <FaFacebook size={'2.5rem'} color='blue'/>
                    <p className='fw-bold shadow'>Facebook</p>
                </div>
                <div>
                    <SiGmail size={'2.5rem'} color='red'/>
                    <p className='fw-bold shadow'>Email</p>
                </div>
            </div>
        </div>
    )
}