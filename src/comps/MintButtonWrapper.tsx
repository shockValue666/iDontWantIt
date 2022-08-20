import React from 'react'
import { Box,Grid } from '@mui/material'
import TypeWritter from './TypeWriter'
// import MintButton from './MintButton'

function MintButtonWrapper({children}:any) {
  return (
    // <div style={{border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(https://somespace.fra1.digitaloceanspaces.com/Laboratorium%20%281%292.jpeg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <div style={{border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Grid container spacing={2} height="650px" padding={5} justifyContent="center" alignItems="center">
                {/* <Grid item xs={1} >
                </Grid> */}
                {/* <Grid item xs={10} > */}
                    {/* <Box sx={{border:"10px solid white",backgroundImage:"url(https://via.placeholder.com/728x900.png)"}} maxWidth="md" width="100%" height="100%" textAlign={"center"}> */}
                    {/* <Box  maxWidth="lg" width="100%" height="100%" textAlign={"center"}> */}
                        {/* <a href="https://placeholder.com"> <img src="https://via.placeholder.com/550" alt="p" /> </a> */}
                          {/* <TypeWritter/>
                        {children}
                        <p style={{color:"white"}}></p> */}
                        {/* <MintButton/> */}
                    {/* </Box>
                </Grid> */}
                {/* <Grid item xs={1}>

                </Grid> */}
                <Grid item  width="lg">
                    {/* <Box sx={{border:"10px solid white",backgroundImage:"url(https://via.placeholder.com/728x900.png)"}} maxWidth="md" width="100%" height="100%" textAlign={"center"}> */}
                    <Box  maxWidth="lg" width="100%" height="100%" textAlign={"center"}>
                        {/* <a href="https://placeholder.com"> <img src="https://via.placeholder.com/550" alt="p" /> </a> */}
                        <div style={{minWidth:"0px"}}>
                          <TypeWritter/>
                        </div>
                        {children}
                        <p style={{color:"white"}}></p>
                        {/* <MintButton/> */}
                    </Box>
                </Grid>
            </Grid>
    </div>
  )
}

export default MintButtonWrapper
