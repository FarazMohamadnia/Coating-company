import './des.css'
import img1 from '../../asset/desImage/blacklogo.jpg'
import img2 from '../../asset/desImage/whitelogo.jpg'
import Container from 'react-bootstrap/esm/Container'
// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Des(){
    return(
        <>
            <div className='Des-body'>
            <h2 className='m-auto mt-3 border-bottom text-light fw-bold font-style'>mavared estefade</h2>
            <Container>
                <div className='Des-section' data-aos="fade-top" >
                    <span className='Des-section-span'><img src={img2} /></span>
                    <div className='Des-text-Body'>
                        <h3>tozih</h3>
                        <p>lorem ipson mmmmmmmmm skjdjsdksdksdskdkjsskjds kaehjlehrke karwhrw4 fhelhwlhlhekkcnelf lekhghlw lskdhglw4hg wlelwlhw flkhlskrgwlr  hgfhsfhjsfgjsgf kfksjfdjkfgkdjfjkdf kdfkdfjdkfdfkdfkgd kdfhkjfhdkjfkdhfkjdhf </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='Des-section-right Des-section' data-aos="fade-bottom">
                        <span className='Des-right-section'><img src={img1} /></span>
                        <div className='Des-text-right-Body'>
                            <h3>tozih</h3>
                            <p>lorem ipson mmmmmmmmm</p>
                        </div>
                    </div>
                </div>
                <div className='Des-section' data-aos="fade-top">
                    <span className='Des-section-span'><img src={img2} /></span>
                    <div className='Des-text-Body'>
                        <h3>tozih</h3>
                        <p>lorem ipson mmmmmmmmm</p>
                    </div>
                </div>
                </Container>
            </div>
        </>
    )
}