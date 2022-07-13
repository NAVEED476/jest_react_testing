import React, { useState } from 'react'
import "../App"

const Arithmatic = () => {
    const [number,setnumber] = useState(0)
    

    const addition =() =>{
        setnumber(number+1)
        console.log("this is for addition")
    }
    const subtraction = () =>{
        setnumber(number-1)
    }

    const multiplication = () =>{
        setnumber(number*2)
        console.log("this is for multiplication");
    }
    const division = () =>{
        setnumber(Math.floor(number/2))
    }
    

  return (
    <div className='App'>

        <h1>{number}</h1>
       <button onClick={addition}>ADD</button>
       <button onClick={subtraction}>SUB</button>
       <button onClick={multiplication}>MUL</button>
       <button onClick={division}>DIV</button>
    </div>
  )
}

export default Arithmatic