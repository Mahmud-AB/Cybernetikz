import React, {useState,useEffect} from 'react'

const Effect = () => {
    const[width,setwidth]=useState(window.screen.width)
    const[height,setheight]=useState(window.screen.height)
    const actualWidth=()=>{
        setwidth(window.innerWidth);
    }
    const actualHeight=()=>{
        setheight(window.innerHeight);
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth)
        return()=>{
            window.removeEventListener("resize",actualHeight)
        }
    })
    useEffect(()=>{
        window.addEventListener("resize",actualHeight)
        return()=>{
            window.removeEventListener("resize",actualHeight)
        }
    })



  return (
    <div>
        <h1>WidthxHeight:{width} x {height}</h1>
    </div>
    
  )
}

export default Effect