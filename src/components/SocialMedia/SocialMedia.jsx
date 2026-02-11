import React from 'react'
import './SocialMedia.css'
import Stack from 'react-bootstrap/Stack';
import facebook from '../assets/facebook.webp'
import instagram from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'
import twitter from '../assets/twitter.webp'


function SocialMedia() {
  return (
    <Stack className='social-stack' direction="horizontal" gap={0}>
        <a href="https://www.facebook.com/marri.saichandan.10" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Description of the image"/>
        </a>
        <a href="https://www.instagram.com/chand3966ms/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Description of the image"/>
        </a>
        <a href="https://www.linkedin.com/in/sai-chandan-m-92a102185/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Description of the image"/>
        </a>
        <a href="https://twitter.com/Mar31713Sai" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Description of the image"/>
        </a>
    </Stack>
  )
}

export default SocialMedia