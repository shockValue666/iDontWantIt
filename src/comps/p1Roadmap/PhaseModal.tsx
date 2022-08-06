// import { Button, Dialog } from '@mui/material'
import { Dialog } from '@mui/material'
import React,{useState} from 'react'
// import PhaseAccordeon from './PhaseAccordeon'
import {Link} from "react-router-dom"



function PhaseModal() {
    const [open,setOpen]=useState(false)
  return (
    <div>
        {/* <div style={{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",height:"256px"}}> */}
        <div style={{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",height:"288px"}}>
          <Link to="/roadmap/" style={{textDecoration:"none",height:"100%",color:"white",fontSize:"56px"}}>
              {/* <Button style={{flex:"auto",color:"white",background: "none",width:"100%",height:"100%" ,fontSize:"30px",alignSelf:"stretch"}} variant="contained" color={"primary"} onClick={()=>{setOpen(true)}}> */}
                  {/* p∫∫∫∫∫∫∫1 */}
                  <div style={{display:"flex",height:"100%",alignItems:"center",justifyContent:"center",width:"100%",borderRadius:"5%"}}>
                    Roadmap
                    </div>
              {/* </Button> */}
            </Link>
        </div>
      <Dialog open={open} onClose={()=>{setOpen(false)}} maxWidth="xl"> 
            {/* <DialogTitle>This is my cock</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    diallog content text
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{setOpen(false)}} sx={{fontSize:"13px"}} variant="contained" color="error">
                    x
                </Button>
            </DialogActions> */}
            {/* <PhaseAccordeon /> */}
            {/* poutsa */}
      </Dialog>
    </div>
  )
}

export default PhaseModal
