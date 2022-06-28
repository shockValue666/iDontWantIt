import { Box,Grid,Container,Typography } from '@mui/material'
import React from 'react'
import PhaseModal from './p1/PhaseModal'
import PhaseModal2 from './p2/PhaseModal'
import PhaseModal3 from './p3/PhaseModal'
import PhaseModal4 from './p4/PhaseModal'
import PhaseModal5 from './p5/PhaseModal'

function RoadMapExplained() {
  return (
    <div style={{border:"",width:"100%",textAlign:"center"}}>
      {/* <div style={{border:"3px solid red",padding:0,display:"inline-block"}}> */}
        <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        alignContent="flex-start"
        flexWrap={"wrap"}
        rowGap="70px"
        width="70%"
        style={{border:""}}
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
              borderRadius:"5%" ,
              margin:"2%"
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
              borderRadius:"5%",
              margin:"2%"
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
              borderRadius:"5%",
              margin:"2%"
            }}
          >

            <Container>
                <Typography variant="h3">
                  <PhaseModal3/>
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
              borderRadius:"5%",
              margin:"2%"
            }}
          >

            <Container>
                <Typography variant="h3">
                  <PhaseModal4/>
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
              borderRadius:"5%",
              margin:"2%"
            }}
          >

            <Container>
                <Typography variant="h3">
                  <PhaseModal5/>
                </Typography> 
            </Container>
          </Box>



        </Grid>
      {/* </div> */}
    </div>
  )
}

export default RoadMapExplained