import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Layout from "./Layout/Layout"
import Sidebar from './Layout/Sidebar';

// React Notification


function App() {

  return (
    <div className="App" id="outer-container">
       <Sidebar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
      
   <Layout />
   </div>
   </div>
  );
}

export default App;
