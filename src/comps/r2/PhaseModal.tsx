import { Button, Dialog } from '@mui/material'
import React,{useState} from 'react'
import PhaseAccordeon from './PhaseAccordeon';

function PhaseModal2() {
    const [open,setOpen]=useState(false)
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",height:"256px"}}>
          <Button style={{flex:"auto",color:"white",background: "none",width:"100%",height:"100%" ,fontSize:"30px",alignSelf:"stretch"}} variant="contained" color={"primary"} onClick={()=>{setOpen(true)}}>
              p∫∫∫∫∫∫∫2
              {/* DAO */}
          </Button>
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
            <PhaseAccordeon/>
      </Dialog>
    </div>
  )
}

export default PhaseModal2
