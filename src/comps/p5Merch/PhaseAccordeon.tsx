// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Box,Button,Grid,List,ListItem,ListItemButton,ListItemIcon,ThemeProvider, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {theme} from "../styles"
// import {AccountBalanceWallet,AccountBalance} from '@mui/icons-material'
import {AccountBalance} from '@mui/icons-material'

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
        <Grid container style={{height:"90vh", width:"90vw"}}>
            <Grid sx={{background:"#826882"}}  item xs={12} sm={12} justifyContent="center" alignItems="center" flexDirection={"column"}>
                <Button  style={{position:"absolute", right:"10%",top:"5%",marginBottom:"25%",background:"black",color:"white"}} onClick={handleClose}>
                            x
                        </Button>
                <Box padding="8%">
                    <Typography component="h1" style={{fontSize:"30px",marginBottom:"10%"}}>
                        $ds
                    </Typography>

                    <Typography component="p" style={{fontSize:"27px",fontWeight:"900",background:"rgba(248,199,140,255)",color:"#cc0e52"}}>
                        as soon as the public mint ends we the staking website will be released
                    </Typography>
                    <br />
                    <br />
                    <Typography component="p" style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}>
                        1 ds will earn 0.1 $ds/day locked for 1 day
                    </Typography>
                    <Typography component="p" style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}>
                        1 ds will earn 0.2 $ds/day locked for 1 week
                    </Typography>
                    <Typography component="p" style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}>
                        1 ds will earn 0.3 $ds/day locked for 1 month
                    </Typography>
                    <Typography component="p" style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}>
                        1 ds will earn 0.5 $ds/day locked for 1 year
                    </Typography>
                    <Typography component="p" style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}>
                        max supply : 666666 $ds
                    </Typography>

                    <Typography component="p" style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}>
                        x% of the mint revenue will be converted to usdc and we will pair it with $ds in order to increase the liquidity
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <AccountBalance style={{fontSize:"30px"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"700",color:"white"}}>stakers will be able to yield $ds rewards daily</p>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <AccountBalance style={{fontSize:"30px"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"900",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"900",color:"white",background:"rgba(201,55,173,255)"}}>someothershit</p>
                            </ListItemButton>
                        </ListItem>
                        
                    </List>
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