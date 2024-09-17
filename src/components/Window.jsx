import React, { useEffect, useState } from 'react'

const Window = () => {

    const [width,setWidth]= useState(window.innerWidth);
    const [height,setHeight]= useState(window.innerHeight);
    
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("--> EVENT LISTENER ADDED");
    },[]);

    const handleResize = ()=>
        {
          setWidth(window.innerWidth);
          
          setHeight(window.innerHeight);
        };

  return (
    <>
    <p>Width: {width}</p>
    <p>Height: {height}</p>
    </>
  )
}

export default Window