// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { HowToVote,Ballot,AttachMoney,EmergencyShare } from '@mui/icons-material'
import { Box, Button,Grid,List,ListItem,ListItemButton,ListItemIcon,ThemeProvider, Typography } from '@mui/material'
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
        <Grid container style={{height:"90vh", width:"80vw"}}>
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
                                <Ballot style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"600",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",background:"rgba(248,199,140,255)",color:"#cc0e52"}}>Owning one DS will grant you access to the ds DAO</p>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <br />
                    <br />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <HowToVote style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"600",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",color:"white",background:"rgba(201,55,173,255)"}}>DAO members will vote on proposals submitted by $ds holders.</p>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <EmergencyShare style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"700",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",color:"white",background:"rgba(201,55,173,255)"}}>DS DAO will offer WL opportunities for upcoming projects, alpha calls, giveaways and private discord channels</p>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <AttachMoney style={{fontSize:"30px",color:"white"}}/>
                            </ListItemIcon>
                            {/* <ListItemText primary="Inbox"  style={{fontSize:"28px",fontWeight:"700",color:"rgba(52, 235, 177,1)"}}/> */}
                            <p style={{fontSize:"28px",fontWeight:"600",color:"white",background:"rgba(201,55,173,255)"}}>DS DAO also aims to capitalize upon native crypto/defi/nft oportunities on various networks, not only solana</p>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <div style={{paddingTop:"5%",paddingBottom:"5%"}}>

                    </div>
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