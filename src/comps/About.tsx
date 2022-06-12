import * as React from 'react';
import Navbar from './Navbar';
import MainAboutComponent from './MainAboutComponent';
import Footer from './Footer';



function About() {

  return (
      <div style={{backgroundColor:"black",color:"white"}}>
          <Navbar/>
        <h1 style={{color:"black",marginTop:"13%"}}>sti poutsa m exw ena asimi sz</h1>

        
        <MainAboutComponent/>
        <Footer/>
    </div>
  )
}

export default About