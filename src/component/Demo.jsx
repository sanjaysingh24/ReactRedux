import React from 'react'
import './demo.css';
import { useSelector,useDispatch } from 'react-redux';
import {senddata} from '../Action/Index';
const Demo = () => {


const dispatch = useDispatch();
  return (
    <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
            {/* <a  className='quantity_minus' title='Decrement'><span className='icon' onClick={()=>dispatch(decnumber())}>    - </span></a>
            <input type="text" className='quantity_input' value={mystate} name='quantity' />
            <a  className='quantity_plus' title='Increment'><span className='icon' onClick={()=>dispatch(Incnumber())}>+</span></a> */}

           
        <a  className='quantity_minus' title='Decrement'><span className='icon' onClick={()=>dispatch(senddata('1234543234'))}>    send data </span></a>
        </div>
    
    </div>
  )
}

export default Demo
