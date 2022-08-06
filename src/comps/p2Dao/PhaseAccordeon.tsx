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
        <Grid container spacing={5}  height="90vh" width="70vw">
            <Grid sx={{border:"2px solid black",background:"#826882",overflow:"hidden"}}  item xs={12} sm={12}>
                <Button  style={{position:"absolute", right:"10%",top:"5%",marginBottom:"12%",background:"black",color:"white"}} onClick={handleClose}>
                            x
                        </Button>
                    <Box padding="8%">
                        <Typography component="h1" style={{fontSize:"48px",marginBottom:"10%"}}>
                            ds dao
                        </Typography>

                        <Typography component="p" style={{fontSize:"20px", paddingLeft:"1%",paddingBottom:"2%"}}>
                            Owning a ds grants you access to the ds DAO. 
                        </Typography>
                        <Typography component="p" style={{fontSize:"20px", paddingLeft:"1%",paddingBottom:"2%"}}>
                            In the dsDAO  the community will decide on the direction the project will take by voting on future human experiments.Our vibrant community will drive innovation and economic prosperity for the dao on the solana ecosystem.GAMW TI POUTANA TI PANAGIA
                        </Typography>

                        <Typography component="p" style={{fontSize:"20px", paddingLeft:"1%",paddingBottom:"2%"}}>
                            x% of the mint revenue will be locked in the DAO treasury and the community will decide how it will be spent
                        </Typography>
                    </Box>
            </Grid>
            {/* <Grid sx={{border:"2px solid black",display:{xs:"none",sm:"block"}}}  item xs={0} sm={4}>
                    mikri
            </Grid>  */}
        </Grid>
    </ThemeProvider>
  )
}

export default PhaseAccordeon