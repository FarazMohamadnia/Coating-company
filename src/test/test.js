import axios from "axios";



export default function getData() {
    axios.get('http://localhost:1200/api/users')
    .then(response => {
      console.log(response);
      console.log('faraz'); 
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
}

getData()
