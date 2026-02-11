import React from 'react'
import Card from 'react-bootstrap/Card';
import './Listitem.css'
import Button from 'react-bootstrap/Button';
import HTMLRenderer from '../HTMLRenderer';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { useMediaQuery } from 'react-responsive';


function Listitem({type, res}) {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isLargeTablet = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 1280px)' });

    if(type === 'experience' || type === 'education'){
        return (
            <div className="card-container">
                <div className='content'>
                    <div className="space-btw">
                        <a className='hyperlink' href={res.companyurl} target='_blank'>{res.name}</a>
                        <p>{res.location}</p>
                    </div>
                    
                    <div className="space-btw">
                        <p className='role-text'>{res.role}</p>
                        <p>{res.startDate+ '-' + res.endDate}</p>
                    </div>

                    <ul>
                      {res.desc.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    
                    {/* <span>
                        <p className='desc-text'><HTMLRenderer htmlContent={res.desc}/></p>
                    </span> */}
                    {type === 'experience' && !isMobile && !(isTablet || isLargeTablet)? (
                        <Stack className='badge-stack' direction="horizontal" gap={2}>
                          {res.skills.map((item) => (
                            <Badge bg="secondary" key={item}>{item}</Badge>
                          ))}
                        </Stack>
                      ) : ''
                    }
                    {type === 'experience' && (isMobile || isLargeTablet || isTablet)? (
                        res.skills.map((item) => (
                          <Badge className='badge-tag' bg="secondary" key={item}>{item} </Badge>
                        ))
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
                      <a className='hyperlink' href={res.companyurl} target='_blank'>{res.name}</a>
                  </Stack>
                    <p>{res.location}</p>
                  </div>
                <div className="space-btw">
                    <p className='role-text'>{res.role}</p>
                    <p>{res.endDate}</p>
                </div>
                
                <ul>
                  {res.desc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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