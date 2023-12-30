import React from 'react'
import Card from 'react-bootstrap/Card';
import './Listitem.css'
import Button from 'react-bootstrap/Button';
import HTMLRenderer from '../HTMLRenderer';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


function Listitem({type, res}) {
    if(type === 'experience' || type === 'education'){
        return (
            <div className="card-container">
                <div className='content'>
                    <div className="space-btw">
                        <a className='hyperlink' href={res.companyurl} target='_blank'>{res.name}</a>
                        <p>{res.location}</p>
                    </div>
                    
                    <div className="space-btw">
                        <h5>{res.role}</h5>
                        <p>{res.startDate+ '-' + res.endDate}</p>
                    </div>
                    
                    <span>
                        <p><HTMLRenderer htmlContent={res.desc}/></p>
                    </span>
                    {type === 'experience' ? (
                        <Stack direction="horizontal" gap={2}>
                          {res.skills.map((item) => (
                            <Badge bg="secondary" key={item}>{item}</Badge>
                          ))}
                        </Stack>
                      ) : ''
                    }
                    
                </div>
            </div>
          )
    }
    else if(type === 'certifications' || type === 'achievements'){
      return (
        <div className="card-container">
            <div className='content'>
            
                  <div className="space-btw">
                  <Stack direction="horizontal" gap={3}>
                      <div className="p-2"><Image className='icon-img' src={res.image} rounded /></div>
                      <div className="p-2"><h2>{res.name}</h2></div>
                  </Stack>
                    <p>{res.location}</p>
                  </div>
                <div className="space-btw">
                    <h5>{res.role}</h5>
                    <p>{res.endDate}</p>
                </div>
                
                <span>
                    <p><HTMLRenderer htmlContent={res.desc}/></p>
                </span>
                <Button href={res.redirecturl} target="_blank" variant="link">View Certificate</Button>
            </div>
        </div>
      )
    }
  return (
    <>
     <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
           <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </>
  )
}

export default Listitem