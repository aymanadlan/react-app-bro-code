 

 import React from 'react'
 
 const Button = () => {
    const handleClick = (e) => e.target.textContent = "OUTCH!";
    
   return (
     <button onDoubleClick={(e) => handleClick(e)}>Click here</button>
   )
 }
 
 export default Button