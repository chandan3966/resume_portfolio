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



function Projects() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setAnimationStarted(true);
  }, []);

  return (
    <div className="projects-container">
      <div className={`animated-component ${animationStarted ? 'animate' : ''}`}>
        <div class="yellow-rectangle-new_projects"/>
        <h1>Projects i've worked on ... </h1>
      </div>

      <div className="grid">
        <Grid item xs={3}>
          <Grid container justifyContent="center" spacing={8}>
            {projects.items.map((value) => (
              <Grid className='grid-item' key={value.name} item>
                <Card  sx={{ maxWidth: 345, bgcolor: 'white',}}>
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
                      </div>
                      
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
     
    </div>
  )
}

export default Projects