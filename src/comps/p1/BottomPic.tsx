import { Box } from '@mui/material'
import React from 'react'

function BottomPic() {
  return (
    <div>
        <Box width="100%" height="400px" sx={{background:"black",marginTop:"10%"}}>
          <div style={{width:"100%",textAlign:"center"}}>
            <img src="https://somespace.fra1.digitaloceanspaces.com/IMG_50067B2F73AB-3.jpeg" width={"300px"} height={"300px"} style={{display:"inline-block"}} alt="" />
          </div>
        </Box>
    </div>
  )
}

export default BottomPic