// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Accordion, AccordionDetails, AccordionSummary, Box,Button,Grid,List,ListItem,ListItemButton,ListItemIcon,ThemeProvider, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {theme} from "../styles"
import {AccountBalanceWallet,AccountBalance} from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            {/* <Grid sx={{background:"#826882"}}  item xs={12} sm={12} justifyContent="center" alignItems="center" flexDirection={"column"}> */}
            <Grid sx={{background:"black"}}  item xs={12} sm={12} justifyContent="center" alignItems="center" flexDirection={"column"}>
                <Button  style={{position:"absolute", right:"10%",top:"5%",marginBottom:"25%",background:"white",color:"black"}} onClick={handleClose}>
                            x
                        </Button>
                <Box padding="8%">
                    <Typography component="h1" style={{fontSize:"30px",marginBottom:"10%"}}>
                        $ds
                    </Typography>

                    {/* <Typography component="p" style={{fontSize:"27px",fontWeight:"600",background:"rgba(248,199,140,255)",color:"#cc0e52"}}>
                         as soon as the public mint ends we the staking website will be released
                    </Typography> */}
                     <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <AccountBalance style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"600",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",background:"rgba(248,199,140,255)",color:"#cc0e52"}}>as soon as the public mint ends we the staking website will be released</p>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <br />
                    <br />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <AccountBalanceWallet style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"600",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",color:"white",background:"rgba(201,55,173,255)"}}>1 ds will earn <span style={{fontSize:"32px",fontWeight:"700",color:"rgba(52, 235, 177,1)"}}>0.1 $ds/day</span>  locked for 1 day</p>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <AccountBalanceWallet style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"700",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",color:"white",background:"rgba(201,55,173,255)"}}>1 ds will earn 0.2 <span style={{fontSize:"32px",fontWeight:"700",color:"rgba(52, 235, 177,1)"}}>0.2 $ds/day</span> locked for 1 week</p>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <AccountBalanceWallet style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"700",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",color:"white",background:"rgba(201,55,173,255)"}}>1 ds will earn <span style={{fontSize:"32px",fontWeight:"700",color:"rgba(52, 235, 177,1)"}}>0.3 $ds/day</span> locked for 1 month</p>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <div style={{paddingTop:"5%",paddingBottom:"5%"}}>

                    </div>
                    <Accordion style={{background:"black",color:"white",borderRadius:"10%"}} >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{fontSize:"40px",color:"white"}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography style={{fontSize:"30px",fontWeight:"700"}}>supply</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize:"20px"}}>
                            666666 $ds
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* <Accordion style={{background:"#7d517d",color:"white",borderRadius:"10%"}} > */}
                    <Accordion style={{background:"black",color:"white",borderRadius:"10%"}} >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{fontSize:"40px",color:"white"}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography style={{fontSize:"30px",fontWeight:"700"}}>liquidity</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography style={{fontSize:"20px"}}>
                            x% of the mint revenue will be converted to usdc and we will pair it with $ds in order to increase the liquidity
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
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