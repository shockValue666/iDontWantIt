import {  Button, Container, Toolbar } from '@material-ui/core'
import {Link} from "react-router-dom"
import React from 'react'

function DesktopNavbar() {
  return (
    <div style={{color:"white",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"black"}}>
      <div style={{height:"100%",width:"10%"}}>
        <img src="https://somespace.fra1.digitaloceanspaces.com/IMG_50067B2F73AB-2.jpeg" height={"100px"} width="100px" alt="" />
      </div>
      <div>
        <Toolbar>
        <Container>
          {/* <img src="https://ibb.co/nfQxW17" alt="" /> */}
        </Container>
        <Container maxWidth="xl" style={{display:"flex", justifyContent:"flex-end",gap:"4%",alignItems:"center"}}>
          <Link to="/" style={{textDecoration:"none"}}>
            {/* <Button variant="contained" size="large" style={{background:"rgba(66, 245, 236,0.1)",color:"white"}}> */}
            <Button variant="contained" size="large" style={{background:"rgba(201,55,173,255)",color:"white",fontWeight:"900"}}>
              home
            </Button>
          </Link>
          <Link to="/roadmap" style={{textDecoration:"none"}}>
            {/* <Button variant="contained" size="large" style={{background:"rgba(66, 245, 236,0.1)",color:"white"}}> */}
            <Button variant="contained" size="large" style={{background:"rgba(201,55,173,255)",color:"white",fontWeight:"900"}}>
              roadmap 
            </Button>
          </Link>
          <Link to="/about" style={{textDecoration:"none"}}>
            {/* <Button variant="contained" size="large" style={{background:"rgba(66, 245, 236,0.1)",color:"white"}}> */}
            <Button variant="contained" size="large" style={{background:"rgba(201,55,173,255)",color:"white",fontWeight:"900"}}>
              about
            </Button>
          </Link>
          {/* <Link to="/whitepaper" style={{textDecoration:"none"}}>
            <Button variant="contained" size="large" style={{background:"rgba(201,55,173,255)",color:"white",fontWeight:"900"}}>
              whitepaper
            </Button>
          </Link> */}
          <Button href="https://discord.gg/8HVUDTtc" variant="outlined" target="_blank" size="small" style={{background:"rgba(248,199,140,255)",padding:"2%",color:"#cc0e52",fontWeight:"900"}}>
            discord
          </Button>
          <Button href="https://twitter.com/Depravedscient" variant="outlined" target="_blank" size="small" style={{background:"rgba(248,199,140,255)",padding:"2%",color:"#cc0e52",fontWeight:"900"}}>
            twitter
          </Button>
          <Button disabled href="#" variant="outlined" target="_blank" size="small" style={{background:"rgba(248,199,140,255)",padding:"2%",color:"#cc0e52",fontWeight:"900"}}>
            magic eden
          </Button>
          <Button href="https://mapedeveloper.gitbook.io/untitled/" variant="outlined" target="_blank" size="small" style={{background:"rgba(248,199,140,255)",padding:"2%",color:"#cc0e52",fontWeight:"900"}}>
            docs
          </Button>
          <Button href="https://somespace.fra1.cdn.digitaloceanspaces.com/dsnew.pdf" variant="outlined" target="_blank" size="large" style={{paddingRight:"10%",paddingLeft:"10%",background:"rgba(248,199,140,255)",padding:"2%",color:"#cc0e52",fontWeight:"900"}}>
            whitepaper
          </Button>
        </Container>
      </Toolbar>
      </div>
    </div>
  )
}

export default DesktopNavbar