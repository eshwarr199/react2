



import React, { useState } from 'react'
import ChildUseMemo from './childUseMemo'

function ParentUseMemo(){
    const data=new Date()
    const [greeting,setGreeting]=useState("Good Morning")
return(
    <diV>
        <ChildUseMemo greeting={greeting}/>
    </diV>
)
}
export default ParentUseMemo