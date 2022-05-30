import {  Button, Container, Toolbar } from '@material-ui/core'
import {Link} from "react-router-dom"
import React from 'react'

function DesktopNavbar() {
  return (
    <div style={{color:"white"}}>
      <Toolbar>
        <Container>
          <img src="https://ibb.co/nfQxW17" alt="" />
        </Container>
        <Container maxWidth="xl" style={{display:"flex", justifyContent:"flex-end",gap:"2%"}}>
          <Link to="/" style={{textDecoration:"none"}}>
            <Button variant="contained" size="large" style={{background:"rgba(66, 245, 236,0.1)",color:"white"}}>
              home
            </Button>
          </Link>
          <Link to="/roadmap" style={{textDecoration:"none"}}>
            <Button variant="contained" size="large" style={{background:"rgba(66, 245, 236,0.1)",color:"white"}}>
              roadmap 
            </Button>
          </Link>
          <Button href="https://discord.gg/vKaB2B8v" variant="outlined" target="_blank" size="small" style={{background:"rgba(179, 66, 245,0.2)"}}>
            discord
          </Button>
          <Button href="#" variant="outlined" size="small" style={{background:"rgba(179, 66, 245,0.2)"}}>
            twitter
          </Button>
          <Button href="#" variant="outlined" size="small" style={{background:"rgba(179, 66, 245,0.2)"}}>
            magic eden
          </Button>
        </Container>
      </Toolbar>
    </div>
  )
}

export default DesktopNavbar