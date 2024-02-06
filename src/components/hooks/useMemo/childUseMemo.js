import React, { useMemo, useState } from 'react'

function ChildUseMemo({greeting}) {

    const[age,setAge]=useState(10)
    const upperCaseMemorizedValue =useMemo(()=>{
        console.log("lowertoUpperCase Function")
        // Expensive calculation 
        // for(let i=0;i<100000;i++){
        //     console.log(i)
        // }
        const upperCase=greeting.toUpperCase()
        return upperCase
    },[greeting])
    


    const increaseAgeFunction=()=>{
        console.log("increase age")
        setAge(age+20)
    }
  return (
    <div>

        <h2>{upperCaseMemorizedValue}</h2>
        <h2>Current age - {age}</h2>
        <button onClick={increaseAgeFunction} >Click to increase age</button>
     
    </div>
  )
}

export default ChildUseMemo

