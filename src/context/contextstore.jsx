import { createContext, useState } from "react";

export const globalstore = createContext(null);

const  Globalcontext = (props)=>{
    const[ram,setname] =useState('ishu')
    const contextvalue ={setname,ram};
    return(
        <globalstore.Provider value= {contextvalue}>
            
            {props.children}
            
            </globalstore.Provider>
    )
}

export default Globalcontext;