import { useEffect } from 'react';
// import { isLoggedIn } from '../ownerLogin/ownerLogin'
import './dashboard.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';



export default function Dashboard(){
    const f = true
    const navigate = useNavigate();
    useEffect(()=>{
        if(!f){
            navigate('/');
        }
    },[]);

    return(
        <>
            <div>
                {
                    f?<div>bashe (dashbord camponent)</div>:<div> nabashe error 404</div>
                }
                
                
            </div>
        </>
    )
}