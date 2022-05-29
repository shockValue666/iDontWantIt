import { Typography } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'
import RoadMapExplained from './RoadMapExplained'

function RoadMap() {
  return (
    <>
      <Navbar/>
      <div style={{background:"black",color:"white"}}>
        <Typography variant="h2" gutterBottom component="div" >
          roadmap
        </Typography>
        <Typography variant="h6" gutterBottom component="div" style={{paddingBottom:"7%"}}>
        our roadmap explained (we need to find something more edgy for the description)
      </Typography>
      <RoadMapExplained/>
      </div>
    </>
  )
}

export default RoadMap