import { Typography } from '@material-ui/core'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import BottomPic from './p1/BottomPic'
import RoadMapExplained from './RoadMapExplained'

function RoadMap() {
  return (
    <>
      <Navbar/>
      <div style={{background:"black",color:"white"}}>
        <Typography variant="h2" gutterBottom component="div" style={{marginTop:"14%"}} >
          roadmap
        </Typography>
        <Typography variant="h6" gutterBottom component="div" style={{paddingBottom:"7%"}}>
        our roadmap explained (we need to find something more edgy for the description)
      </Typography>
      <RoadMapExplained/>
      <BottomPic/>
      <Footer/>
      </div>
    </>
  )
}

export default RoadMap