import React from 'react'
import {Box, Grid,Button} from "@mui/material"
import DiscordIcon from './svgs/DiscordIcon'
import TwitterIcon from './svgs/TwitterIcon'

function CommunityPromo() {
  return (
    <div style={{marginTop:"3%",padding:"5%",backgroundImage:`url("https://somespace.fra1.digitaloceanspaces.com/Scientist%281%29%202.PNG")`,backgroundColor:"#cccccc",backgroundRepeat:"repeat-x"}}>
        {/* <img src="https://somespace.fra1.digitaloceanspaces.com/Scientist%281%29%202.PNG" alt=""  width={"500px"} height="500px"/> */}
        {/* <h1 style={{color:"white",textAlign:"center", margin:"5%",fontWeight:"900",fontSize:"50px"}}>
            👁  join us 👁
        </h1> */}
        <Grid container justifyContent={"center"}>
            <Grid container justifyContent={"space-around"} maxWidth="60vw" gap={"20px"}>
                {/* <Box width="200px" height="200px" sx={{backgroundImage:"linear-gradient(to right top, #c837ac, #a064d3, #6c82e8, #2f98ea, #07a8df)"}}> */}
                <Box width="300px" height="300px">
                    <Box width="100%" height="100%" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Button LinkComponent={'a'} href="https://discord.gg/8HVUDTtc" target="_blank" variant='contained' style={{backgroundColor:"black",fontSize:"200px"}}>
                            <DiscordIcon style={{width:"200px",height:"200px"}} className={"App-logo"}/>
                        </Button>
                    </Box>
                </Box>
                {/* <Box width="200px" height="200px" sx={{backgroundImage:"linear-gradient(to right top, #c837ac, #a064d3, #6c82e8, #2f98ea, #07a8df)"}}> */}
                <Box width="300px" height="300px">
                    <Box width="100%" height="100%" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Button LinkComponent={'a'} href="https://twitter.com/Depravedscient" variant="contained" style={{background:"#1DA1F2"}} target="_blank">
                            <TwitterIcon style={{width:"200px",height:"200px"}} className={"App-logo"}/>
                        </Button>
                    </Box>
                </Box>
                {/* <Box width="200px" height="200px" sx={{backgroundColor:"yellow"}}>

                </Box> */}
            </Grid>
        </Grid>
    </div>
  )
}

export default CommunityPromo