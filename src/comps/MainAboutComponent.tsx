import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Box from "@mui/material/Box"




function MainAboutComponent() {


  return (
    <div style={{padding:"10%",margin:"4%"}} >
      <h1 style={{fontSize:"40px"}} >Q & A </h1>
      <div>
      <Accordion style={{background:"black",color:"white"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" style={{fontSize:"40px"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:"30px"}}>What is Depraved Scientists?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
            <p>The possibilities in the Blockchain and | cryptocurrency space are endless, out of
that endless possibilities is the birth of our beloved Metaverse and Web3, beautiful Innovations that have wooed so many of us with amazing potential.</p>
Depraved scientists is an exclusive project seeking to harness the potential of the Metaverse and Web3. Depraved scientist isn't just another Jpeg, it's rather going to leverage on the potential of Non-fungible token as a layer and foundation that will enable actual build and development which at this moment is already in progress. In the course of our progress, we're going to make our development open to everyone so anyone can check in real time what is being done except for a few surprises to always demonstrate to our community that there is always more than what they see.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{background:"black",color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" style={{fontSize:"40px"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:"30px"}}>what about the artwork?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"20px"}}>
            <p>Humans have been argued to be in the class of animals and some have argued otherwise, maybe this is true or not, we do not seek to stand with either side right now, but this is definitely for sure, humans are wild!</p>
<p>We're full of instincts and many times, dark instincts, seeking and waiting to find expression, we're angelic in our appearance, a two legged creature, beautiful in it's making, intelligent, a magnificent work of nature but filled with dark desires.</p>
<p>Humans are born with curiosity, we are inquisitive, this might be a good quality, our curiosity has led to the rise of billions of innovations that exists in our galaxy, but sometimes, we need to take that pause and ask, is it worth it? The price we had to pay to have everything we have now, is it worth it? The sacrifices we made, the lives we lost, the lives we damaged, the animals we murdered, all in the process of finding answer, maybe we didn't even need to ask those questions at all. But we're humans and that's what we do! We ask questions.</p>
<p> We will argue that it is worth it, all the sacrifices we had to make, but we know this for sure, 'To succeed, you'll fail, and sometimes, you'll fail again and again, other times, with dire consequences'</p>
<p>One of the concepts that intrigues man the most among many others is his own body, a complex genetic composition, a solid work of art, carefully crafted and perfect in it's making that you'll argue there was a master-builder in the background of it's making. We've spent centuries asking questions, we wanted to know more about our own body, maybe there are dynamics to our being, mysteries we've not unraveled, transformations that we've not witnessed, just maybe.</p>
<p>We studied anatomy and the many layers of it's complexities, gross anatomy, microscopic anatomy, human anatomy, phytotomy, zootomy, embryology, and comparative anatomy all in a bid to answer questions that we probably didn't need to ask or maybe we did afterall. We dived into understanding our own evolution, took it further to understand genetics and genetical mutations, genetical engineering was also found in our discovery. And we never stop, we just never stop.</p>


<p>This right here is the inspiration that birthed the depraved scientist art.</p>

 <p>A group of scientists who believe there's more to life and that we've only limited ourselves in potential and the things that our human body can do or transform into, so they set on this course, a course on which they didn't care for moral standards, they will do what must be done, but it comes with a price, a huge price</p>

          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
    </div>
  )
}

export default MainAboutComponent

