import { Grid, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
// import { PicketProvider, usePicket } from "@picketapi/picket-react";









function TokenGate(children:any) {
  return (
    <div style={{color:"white"}}>
      <Navbar/>
      <h1 style={{color:"black",marginTop:"1%"}}>sti poutsa m exw ena asimi sz</h1>
      <Typography style={{textAlign:"center",marginTop:"5%"}} variant="h3">
        ds staking
      </Typography>
      <div style={{textAlign:"center",marginTop:"10%"}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div>
              <Stack spacing={8}>
                <div>Total ds staked</div>
                <Typography variant="h4" style={{color:"rgba(201,55,173,255)"}}>666</Typography>
              </Stack>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Stack spacing={8}>
                <div>percentage of ds staked</div>
                <Typography variant="h4" style={{color:"rgba(201,55,173,255)"}}>10%</Typography>
              </Stack>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Stack spacing={8}>
                <div>total value locked</div>
                <Typography variant="h4" style={{color:"rgba(201,55,173,255)"}}>$666</Typography>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{position:"fixed",bottom:"0"}}>
        <Footer/>
      </div>
    </div>
  )
}

export default TokenGate
