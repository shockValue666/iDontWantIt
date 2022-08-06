import React from 'react'
// import { makeStyles } from '@mui/material'
import Typewriter from 'typewriter-effect';
import {useEffect,useRef} from "react"



function TypeWritter() {
        const divRef = useRef(null);
        useEffect(() => {
            if(divRef){
                console.log("divref exists");
                ((divRef as any).current as HTMLButtonElement).scrollIntoView({ behavior: 'smooth' })   
            }
        },[]);
  return (
        <div style=
        {{border:0,
        borderRadius:15,
        color:'black', 
        padding:'0 30px',
        height:"400px",
        overflow:"auto"
        }}
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
                <div style={{
                    // backgroundColor:"rgba(248,228,252,255)",
                    // zIndex:"1000"
                    marginBottom:"15px",
                    backgroundColor:"black"
                }} 
                ref={divRef}
                >
                    <Typewriter
                    options={{
                    delay:50
                    }}
                        onInit={(typewriter)=>{
                            typewriter
                                // .pauseFor(250)
                                // .typeString("💊🚬🕉💊🚬🕉")
                                .pauseFor(100)
                                .deleteAll()
                                .pauseFor(100)
                                .typeString(`fuck this life`)
                                .deleteAll()
                                .pauseFor(100)
                                // .typeString(`<p style={{marginBottom:"5%",border:"3px solid red"}}>Depraved Scientists is an exclusive collection of 6,666 unique randomly generated NFTs. </p>`)
                                // .typeString(`<p style={{marginBottom:"5%",border:"3px solid red",background:"black"}}>lmao</p>`)
                                // .deleteAll()
                                // .pauseFor(100)
                                .typeString(`Owning a depraved Scientist funds a series of experiments against humans.`)
                                .pauseFor(50)
                                .deleteAll()
                                .pauseFor(50)
                                .typeString("We fuck with humanity.")
                                .pauseFor(50)
                                .deleteAll()
                                .pauseFor(50)
                                .typeString(" Fuck this shit 🤢 🤮 ")
                                .callFunction(()=>{
                                    console.log('eimai mikropsolis kai asximomouris')
                                })
                                .start()
                            // typewriter
                            // .pauseFor(250)
                            // .typeString('A simple yet powerful native javascript')
                            // .pauseFor(300)
                            // .deleteChars(10)
                            // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
                            // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
                            // .pauseFor(1000)
                            // .start();
                        }}
                    />
                    <div
                    style={{
                        margin:"10px"
                    }}
                    >

                    </div>
                </div>
            </div>
        </div>);
}

export default TypeWritter