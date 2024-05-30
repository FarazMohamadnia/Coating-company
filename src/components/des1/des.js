import './des.css'
import img1 from '../../asset/desImage/construction.jpeg'
import img2 from '../../asset/desImage/car1.jpeg'
import img3 from '../../asset/desImage/Industrial.jpeg'
import img4 from '../../asset/desImage/Fluoropolymers.jpeg'
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
            <h2 className='m-auto mt-3 border-bottom text-light fw-bold font-style'>Categories</h2>
            <Container>
                <div className='Des-section' data-aos="fade-top" >
                    <span className='Des-section-span'><img src={img2} /></span>
                    <div className='Des-text-Body'>
                        <h2>Automotive</h2>
                        <p className='fs-5'>Powder coating is the best option for any car parts . For example, rims, head cover gasket and etc .with these colors you can have the best quality and make it rust proof.</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='Des-section-right Des-section' data-aos="fade-bottom">
                        <span className='Des-right-section'><img src={img1} /></span>
                        <div className='Des-text-right-Body'>
                            <h2>Construction</h2>
                            <p className='fs-5'>
                                The best option for all kinds of cabinet fences and building iron components is powder coating colors , which has a very high durability and preserves itself for a long time. For example, it can be used for iron fences with a wide variety of colors, which are resistant to water and impact, and you will not need to repair them whenever you do not intend to change the color yourself. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='Des-section' data-aos="fade-top">
                    <span className='Des-section-span'><img src={img3} /></span>
                    <div className='Des-text-Body'>
                        <h2> Industrial </h2>
                        <p className='fs-5'>
                            These days, high durability colors are very important for industrial products, and one should use a color that can withstand harsh and high impact of industrial conditions.
                            More important than that is the speed of work execution, which is very important in industrial jobs, which makes powder coating colors an attractive option for this work. For industrial jobs, there are various colors that can be used according to your needs. Industrial businesses need to use powder coating colors because of their strength and high quality, and using old colors for industrial businesses is not very economical and has no economic justification.
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='Des-section-right Des-section' data-aos="fade-bottom">
                        <span className='Des-right-section'><img src={img4} /></span>
                        <div className='Des-text-right-Body'>
                            <h2>Fluoropolymers</h2>
                            <p className='fs-5'>
                                also known as perfluoropolymers, are a family of high-performance plastics that are based on fluorocarbons and contain multiple carbon-fluorine bonds. They are versatile due to their unique atomic structure, which gives them a range of desirable properties, including:
                                Chemical resistance: They are highly resistant to solvents, acids, and bases
                                Thermal stability: They are stable in their environment and don't degrade into other PFAS
                                Electrical properties: They have electrical insu
                            </p>
                        </div>
                    </div>
                </div>
                </Container>
            </div>
        </>
    )
}