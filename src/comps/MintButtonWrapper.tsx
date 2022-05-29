import React from 'react'
import { Box,Grid } from '@mui/material'
import TypeWritter from './TypeWriter'
// import MintButton from './MintButton'

function MintButtonWrapper({children}:any) {
  return (
    <div style={{border:"2px solid black",display:"flex",justifyContent:"center"}}>
            <Grid container spacing={2} height="650px" padding={5}>
                <Grid item xs={2} >
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{border:"10px solid white",backgroundImage:"url(https://via.placeholder.com/728x900.png)"}} maxWidth="md" width="100%" height="100%" textAlign={"center"}>
                        {/* <a href="https://placeholder.com"> <img src="https://via.placeholder.com/550" alt="p" /> </a> */}
                        <TypeWritter/>
                        {children}
                        <p style={{color:"white"}}>poutsa</p>
                        {/* <MintButton/> */}
                    </Box>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
    </div>
  )
}

export default MintButtonWrapper
