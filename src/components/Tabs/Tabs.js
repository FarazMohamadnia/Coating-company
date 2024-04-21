import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
        className="mb-3 "
      >
        <Tab eventKey="Industrial Powder Coating" title="Industrial">
          <h2 className='text-light'>Tab content for Industrial Powder Coating</h2>
        </Tab>
        <Tab eventKey="Custom Powder Coatings" title="Custom">
          <h2>Tab content for Custom Powder Coatings</h2>
        </Tab>
        <Tab eventKey="Architectural Powder Coating" title="Architectural">
          <h2>Tab content for Architectural Powder Coating</h2>
        </Tab>
        <Tab eventKey="Fluoropolymer Powder Coating" title="Fluoropolymer">
          <h2>Tab content for Architectural Powder Fluoropolymer Powder Coating</h2>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabs;