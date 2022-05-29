// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Box,Grid,ThemeProvider,Typography } from '@mui/material'
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
        <Grid container spacing={5} height="90vh" width="90vw">
            <Grid sx={{border:"2px solid black",background:"#826882"}}  item xs={12} sm={6}>
                    <Box padding="15%">
                        <Typography variant="h3" marginBottom="20%">
                            {/* <Responsive>
                                width: {w}
                            </Responsive>
                            <br /> */}
                            p ∫∫∫∫∫ 1
                        </Typography>
                        <Typography variant="h5" marginBottom="20%">
                            someshit about the first phase which is going to be 
                        </Typography>
                        <Typography variant="body1">
                            some other shit about the first phase
                        </Typography>
                    </Box>
            </Grid>
            <Grid sx={{border:"2px solid black",display:{xs:"none",sm:"block"}}}  item xs={0} sm={6}>
                    mikri
            </Grid> 
        </Grid>
    </ThemeProvider>
  )
}

export default PhaseAccordeon