export const  Incnumber =()=>{
 return {
    type:"INCREMENT"
 }
}


export const decnumber  =()=>{
    return {
        type:"DECREMENT"
    }
}
export const senddata  =(payload)=>{
    return {
        type:"SENDDATA",
        payload:payload
    }
}