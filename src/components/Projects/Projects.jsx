import React, { useEffect, useState } from 'react';
import './Projects.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import projects from '../../data/projects.json'
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Loader } from 'rsuite';
import Spinner from 'react-bootstrap/Spinner';


function Projects() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    // Trigger the animation after the component is mounted
    axios.get('https://stark-thicket-60808-86ea69a777ed.herokuapp.com/api/v1/project',{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        // Add any other headers here
      }
    })
      .then(response => {
        setData(response.data.data.docs);
        setAnimationStarted(true);

        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.error("Error fetching data: ", error.message);
      })
      
  }, []);

  const spinner = 
  <div className='spinner_container'>
    <Spinner className='inner_spinner' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div> ;

  // if (isLoading) {
  //   return spinner;
  // }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className="projects-container">
      <div className={`animated-component-projects ${animationStarted ? 'animate-projects' : ''}`}>
        <div class="yellow-rectangle-new_projects"/>
        <h1>Projects crafted by my Hands 🙌 </h1>
      </div>

      <div className="grid">
        {
          data? <Grid item xs={3}>
          <Grid container justifyContent="center" spacing={8}>
            {data.map((value) => (
              <Grid className='grid-item' key={value.name} item>
                <Card  sx={{ maxWidth: 345, bgcolor: 'white',cursor: 'pointer'}}>
                  <CardActionArea className='card_content'>
                    <CardMedia
                      className='card-image'
                      component="img"
                      image={value.imageurl}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.shortdesc}
                      </Typography>
                      <div className="project-buttons">
                        {value.document !== '' ? <Button href={value.document} target="_blank" variant="link" >View GitHub</Button>: ''}
                        {value.producturl !== '' ? <Button href={value.producturl} target="_blank" variant="link" >View Product</Button>: ''}
                        {value.producturl === '' && value.document === ''? <Button variant="text" >Company Confidential</Button>: ''}
                      </div>
                      
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
              </Grid>: spinner
        }
        
      </div>
     
    </div>
  )
}

export default Projects