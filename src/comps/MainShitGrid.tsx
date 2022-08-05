// import { Grid,Box,Container } from '@material-ui/core'
import { Grid,Box} from '@material-ui/core'
import PhaseModal from './p1Roadmap/PhaseModal'
import PhaseModal2 from './p2Dao/PhaseModal'
import PhaseModal3 from './p3Token/PhaseModal'
import PhaseModal4 from './p4Staking/PhaseModal'
import PhaseModal5 from './p5Merch/PhaseModal'

import React from 'react'

function MainShitGrid() {
  return (
    <>
    {/* <div style={{width:"100%",display: "flex",flexDirection: "row",flexWrap: "wrap",justifyContent: "center",alignItems: "center"}}> */}
        {/* <div style={{ width: "90%",height: "190px",margin: "10px",padding: "5px",border:""}}> */}
        <div style={{ width: "99%"}}>
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
            <Grid container style={{marginBottom:"5%",padding:"2%"}} spacing={3} direction="row" justifyContent='space-around' alignItems="center" >
                <Grid item xs={3} style={{borderRadius:"10%",}}>
                    {/* <Item>1</Item> */}

                </Grid>
                <Grid item xs={3} style={{}}>
                    <Box sx={{width: 300,height: 300}}>
                        <div style={{background:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",borderRadius:"10%"}} >
                            <PhaseModal/>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>1</Item> */}
                        
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>2</Item> */}
                    
                </Grid>


                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>1</Item> */}

                        <Box sx={{width: 300,height: 300}}>
                            <div style={{background:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",borderRadius:"10%"}} >
                                <PhaseModal2/>
                            </div>
                        </Box>
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>2</Item> */}
                    
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>1</Item> */}
                        <Box sx={{width: 300,height: 300}}>
                            <div style={{background:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",borderRadius:"10%"}} >
                                <PhaseModal5/>
                            </div>
                        </Box>
                        
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>2</Item> */}
                    
                </Grid>


                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>1</Item> */}
                    
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>2</Item> */}
                    <Box sx={{width: 300,height: 300}}>
                        <div style={{background:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",borderRadius:"10%"}} >
                            <PhaseModal3/>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>1</Item> */}
                    
                </Grid>
                <Grid item xs={3} style={{borderRadius:"10%"}}>
                    {/* <Item>2</Item> */}
                    <Box sx={{width: 300,height: 300}}>
                            <div style={{background:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",borderRadius:"10%"}} >
                                <PhaseModal4/>
                            </div>
                        </Box>
                </Grid>

            </Grid>
        </div>
    {/* </div> */}
    </>
  )
}

export default MainShitGrid