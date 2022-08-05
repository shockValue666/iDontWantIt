// import { Button, Dialog } from '@mui/material'
import { Dialog } from '@mui/material'
import React,{useState} from 'react'
import PhaseAccordeon from './PhaseAccordeon';
import {Link} from "react-router-dom";

function PhaseModal2() {
    const [open,setOpen]=useState(false)
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",height:"288px"}}>
          {/* <Button style={{flex:"auto",color:"white",background: "none",width:"100%",height:"100%" ,fontSize:"30px",alignSelf:"stretch"}} variant="contained" color={"primary"} onClick={()=>{setOpen(true)}}>
              DAO
          </Button> */}
          <Link to="/roadmap" style={{textDecoration:"none",height:"100%",color:"white",fontSize:"56px"}} onClick={(e)=>{e.preventDefault();setOpen(true)}}>
              {/* <Button style={{flex:"auto",color:"white",background: "none",width:"100%",height:"100%" ,fontSize:"30px",alignSelf:"stretch"}} variant="contained" color={"primary"} onClick={()=>{setOpen(true)}}> */}
                  {/* p∫∫∫∫∫∫∫1 */}
                  <div style={{display:"flex",height:"100%",alignItems:"center",justifyContent:"center",width:"100%",borderRadius:"5%"}}>
                      DAO
                    </div>
              {/* </Button> */}
            </Link>
        </div>
      <Dialog open={open} onClose={()=>{setOpen(false)}} maxWidth="xl"> 

            <PhaseAccordeon/>
      </Dialog>
    </div>
  )
}

export default PhaseModal2
