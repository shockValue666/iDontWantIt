import { Box,Grid,Container,Typography } from '@mui/material'
import React from 'react'
import PhaseModal from './p1/PhaseModal'
import PhaseModal2 from './p2/PhaseModal'
import PhaseModal3 from './p3/PhaseModal'

function RoadMapExplained() {
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    alignContent="flex-start"
    flexWrap={"wrap"}
    rowGap="60px"
    >

      <Box
        sx={{
          width: 300,
          height: 300,
      
          padding:"15px",

          background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",
          '&:hover': {
            backgroundColor: 'primary',
            opacity: [0.9, 0.8, 0.7],
          },
          borderRadius:"5%" 
        }}
      >
        <Container>
            <Typography variant="h3">
              <PhaseModal/>
            </Typography> 
        </Container>
        </Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",
          padding:"15px",
          '&:hover': {
            backgroundColor: 'primary',
            opacity: [0.9, 0.8, 0.7],
          },
          borderRadius:"5%"
        }}
      >
        <Container>
            <Typography variant="h3">
                <PhaseModal2/>
            </Typography> 
        </Container>
        </Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",
          padding:"15px",
          '&:hover': {
            backgroundColor: 'white',
            opacity: [0.9, 0.8, 0.7],
          },
          borderRadius:"5%"
        }}
      >

        <Container>
            <Typography variant="h3">
              <PhaseModal3/>
            </Typography> 
        </Container>
      </Box>


    </Grid>
  )
}

export default RoadMapExplained