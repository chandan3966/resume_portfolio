import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import './Home.css'
import chandan from '../assets/chandan.png'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';



function Home(props) {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setAnimationStarted(true);
  }, []);
  

  return (
    <div className="home-container">
      <div className={`animated-component ${animationStarted ? 'animate' : ''}`}>
        <div class="yellow-rectangle"/>
      </div>

      <div className={`info-container ${animationStarted ? 'animate-data' : ''}`}>
        <Stack direction='horizontal' gap={2}>
          <div class="card-view">
            <div class="card">

                <div className="self_img">
                  <img src={chandan} alt="Avatar"/> 
                </div>
                
                <h3>Sai Chandan Marri</h3>

                <div className="hr"></div>

                <h5>Developer Profile</h5>

                <SocialMedia></SocialMedia>

            </div>
          </div>

          <div className="text-view">
            <div className="content">
              <Stack gap={3}>
                <h1 className='work-title'>Hello, I'm Sai Chandan Marri</h1>
                <h5 className='work-subtitle'>Here is my work and what i do</h5>
                <div className="buttons">
                  <Button variant="outline-secondary" as={Link} to="/resume">View Resume</Button>{' '}
                  <Button variant="outline-secondary" as={Link} to="/projects">View Projects</Button>{' '}
                </div>
                <p className="work-desc">
                  I am a professional developer skilled at developing websites and android apps in various technology stacks. With several years of experience,
                  I have worked on various projects ranging from e-commerce websites to healthcare applications.
                  I am passionate about creating clean, responsive and user-friendly designs that cater to the needs of the client and the end-users.
                </p>
              </Stack>
            </div>
          </div>
        </Stack>
      </div>
      
      
    </div>
  )
}

Home.propTypes = {}

export default Home
