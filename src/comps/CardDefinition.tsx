import {  Card, CardContent, Typography,Box } from '@mui/material'
import React from 'react'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function CardDefinition() {
  return (
      <Box sx={{display:"flex",justifyContent:"space-around", padding:"100px",flexWrap:"wrap",rowGap:"60px",marginTop:"10%"}}>
            <Card style={{ minWidth: 275, maxWidth:500,background:"rgba(204, 199, 184,0.5)"}}>
                        <CardContent sx={{background:"rgba(204, 199, 184,0.5)"}}>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h4" component="div" style={{fontSize:"25px"}}>
                            mis{bull}​an{bull}​thrope
                            </Typography>
                            <Typography sx={{ mb: 1.5,fontSize:20 }} color="text.secondary">
                            noun
                            </Typography>
                            <Typography variant="h3" style={{fontSize:"25px"}}>
                            a person who hates or distrusts humankind
                            <br />
                            {'"The misanthrope hates people, believes they deserve to suffer, and wants to harm them when possible."'}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                    <img src="https://somespace.fra1.digitaloceanspaces.com/misanthrope.jpg" height={"281px"} width="230px" alt="cent" style={{backgroundColor:"black"}}/>
            </Box>
  )
}

export default CardDefinition