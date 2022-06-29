import { Grid } from '@material-ui/core'
import PhaseModal from './p1Roadmap/PhaseModal'
import PhaseModal2 from './p2Dao/PhaseModal'
import PhaseModal3 from './p3Token/PhaseModal'
import PhaseModal4 from './p4Staking/PhaseModal'
import PhaseModal5 from './p5Merch/PhaseModal'

import React from 'react'

function MainShitGrid() {
  return (
    <div style={{border:"",width:"100%",display: "flex",flexDirection: "row",flexWrap: "wrap",justifyContent: "center",alignItems: "center"}}>
        <div style={{ width: "90%",height: "190px",margin: "10px",padding: "5px",border:""}}>
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
            <Grid container style={{padding:"0%",marginBottom:"5%"}} spacing={5}>
                <Grid item xs={3} style={{borderRadius:"22%",}}>
                    {/* <Item>1</Item> */}

                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%",background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",}}>
                    {/* <Item>2</Item> */}
                    <PhaseModal/>
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%"}}>
                    {/* <Item>1</Item> */}
                        
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%"}}>
                    {/* <Item>2</Item> */}
                    
                </Grid>


                <Grid item xs={3} style={{borderRadius:"22%",background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",}}>
                    {/* <Item>1</Item> */}
                        <PhaseModal2/>
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%"}}>
                    {/* <Item>2</Item> */}
                    
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%",background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",}}>
                    {/* <Item>1</Item> */}
                        <PhaseModal5/>
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%"}}>
                    {/* <Item>2</Item> */}
                    
                </Grid>


                <Grid item xs={3} style={{borderRadius:"22%"}}>
                    {/* <Item>1</Item> */}
                    
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%",background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)",}}>
                    {/* <Item>2</Item> */}
                    <PhaseModal3/>
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%"}}>
                    {/* <Item>1</Item> */}
                    
                </Grid>
                <Grid item xs={3} style={{borderRadius:"22%",background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(95,9,121,1) 50%, rgba(255,0,142,1) 100%)"}}>
                    {/* <Item>2</Item> */}
                    <PhaseModal4/>
                </Grid>

            </Grid>
        </div>
    </div>
  )
}

export default MainShitGrid