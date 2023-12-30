import React from 'react'
import Stack from 'react-bootstrap/Stack';
import SocialMedia from '../SocialMedia/SocialMedia';

import './Footer.css'

function Footer() {
  return (
    <div className='container'>
        <div className="left-items">
            <p className="headings">2023 by Sai Chandan.M <br/> Powered and Secured by <a href="https://www.google.com/">ReactJS</a></p>
        </div>
        <div className="right-items">
            <Stack direction="horizontal" gap={3}>
                <Stack gap={3}>
                    <div className="p-2">
                        <p className='headings'>Call <br />774-243-4965</p>
                    </div>
                    
                </Stack>
                <Stack gap={3}>
                    <div className="p-2">
                        <p className='headings'>Write <br/>saichandan.marri.ofus@gmail.com</p>
                    </div>
                    
                </Stack>
                <Stack gap={3}>
                    <div className="p-2">
                        <p className='headings'>Follow <br />
                            {
                                <div className="social-icons">
                                    <SocialMedia/>
                                </div>
                            }
                        </p>
                        
                    </div>
                    
                </Stack>
            </Stack>
        
        </div>
    </div>
  )
}

export default Footer