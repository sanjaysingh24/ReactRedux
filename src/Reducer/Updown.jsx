

const changeTheNumber =(state='',action)=>{
switch(action.type){
    
    case "SENDDATA":
        return action.payload;
    default: return state;
}
}

export default changeTheNumber;