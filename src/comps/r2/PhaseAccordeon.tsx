// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Box,Grid,Button,ThemeProvider,Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {theme} from "../styles"

// const Responsive = styled(Grid)(({theme})=>({
//     [theme.breakpoints.down("xs")]:{
//         color:"green"
//     },
//     [theme.breakpoints.down("sm")]:{
//         color:"green"
//     }
// }))

function PhaseAccordeon({handleClose}:any) {

    // const [w,setW] = useState(window.innerWidth)
    const [,setW] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () =>{
            setW(window.innerWidth)
        }
        window.addEventListener("resize",handleResize)
        return () =>{
            window.removeEventListener("resize",handleResize)
        }
    },[])

  return (
    <ThemeProvider theme={theme}>
        <Grid container spacing={5}  height="85vh" width="70vw">
            <Grid sx={{border:"2px solid black",background:"#826882",overflow:"hidden"}}  item xs={12} sm={8}>
                <Button  style={{position:"absolute", right:"10%",top:"5%",marginBottom:"12%",background:"black",color:"white"}} onClick={handleClose}>
                            x
                        </Button>
                    <Box padding="8%">
                        {/* <Button variant="contained">
                            poutsa
                        </Button> */}
                        <Typography variant="h3" padding="5%">
                            {/* <Responsive>
                                width: {w}
                            </Responsive>
                            <br /> */}
                            p ∫∫∫∫∫ 2
                        </Typography>
                        <Typography variant="h5" padding="5%">
                            -- token mint szn
                        </Typography>
                        <Typography variant="body1" padding="6%">
                            -- deploy staking contract in order to begin the mint of $TKNX
                        </Typography>
                        <Typography variant="body1" padding="6%">
                            -- create a pair on a liquidity pool
                        </Typography>
                        <Typography variant="body1" padding="6%">
                            -- special offers for native spl-token holders
                        </Typography>
                    </Box>
            </Grid>
            <Grid sx={{border:"2px solid black",display:{xs:"none",sm:"block",backgroundImage:"url(https://somespace.fra1.digitaloceanspaces.com/Laboratorium%20%281%292.jpeg)",backgroundSize:"cover",backgroundPosition:"center center"}}}  item xs={0} sm={4}>
                    mikri
            </Grid> 
        </Grid>
    </ThemeProvider>
  )
}

export default PhaseAccordeon