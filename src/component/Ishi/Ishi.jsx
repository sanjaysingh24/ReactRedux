import React from 'react'
import { useSelector } from 'react-redux'
const Ishi = () => {
    const mystate = useSelector((state)=>state.changeTheNumber);
  return (
    <div>
      hii bro bsdk this is my state{mystate}
    </div>
  )
}

export default Ishi
