import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Layout from "./Layout/Layout"
import Sidebar from './Layout/Sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux';
import modern1 from './Files/Modern/1.jpg';
// React Notification
const store = require('./reducers').init();
function App() {


  return (<div  id="app"  style={{ 
    backgroundImage  : `url(${modern1})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
   // backgroundColor : 'blue'
 
   }}>
    <Provider store={store}>
    <div className="App" id="outer-container" >
       <Sidebar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">

   <Layout />
   </div>
   </div>
   </Provider>
   </div>  );
}

export default App;
