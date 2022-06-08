import React from 'react'
// import { makeStyles } from '@mui/material'
import Typewriter from 'typewriter-effect';



function TypeWritter() {
  return (
        <div style=
        {{border:0,
        borderRadius:15,
        color:'black', 
        padding:'0 30px',
        height:"400px"}}
        >
            <div style=
            {{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        fontSize:"50px",
        color:"white",
        // backgroundColor:"rgba(248,228,252,255)"
        }}>
                <p style={{
                    // backgroundColor:"rgba(248,228,252,255)",
                    // zIndex:"1000"
                    marginBottom:"75px",
                }} >
                    <Typewriter
                    options={{
                    delay:100
                    }}
                        onInit={(typewriter)=>{
                            typewriter.typeString("💊🚬🕉💊🚬🕉")
                                .pauseFor(100)
                                .deleteAll()
                                .pauseFor(100)
                                .typeString(`<p style={{fontSize:"50px",color:"white",backgroundColor:"rgba(248,228,252,255)",}} > fuck this life</p>`)
                                .deleteAll()
                                .pauseFor(100)
                                // .typeString(`<p style={{marginBottom:"5%",border:"3px solid red"}}>Depraved Scientists is an exclusive collection of 6,666 unique randomly generated NFTs. </p>`)
                                .typeString(`<p style={{marginBottom:"5%",border:"3px solid red"}}>lmao</p>`)
                                .deleteAll()
                                .pauseFor(100)
                                .typeString(`<p style={{marginBottom:"5%",border:"3px solid red"}}>Owning a depraved Scientist contributes to the financialization of experiments against humanity. We fuck with humanity. Fuck this shit 🤢 🤮 </p>`)
                                .callFunction(()=>{
                                    console.log('eimai mikropsolis kai asximomouris')
                                })
                                .start()
                        }}
                    />
                    <div
                    style={{
                        margin:"10px"
                    }}
                    >

                    </div>
                </p>
            </div>
        </div>);
}

export default TypeWritter