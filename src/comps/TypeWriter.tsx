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
        fontSize:"50px"
        }}>
                <Typewriter
                    onInit={(typewriter)=>{
                        typewriter.typeString("💊🚬🕉💊🚬🕉")
                            .pauseFor(1000)
                            .deleteAll()
                            .pauseFor(1000)
                            .typeString("fuck this life")
                            .callFunction(()=>{
                                console.log('eimai mikropsolis kai asximomouris')
                            })
                            .start()
                    }}
                />
            </div>
        </div>);
}

export default TypeWritter