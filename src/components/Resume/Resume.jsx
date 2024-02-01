import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DownloadBtn from '../utils/Downloadbtn/DownloadBtn'
import './Resume.css'
import List from '../utils/List/List';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

// https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hackerrank.com&size=64

function Resume() {
  const [key, setKey] = useState('experience');
  const [animationStarted, setAnimationStarted] = useState(false);

  const [experience, setExperience] = useState(null);
  const [education, setEducation] = useState(null);
  const [achievements, setAchievements] = useState(null);
  const [certifications, setCertifications] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url,value) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url,{
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
          // Add any other headers here
        }
      });
      if(value === 1){
        setExperience(response.data.data.docs)
      }
      else if(value === 2){
        setEducation(response.data.data.docs)
      }
      else if(value === 3){
        setAchievements(response.data.data.docs)
      }
      else{ 
        setCertifications(response.data.data.docs)
      }
    } catch (error) {
      setError('Fetching data failed');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setAnimationStarted(true);
    fetchData('https://stark-thicket-60808-86ea69a777ed.herokuapp.com/api/v1/experience',1)
    fetchData('https://stark-thicket-60808-86ea69a777ed.herokuapp.com/api/v1/education',2)
    fetchData('https://stark-thicket-60808-86ea69a777ed.herokuapp.com/api/v1/achievement',3)
    fetchData('https://stark-thicket-60808-86ea69a777ed.herokuapp.com/api/v1/certification',4)

  }, []);

  return (
    <div className="resume-container">

      <div className={`animated-component-new ${animationStarted ? 'animate-new' : ''}`}>
        {
          key === 'experience' ? <div class="yellow-rectangle_new" style={{ height: 1000}}/>:
          key === 'education' ? <div class="yellow-rectangle_new" style={{ height: 1200}}/>:
          key === 'achievements' ? <div class="yellow-rectangle_new" style={{ height: 1000}}/>:
          key === 'certifications' ? <div class="yellow-rectangle_new" style={{ height: 2500}}/>: ''
        }
        {/* <div class="yellow-rectangle_new" style={{ height: calculatedHeight}}/> */}
        
      </div>
    
      <div className="content">
        <div className="button_container">
          <DownloadBtn/>
        </div>
        <Tabs
          id="controlled-tab-example"
          defaultActiveKey="experience"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="experience" title="Experience">
            <div className="tab-content">
              {experience ? <List data = {experience}>  </List>: 
              <Spinner className='inner_spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              }
            </div>
          </Tab>
          <Tab eventKey="education" title="Education">
            <div className="tab-content">
              {education ? <List data = {education}>  </List>: 
              <Spinner className='inner_spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              }
            </div>
          </Tab>
          <Tab eventKey="achievements" title="Achievements">
            <div className="tab-content">
              {achievements ? <List data = {achievements}>  </List>: 
              <Spinner className='inner_spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              }
            </div>
          </Tab>
          <Tab eventKey="certifications" title="Certifications">
            <div className="tab-content">
              {certifications ? <List data={certifications}></List>: 
              <Spinner className='inner_spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
                }
            </div>
          </Tab>
        </Tabs>
      </div>
      
    </div>
  )
}

export default Resume