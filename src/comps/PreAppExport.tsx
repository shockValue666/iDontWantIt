import React from 'react'
import CardDefinition from './CardDefinition'
import NewHome from './NewHome'
import Footer from "./Footer"
import Navbar from './Navbar'
// import ExampleNavbar from './ExampleNavbar'
import RoadMapHomePage from './RoadMapHomePage'
import CommunityPromo from './CommunityPromo'


function PreAppExport() {
  return (
      <div style={{background:"black",color:"white"}}>
        <Navbar/>
        {/* <ExampleNavbar/> */}
        <NewHome/>
        <div style={{marginTop:"10%"}}>
          <div style={{marginTop:"2%"}}>
            <CardDefinition/>
          </div>
        </div>
        <CommunityPromo/>
        <RoadMapHomePage/>
        {/* <div style={{bottom:"0",position:"absolute"}}> */}
          <Footer/>
        {/* </div> */}
    </div>
  )
}

export default PreAppExport
