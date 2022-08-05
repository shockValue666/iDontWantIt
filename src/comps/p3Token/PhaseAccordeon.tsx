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
            <Grid sx={{border:"2px solid black",background:"#826882"}}  item xs={12} sm={12}>
                <Box style={{border:"10x solid white",width:"90%",height:"90%",padding:"10%"}}>
                    <Button variant="contained" style={{position:"absolute", right:"10%"}} onClick={handleClose}>
                            x
                        </Button>
                    <Typography component="h1" style={{fontSize:"30px",marginBottom:"10%"}}>
                        $ds marketplace
                    </Typography>

                    <Typography component="p" style={{fontSize:"20px"}}>
                        in the dsm you will be able to buy and sell ds using our spl-token $ds 
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        2.5% transaction fees will be burned and 2.5% will be added to our DAO treasury.
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        we will be organizing raffles and auctions
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
