import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//react bootstrap
import {Col} from 'react-bootstrap'

// image
import img1 from '../../asset/PowderCoatingImage /powderImage1.jpeg'
import img2 from '../../asset/PowderCoatingImage /custompowder.jpeg'
import img3 from '../../asset/PowderCoatingImage /Arcpowder.jpeg'
import img4 from '../../asset/PowderCoatingImage /powderImage2.jpeg'
// import css file
import './Tabs.css'

function ControlledTabs() {
  const [key, setKey] = useState('Industrial Powder Coating');

  return (
    <div className='bg-dark tabs-size'>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Industrial Powder Coating" title="Industrial">
          <div className='d-md-flex'>
            <Col md='7'>
              <div className='m-2'>
                <h2 className='text-light'>Our high-volume automated coating line is well-equipped to address the powder coating needs of industries in the Mid-Atlantic region</h2>
                <p className='m-2'>The use of a Zirconium-based pre-treatment system for steel, aluminum, and galvanized parts suggests a commitment to providing optimal pre-treatment solutions.The automated powder coating booth is a standout feature, enabling quick color changes within 15 minutes. This capability not only enhances efficiency but also reduces the risk of contamination from previous colors. The flexibility in scheduling parts for coating is a valuable aspect, allowing us to meet specific delivery requirements for our clients.In summary, our coating line's focus on efficient pre-treatment, color change flexibility, and adaptability in scheduling makes it a competitive choice for industries in the Mid-Atlantic region seeking high-quality powder coating services.</p>
                <p>We have experience dealing with many different industrial and commercial coatings in industries such as:</p>
                <ul>
                  <li>Fiber optic controls</li>
                  <li>Communication equipment</li>
                  <li>Computer housings</li>
                  <li>Store displays</li>
                  <li>Motorcycle and automotive parts</li>
                  <li>Military</li>
                  <li>Ornamental fencing</li>
                  <li>Marine coatings</li>
                  <li>Architectural coatings</li>
                  <li>Fluoropolymer coatings</li>
                  <li>Intricate maskings for precision parts</li>
                </ul>
              </div>
            </Col>
            <Col md='5'>
              <div className='text-center w-100'>
                <img className='hight-image' src={img1}/>
              </div>
            </Col>
          </div>
        </Tab>
        <Tab eventKey="Custom Powder Coatings" title="Custom">
          <div className='d-md-flex'>
            <Col md='7'>
              <div className='m-2'>
                <h2 className='text-light'>Precision Craftsmanship: Tailored Custom Powder Coatings for Flawless Aesthetics and Specialized Masking Requirements</h2>
                <p className='m-2'>Whether you require flawless aesthetics or have specific masking requirements for your parts, our team possesses the experience and expertise to deliver custom powder coatings tailored to your needs. We understand the importance of precision and attention to detail in achieving the desired finish for your components.</p>
                <p>Our extensive track record includes successfully powder coating a variety of parts, showcasing our diverse capabilities. Some examples of the powder-coated parts we have handled include:</p>
                <ul>
                  <li>Motorcycle and automotive parts</li>
                  <li>Museum & tradeshow displays and exhibits</li>
                  <li>Military, aerospace, mil-spec</li>
                  <li>Marine and boating</li>
                  <li>Audio/video equipment</li>
                  <li>Intricate industrial parts with custom masking</li>
                  <li>Architectural power coatings</li>
                </ul>
                <p className='mt-2'>We have decades of experience in coating with many different types of powders to suit your needs including:</p>
                <ul>
                  <li>Metallics</li>
                  <li>Clear coatings including tinted clears</li>
                  <li>Textured coatings</li>
                  <li>Wrinkle finishes</li>
                  <li>Peel finishes</li>
                </ul>
                <p className='mt-2'>Whether you are an individual or a company, we can meet your needs for quality custom metal finishes.</p>
              </div>
            </Col>
            <Col md='5'>
              <div className='w-100 text-center'>
                <img className='hight-image' src={img2}/>
              </div>
            </Col>
          </div>
        </Tab>
        <Tab eventKey="Architectural Powder Coating" title="Architectural">
        <div className='d-md-flex'>
          <Col md='7'>
            <div className='m-2'>
              <h2 className='text-light'>Nucoating : Elevating Architectural Excellence with Two Decades of Unrivaled Powder Coating Mastery in the Mid-Atlantic</h2>
              <p className='m-2'>For more than two decades, Nucoat Coating has been a trusted provider of top-notch architectural powder coating and finishing services in the Mid-Atlantic region. Our commitment to quality is reflected in the durability, scratch resistance, and weather resistance that our coatings offer, ensuring that your architectural components maintain their integrity and appearance over the long term.</p>
              <p className='mb-2'>We take pride in offering a diverse selection of colors, glosses, finishes, and textures, providing you with a broad spectrum of options to meet your aesthetic preferences and project requirements. Whether your materials are steel, aluminum, or galvanized steel, our expertise in abrasive blasting and our meticulous five-stage pretreatment process are integral to achieving a lasting and high-quality finish.</p>
              <p>We specialize in powder coatings and fluoroploymer coatings and finishes for:</p>
              <ul>
                <li>Metal Doors & Frames</li>
                <li>Railings & Rails</li>
                <li>Steel Roofing, Decking & Platforms</li>
                <li>Stairs & Balconies</li>
                <li>Architectural Wrought Iron & Aluminum</li>
                <li>Fencing</li>
                <li>Light Fixtures & Light Poles</li>
                <li>Aluminum Extrusions</li>
                <li>Metal & Aluminum Fixtures</li>
                <li>Playground & Recreational Equipment</li>
                <li>Outdoor Seating</li>
              </ul>
              <p>At Nucoat Coating, we are dedicated to delivering excellence in architectural powder coating, and our decades-long experience speaks to our commitment to quality and customer satisfaction. Trust us to provide the enduring, high-quality finish your architectural projects demand.</p>
            </div>
          </Col>
          <Col md='5'>
            <div className='w-100 text-center'>
              <img className='hight-image' src={img3}/>
            </div>
          </Col>
        </div>
        </Tab>
        <Tab eventKey="Fluoropolymer Powder Coating" title="Fluoropolymer">
        <div className='d-md-flex'>
          <Col md='7'>
            <div className='m-2'>
              <h2 className='text-light'>Elevate Architectural Longevity: Unraveling the Superiority of Fluoropolymer Powder Coatings for Ultimate Durability and Protection</h2>
              <p className='m-2'>Fluoropolymer powder coatings stand out as the pinnacle of durability and longevity among architectural aluminum product coatings. With an unparalleled ability to withstand the test of time, these coatings offer exceptional corrosion resistance, effectively shielding architectural components from the damaging effects of environmental elements.</p>
              <p className='m-1'>One of the key advantages of fluoropolymer powder coatings is their remarkable resistance to abrasion, ensuring that surfaces remain intact and unmarred even in high-traffic areas or under harsh conditions. The coatings' resistance to chemicals, including solvents, acids, and bases, further enhances their protective qualities, making them an ideal choice for architectural applications where exposure to corrosive substances is a concern.</p>
              <p className='m-1'>Fluoropolymer coatings go beyond conventional protection by also exhibiting resistance to friction and galling. This attribute is particularly valuable in applications where moving parts or frequent contact are involved, contributing to the coatings' ability to maintain their integrity and functionality over an extended period.</p>
              <p>We are currently undergoing certification for the following products:</p>
              <ul>
                <li>Tiger Drylac series 58 powder</li>
                <li>Rohm & Haas Kynar powder</li>
                <li>Interpon D3000 series coatings</li>
                <li>Sherwin Williams Powdura Super-Durable powder</li>
              </ul>
              <p>For projects where longevity and performance are paramount, fluoropolymer powder coatings represent a superior choice, offering a comprehensive solution to the challenges posed by environmental and usage factors.</p>
            </div>
          </Col>
          <Col md='5'>
            <div className='w-100 text-center'>
              <img className='hight-image' src={img4}/>
            </div>
          </Col>
        </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabs;