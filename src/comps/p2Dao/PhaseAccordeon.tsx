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
        <Grid container spacing={5} style={{height:"90vh", width:"90vw"}}>
            <Grid sx={{border:"2px solid black",background:"#826882"}}  item xs={12} sm={12}>
                <Box style={{border:"10x solid white",width:"90%",height:"90%",padding:"10%"}}>
                    <Typography component="h1" style={{fontSize:"30px",marginBottom:"10%"}}>
                        ds dao
                    </Typography>

                    <Typography component="p" style={{fontSize:"20px"}}>
                        Owning a ds grants you access to the ds DAO. 
                    </Typography>
                    <Typography component="p" style={{fontSize:"20px"}}>
                        In the dsDAO  the community will decide on the direction the project will take by voting on future human experiments.Our vibrant community will drive innovation and economic prosperity for the dao on the solana ecosystem.
                    </Typography>

                    <Typography component="p" style={{fontSize:"20px"}}>
                        x% of the mint revenue will be locked in the DAO treasury and the community will decide how it will be spent
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