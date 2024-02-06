


import { useState } from "react"


const UseStateExample =()=>{
    const initialValue=100

const[count,setCount]=useState(initialValue)
const [timer,setTimer]=useState(initialValue)

const handleIncrement =()=>{
    setCount(count+1)

}


const handleTimer=()=>{


    setInterval(()=>{

 
     

        if(timer===0){
            alert("timeUp")
        }else{
            setTimer(timer=>timer-1)

        }

    },1000)

   

}



    return(
        <>
        <h2>useState example  {count}</h2>
        <h2  style={{color:timer>50?"black":"red"}} > timer -- {timer}</h2>
        <button onClick={handleIncrement} >Click to increment</button>
        <button onClick={handleTimer} >Click to start exam</button>
        </>
    )
}

export default UseStateExample
