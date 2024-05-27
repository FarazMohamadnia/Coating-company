import './OwnerStoryCard.css'
import { IoCloseCircleOutline } from "react-icons/io5";
import { secretKey } from '../../../config/secData';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import axios from 'axios';
import { getStory } from '../../../config/api/apis';
import Swal from 'sweetalert2';


export default function OwnerStoryCard({_id , image1 , image2}){
    const Auth = Cookies.get('Authorization');
    
    
    const DeHashFunction = ()=>{
        const newsecretKey = secretKey;
        const bytes = CryptoJS.AES.decrypt(Auth , newsecretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedText
    }

    const checkDelete = ()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete the story?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteItem();
                setTimeout(() => {
                    window.location.reload();
                }, 4000);
            }
          });
    }

    const deleteItem =async()=>{
        const Token = DeHashFunction();

        const Response = await axios.delete(`${getStory}/${_id}`,{
            headers:{
                Authorization : Token
            }
        });
        if(Response.status == 201){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "Error!",
                text: "The story was not deleted",
                icon: "error"
              });
        }

    }
    return(
        <div className='Story-Owner-Card-section'>
            <p onClick={checkDelete} className='text-center'><IoCloseCircleOutline color='red' size={'2.5rem'}/></p>
            <div>
                <p className='mt-2'>Background image</p>
                <img src={image1}/>
                <p className='mt-2'>Image</p>
                <img src={image2}/>
            </div>
        </div>
    )
}