import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Resume.css'
import List from '../utils/List/List';
import DATA from '../../data/experiences'
import DATA_EDU from '../../data/education.json'
import DATA_CERT from '../../data/certifications.json'
import DATA_ACHE from '../../data/achievements.json'


// https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hackerrank.com&size=64

function Resume() {
  const [key, setKey] = useState('experience');

  return (
    <div className="resume-container">
      <div className="content">
        <Tabs
          id="controlled-tab-example"
          defaultActiveKey="experience"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="experience" title="Experience">
            <div className="tab-content">
              <List data = {DATA}>  </List>
            </div>
          </Tab>
          <Tab eventKey="education" title="Education">
            <div className="tab-content">
            <List data = {DATA_EDU}>  </List>
            </div>
          </Tab>
          <Tab eventKey="achievements" title="Achievements">
            <div className="tab-content">
              <List data = {DATA_ACHE}>  </List>
            </div>
          </Tab>
          <Tab eventKey="certifications" title="Certifications">
            <div className="tab-content">
              <List data={DATA_CERT}></List>
            </div>
          </Tab>
        </Tabs>
      </div>
      
    </div>
  )
}

export default Resume