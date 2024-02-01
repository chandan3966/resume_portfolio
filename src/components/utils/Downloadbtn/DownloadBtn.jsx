import React from 'react'
import './DownloadBtn.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import DATA from '../../../data/resume.pdf'


function DownloadBtn() {
    const filePath = '/public/resume.pdf';
      
  return (
        <div className='downloadbtn'>
            <Link to={DATA} target="_blank" download>
                <Button variant="outline-secondary" >Download PDF</Button>{' '}
            </Link>
        </div>
      );
}

export default DownloadBtn