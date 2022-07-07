// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Box,Grid,ThemeProvider, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {theme} from "../styles"

function PhaseAccordeon() {

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
        <Grid container spacing={5} style={{height:"90vh", width:"90vw",background:"#826882"}}>
            <Grid sx={{border:"2px solid black",background:"#826882",height:"90vh"}}  item xs={12} sm={12}>
                <Box style={{border:"10x solid white",width:"90%",height:"90%",padding:"10%"}}>
                    <Typography component="h1" style={{fontSize:"30px",marginBottom:"10%"}}>
                        merch
                    </Typography>

                    <Typography component="p" style={{fontSize:"20px"}}>
                        we will release merch which will be sold using $ds 
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        2.5% transaction fees will be burned and 2.5% will be added to our DAO treasury.
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
