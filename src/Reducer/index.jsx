//combineReducers is used to combine multiple reducers together and it is a object of redux
import {combineReducers} from 'redux';
import changeTheNumber from "./Updown";

const rootReducer = combineReducers({
    changeTheNumber
    // can add multiple reducers
});


// now we have to export the  rootReducer
export default rootReducer;