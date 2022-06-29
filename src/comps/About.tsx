import * as React from 'react';
import Navbar from './Navbar';
import MainAboutComponent from './MainAboutComponent';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import MainShitGrid from './MainShitGrid';
import AboutExplained from './AboutExplained';



function About() {


  const [state,setState] = useState({
                mobileView:false,
                drawerOpen: false,
    })

   const {mobileView } = state;

    useEffect(()=>{
            const setResponsiveness = () => {
            return window.innerWidth < 900 
                    ? setState((prevState)=>({...prevState,mobileView:true}))
                    : setState((prevState)=>({...prevState,mobileView:false}))
            }
            setResponsiveness()
            window.addEventListener("resize",()=> setResponsiveness())
            return ()=>{
            window.removeEventListener("resize",()=> setResponsiveness())
            }
    },[])

  return (
      <div style={{backgroundColor:"black",color:"white"}}>
          <Navbar/>
        {/* <h1 style={{color:"black",marginTop:"13%"}}>sti poutsa m exw ena asimi sz</h1> */}
        <h1 style={{color:"black",marginTop:"1%"}}>sti poutsa m exw ena asimi sz</h1>

        
        <MainAboutComponent/>


  {!mobileView ? (<><MainShitGrid/><div style={{position:"fixed",bottom:"0"}}>
        <Footer/>
        </div></>) : <AboutExplained/>}
        
        {/* <Footer/> */}
    </div>
  )
}

export default About