import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Layout from "./Layout/Layout"
import Sidebar from './Layout/Sidebar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux';
// React Notification
const store = require('./reducers').init();
function App() {


  return (
    <Provider store={store}>
    <div className="App" id="outer-container">
       <Sidebar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
      
   <Layout />
   </div>
   </div>
   </Provider>
  );
}

export default App;
