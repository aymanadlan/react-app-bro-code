import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count ${count}`
    },[]);

    const addCount = () =>{
        setCount(c => c + 1);
    }

  return (
    <>
    <p>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    </>
  )
}

export default Counter