import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects';
import './App.css'
import Stack from 'react-bootstrap/Stack';


function App() {
  return (
    <Router>
      <Stack gap={3}>
        <Header className='p-6'/>
        <div className="main-container">
            <Routes>
              <Route exact path='/home' element={<Home/>}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes>
            
        </div>
        <Footer/>
    </Stack>
       
       
    </Router>
   
  )
}

export default App
