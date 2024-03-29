// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Box,Button,Grid,ThemeProvider,Typography } from '@mui/material'
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
                            p ∫∫∫∫∫ 3
                        </Typography>
                        <Typography variant="h5" padding="5%">
                            someshit about the first phase which is going to be 
                        </Typography>
                        <Typography variant="body1" padding="6%">
                            -- some more shit about the first phase
                        </Typography>
                        <Typography variant="body1" padding="6%">
                            -- some other shit about the first phase
                        </Typography>
                        <Typography variant="body1" padding="6%">
                            -- you know what i mean
                        </Typography>
                    </Box>
            </Grid>
            <Grid sx={{border:"2px solid black",display:{xs:"none",sm:"block",backgroundImage:"url(https://somespace.fra1.digitaloceanspaces.com/Laboratorium%20%281%292.jpeg)",backgroundSize:"cover",backgroundPosition:"right center"}}}  item xs={0} sm={4}>
                    mikri
            </Grid> 
        </Grid>
    </ThemeProvider>
  )
}

export default PhaseAccordeon