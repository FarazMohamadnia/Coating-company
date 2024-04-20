import './des.css'
import img1 from '../../asset/delete/pixlr-image-generator-66b1a575-c32a-4ab7-8257-06a0fa1899fd.png'
import Container from 'react-bootstrap/esm/Container'
export default function Des(){
    return(
        <>
            <div className='Des-body'>
            <h2 className='m-auto'>mavared estefade</h2>
            <Container>
                <div className='Des-section' >
                    <span className='Des-section-span'><img src={img1} /></span>
                    <div className='Des-text-Body'>
                        <h3>tozih</h3>
                        <p>lorem ipson mmmmmmmmm skjdjsdksdksdskdkjsskjds kaehjlehrke karwhrw4 fhelhwlhlhekkcnelf lekhghlw lskdhglw4hg wlelwlhw flkhlskrgwlr  hgfhsfhjsfgjsgf kfksjfdjkfgkdjfjkdf kdfkdfjdkfdfkdfkgd kdfhkjfhdkjfkdhfkjdhf </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='Des-section-right Des-section'>
                        <span className='Des-right-section'><img src={img1} /></span>
                        <div className='Des-text-right-Body'>
                            <h3>tozih</h3>
                            <p>lorem ipson mmmmmmmmm</p>
                        </div>
                    </div>
                </div>
                <div className='Des-section'>
                    <span className='Des-section-span'><img src={img1} /></span>
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