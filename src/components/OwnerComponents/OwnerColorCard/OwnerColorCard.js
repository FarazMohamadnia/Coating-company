import axios from 'axios';
import './OwnerColorCard.css'
import { TiDelete } from "react-icons/ti";
import { getColorData } from '../../../config/api/apis';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { secretKey } from '../../../config/secData';

export default function OwnerColorCard({title , description, type , colorCode , Photo , _id}){
    const Auth = Cookies.get('Authorization');

    const DeHashFunction = ()=>{
        const newsecretKey = secretKey;
        const bytes = CryptoJS.AES.decrypt(Auth , newsecretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedText
    }

    const deleteItem =async ()=>{
        const Token = DeHashFunction()
        const response = await axios.delete(`${getColorData}/${_id}` ,{
            headers:{
                Authorization : Token
            }
        });

        console.log(response)

        if(response.status == 202){
            Swal.fire({
                title: "Deleted !!",
                text: "deleted succesful ",
                icon: "success"
              });
              setTimeout(() => {
                window.location.reload()
              }, 3000);
        }else{
            Swal.fire({
                title: "Deleted !!",
                text: "deleted successful ",
                icon: "error"
              });
        }
    }
    return(
        <div className="Owner-Color-Card-container">
            <p onClick={deleteItem} className='text-center'><TiDelete size={'2.5rem'} color='red'/></p>
            <div>
                <p>Title : {title}</p>
                <p>Type : {type}</p>
                <p>Color Code : {colorCode}</p>
            </div>
            <div>
                <p>Text : {description}</p>
                <img src={Photo}/>
            </div>
        </div>
    )
}