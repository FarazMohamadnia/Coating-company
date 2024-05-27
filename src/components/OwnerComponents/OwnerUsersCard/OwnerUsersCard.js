import { Button } from 'react-bootstrap'
import './OwnerUsersCard.css'
import { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';
import { getUsersData } from '../../../config/api/apis';
import { secretKey } from '../../../config/secData';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';


export default function UsersCard({ _id , firstName , lastName ,
    email , phoneNumber , jobDescription , details}){

        const Auth = Cookies.get('Authorization');
        const [openImage , setopenImage]= useState(false);

        const openModal = ()=>{
            if(!openImage){
                setopenImage(true);
            }else{
                setopenImage(false);
            }
        }
        
        const deleteusers =async()=>{
            const newsecretKey = secretKey;
            const bytes = CryptoJS.AES.decrypt(Auth , newsecretKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
            const response = await axios.delete(`http://localhost:1200/api/users/${_id}` , {headers :{
                Authorization : decryptedText
            }})
            console.log(response)
            if(response.data.message === 'User deleted successfully'){
                Swal.fire({
                    title: "Deleted Users!",
                    text: "User deleted successfully",
                    icon: "success"
                  });
            }else{
                Swal.fire({
                    title: "Error",
                    text: "Users has not been deleted.",
                    icon: "error"
                  });
            }
        }
        const deleteItem =()=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    deleteusers();
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                }
              });
        }

    return(
        <>
            <div className='users-card-owner-container'>
            <p onClick={deleteItem} className='w-100 text-center'><IoCloseCircleOutline size={'2.5rem'} color='red'/></p>
                <p>firstName : <span>{firstName}</span></p>
                <hr/>
                <p>lastName : <span>{lastName}</span></p>
                <hr/>
                <p>email : <span>{email}</span></p>
                <hr/>
                <p>phoneNumber : <span>{phoneNumber}</span></p>
                <hr/>
                <p>jobDescription : </p>
                <p>{jobDescription}</p>
                <hr/>
                <p>quantity:<span>{details[0].quantity}</span></p>
                <p>color:<span>{details[0].color}</span></p>
                <p>dimensions:<span>{details[0].dimensions}</span></p>
                <p>weight:<span>{details[0].weight}</span></p>
                {details[0].photo != "" ? <Button onClick={openModal} className='w-100 text-center'>See photo</Button> : 'There is no photo'}
            </div>
            <div className={`${openImage ? 'd-block users-image-sending': 'd-none'} 'users-image-sending'`}>
            <span onClick={openModal}><IoCloseCircleOutline size={'2.5rem'} color='white'/></span>
                <div className='d-flex w-100 h-100 align-items-center justify-content-center'>
                    <img src={details[0].photo}/>
                </div>
            </div>
        </>
    )
}