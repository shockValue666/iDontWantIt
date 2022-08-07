// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Box,Button,Grid,ThemeProvider, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {theme} from "../styles"

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
        <Grid container spacing={5} style={{height:"90vh", width:"90vw"}}>
            <Grid sx={{border:"2px solid black",background:"#826882"}}  item xs={12} sm={12} justifyContent="center" alignItems="center" flexDirection={"column"}>
                <Button  style={{position:"absolute", right:"10%",top:"5%",marginBottom:"25%",background:"black",color:"white"}} onClick={handleClose}>
                            x
                        </Button>
                <Box padding="8%">
                    <Typography component="h1" style={{fontSize:"30px",marginBottom:"10%"}}>
                        $ds
                    </Typography>

                    <Typography component="p" style={{fontSize:"20px"}}>
                        as soon as the public mint ends we will release the staking website
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        1 ds will earn 0.1 $ds/day locked for 1 day
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        1 ds will earn 0.2 $ds/day locked for 1 week
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        1 ds will earn 0.3 $ds/day locked for 1 month
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        1 ds will earn 0.5 $ds/day locked for 1 year
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        max supply : 666666 $ds
                    </Typography>

                    <Typography component="p" style={{fontSize:"20px"}}>
                        x% of the mint revenue will be added converted to usdc and we will pair it with $ds in order to increase the liquidity
                    </Typography>
                </Box>
            </Grid>
            {/* <Grid sx={{border:"2px solid black",display:{xs:"none",sm:"block"}}}  item xs={0} sm={6}>
                    mikri
            </Grid>  */}
        </Grid>
    </ThemeProvider>
  )
}

export default PhaseAccordeon