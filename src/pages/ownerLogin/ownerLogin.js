import axios from 'axios';
import { SendEmail , sendOwnerData} from '../../config/test/apiTest';
import './ownerLogin.css'
import { FaLockOpen } from "react-icons/fa6";
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

// lib
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import { secretKey } from '../../config/secData';
import jwt from 'jsonwebtoken';



export default function Login(){
    const navigate = useNavigate();
    const [data , setdata]=useState({}); 
    // use context config

    //hash function
    const encryptText = (text) => {
        const key = secretKey; 
        const encryptedText = CryptoJS.AES.encrypt(text, key).toString();
        return encryptedText;
      };
    const SendMail = async()=>{
        // getData()
        const response = await axios.post(SendEmail);
        if(response.status == 200){
            Swal.fire({
                title: "OK!!",
                text: "Email sent successfully",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "Error",
                text: 'It seems there might be an issue. Please try again later!!',
                icon: "error"
              });
        }
    }

    const GetData = (e)=>{
        const name = e.target.name 
        const value = e.target.value
        setdata({
            ...data  , [name] : value
        });
    }

    const sendData =async ()=>{
        const response = await axios.post(sendOwnerData , data);
        if(response.data.message == "owner is login"){
            const encryptedText = encryptText(response.data.Authorization);
            Cookies.set('Authorization', encryptedText, { expires: 15 });
            navigate('/owner/dashboard');
        }else{
            Swal.fire({
                title: "Error!!",
                text: "try again",
                icon: "error"
              });
        }
    }

    return(
        <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
            <div className="LoginCard">
              <div className="LoginCard2">
                <form className="Loginform">
                  <p id="LoginHeading">Login</p>
                  <div className="Loginfield">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      height="16"
                      width="16"
                      className="Login-input-icon"
                    >
                      <path
                        d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
                      ></path>
                    </svg>
                    <input
                        onChange={GetData}
                        name='username'
                        type="text"
                        className="Login-input-field"
                        placeholder="Username"
                        autocomplete="off"
                    />
                  </div>
                  <div className="Loginfield">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      height="16"
                      width="16"
                      className="Login-input-icon"
                    >
                      <path
                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                      ></path>
                    </svg>
                    <input onChange={GetData} name='password' type="password" className="Login-input-field" placeholder="Password" />
                  </div>
                  <div className="sending-mail Loginfield">
                    <input
                        onChange={GetData}
                        name='sendcode'
                        type="number"
                        className="Login-input-field"
                        placeholder="Code"
                        autocomplete="off"
                    />
                    <button onClick={SendMail} type='button' className='font-style fw-bold'>Send</button>
                  </div>
                  <button type='button' onClick={sendData} className="button3">Login <FaLockOpen /></button>
                </form>
              </div>
            </div>
            
        </div>
    )
}