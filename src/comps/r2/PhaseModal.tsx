// import { Button, Dialog } from '@mui/material'
import { Dialog, } from '@mui/material'
import React,{useState} from 'react'
import PhaseAccordeon from './PhaseAccordeon';
import {Link} from "react-router-dom";

function PhaseModal2() {
  const handleClose = () => {
      setOpen(false)
    }
    const [open,setOpen]=useState(false)
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",height:"288px"}}>
          <Link to="/roadmap" style={{textDecoration:"none",height:"100%",color:"white",fontSize:"56px"}} onClick={(e)=>{e.preventDefault();setOpen(true)}}>
            <div style={{display:"flex",height:"100%",alignItems:"center",justifyContent:"center",width:"100%",borderRadius:"5%"}}>
              p∫∫∫∫∫∫∫2
            </div>
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
            <PhaseAccordeon handleClose={handleClose}/>
      </Dialog>
    </div>
  )
}

export default PhaseModal2
