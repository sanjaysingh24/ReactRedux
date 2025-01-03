import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store/Store'
import {Provider} from 'react-redux';
import Globalcontext from './context/contextstore.jsx'
store.subscribe(()=>console.log(store.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/* <Provider store ={store}> */}
    <Globalcontext>

    <App />
    </Globalcontext>
  
  </React.StrictMode>,
)
// by provide the provider we can get the store and get the data from redux 
