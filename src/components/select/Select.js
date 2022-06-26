import React from 'react'
import { useNavigate } from 'react-router-dom'

const Select = ({name, setIsClick,setValue, clickFunc}) => {
  const navigate=useNavigate()
 //function clickFunc(){navigate("../"+name/*, {state:{country}}*/);setValue(name); setIsClick(false)}
  return (
    <div onClick={()=>{clickFunc(name)}}
    >
       {name}
    
    
    </div>
  )
}

export default Select
