import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
// import MainShitGrid from './MainShitGrid'
import Navbar from './Navbar'
// import BottomPic from './p1Roadmap/BottomPic'
import RoadMapExplained from './RoadMapExplained'

function RoadMap() {


  const [state,setState] = useState({
                mobileView:false,
                drawerOpen: false,
    })

   const {mobileView} = state;

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

    useEffect(()=>{
      console.log("eimai mikropsolis");
      mobileView ? console.log("mobile view teleiwmene") : console.log("DESKTOP view teleiewmene")
    },[mobileView])
  return (
    <>
      <Navbar/>
      <div style={{background:"black",color:"white"}}>
        <Typography variant="h2" gutterBottom component="div" style={{marginTop:"14%",paddingLeft:"5%"}} >
          roadmap
        </Typography>
        <Typography variant="h6" gutterBottom component="div" style={{paddingBottom:"7%",paddingLeft:"5%",paddingTop:"2%"}}>
        our roadmap explained (we need to find something more edgy for the description)
      </Typography>
      <RoadMapExplained/>
      {/* <BottomPic/> */}
      {/* {!mobileView ? (<><MainShitGrid/><div style={{position:"fixed",bottom:"0"}}>
      <Footer/>
      </div></>) : null} */}
        {/* <MainShitGrid/> */}

        <Footer/>
      </div>
    </>
  )
}

export default RoadMap