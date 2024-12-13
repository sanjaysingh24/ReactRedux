import React from 'react'
import { useContext } from 'react'
import { globalstore } from '../../context/contextstore'
const Sanju = () => {
const {setname,ram}  = useContext(globalstore);
  return (
    <div>
      hii bro my name is {ram}
      <button onClick={()=>setname("sanju")}>change</button>
    </div>
  )
}

export default Sanju
