import './Pcolor.css';


export default function Pcolor(data){
    const{color , backgroundcolor} = data;

    return(
        <div>
            <div className="button-color" style={{background:`linear-gradient(to top right, black , ${backgroundcolor} , black 100%)`}}>
                <p className='fw-bold'>{color}</p>
                <span style={{backgroundColor:backgroundcolor , boxShadow: `0px 0px 10px 3px ${backgroundcolor}`}}></span>
            </div>
        </div>
    )
}