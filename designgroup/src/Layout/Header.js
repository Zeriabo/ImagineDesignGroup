
import React, { Component } from 'react';
import img from './images/logo'

import { BrowserRouter as    Prompt,withRouter,Switch} from 'react-router-dom'; // eslint-disable-line no-unused-vars


export class Header extends Component {  
    render() {  
        return (  
             <div>
            <div class="header2.bg-success-gradiant">
  <div>
 
    <nav class="navbar navbar-expand-lg h2-nav">
      <a class="navbar-brand" href="./Home">
      <img src={img} alt='ss'height="100" width="150" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#header2" aria-controls="header2" aria-expanded="false" aria-label="Toggle navigation">
				<span class="icon-menu"></span>
			</button>
      <div class="collapse navbar-collapse hover-dropdown" id="header2">
        <ul class="navbar-nav">
          <li class="nav-item active"><a  class="nav-link" href="./Home"><font size='5'>Home</font></a></li>
          <li class="nav-item dropdown position-relative"></li>
          
<li>&nbsp;</li>
         
            <li class="nav-item dropdown position-relative">
          <a class="nav-link dropdown-toggle" href='#' id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font size='5'>Design</font> <i class="icon-arrow-down ml-1 font-12"></i>
						</a>
            <ul class="dropdown-menu">
            <div class="btn-group dropright">
            <div class="btn-group shadow-0"  role="group" >
            <a class="nav-link dropdown-toggle" href='#' id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font size='5'>Architectire</font> <i class="icon-arrow-down ml-1 font-12"></i>
						</a>
              <div class="dropdown-menu">
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              </div>
              </div>
              <li class="nav-item dropdown position-relative">
          <a class="nav-link dropdown-toggle" href='#' id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font size='5'>Design</font> <i class="icon-arrow-down ml-1 font-12"></i>
						</a>
            <ul class="dropdown-menu">
            <div class="btn-group dropright">
            <div class="btn-group shadow-0"  role="group" >
            <a class="nav-link dropdown-toggle" href='#' id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font size='5'>Architectire</font> <i class="icon-arrow-down ml-1 font-12"></i>
						</a>
              <div class="dropdown-menu">
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              <div class="btn-group shadow-0"  role="group" >  <a class="dropdown-item" href="#">Theme</a></div>
              </div>
              </div>
              
              <li><a class="dropdown-item" href="Color">Color</a></li>
              <li><a class="dropdown-item" href="Material">Material</a></li>
              <li class="divider" role="separator"></li>
              <li><a class="dropdown-item" href="ProjectDimensions">Project Dimensions</a></li>
             
         </div>
    
            </ul>
          </li>
         
              <li><a class="dropdown-item" href="Color">Color</a></li>
              <li><a class="dropdown-item" href="Material">Material</a></li>
              <li class="divider" role="separator"></li>
              <li><a class="dropdown-item" href="ProjectDimensions">Project Dimensions</a></li>
             
         </div>
    
            </ul>
          </li>
         
          <li>&nbsp;</li>
          
          
          
         
          <li class="nav-item dropdown position-relative">
          <a class="nav-link dropdown-toggle" href="#" id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font size='5'>Projects</font> <i class="icon-arrow-down ml-1 font-12"></i>
						</a>
            <ul class="dropdown-menu">
            <div class="btn-group dropright">
              <li><a class="dropdown-item" href="#">Add a projects</a></li>
              <li><a class="dropdown-item" href="#">Projects</a></li>
              <li><a class="dropdown-item" href="#">Consulting</a></li>
              <li class="divider" role="separator"></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
             
         
    </div>
            </ul>
          </li>
          
          
          </ul>
          <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a class="nav-link" href="#"><i class="icon-bubble"></i> Need help?</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
        
          </div>

        </nav>
        
       
      </div>
    </div>
    </div>       

             
           
        )
    }
}
export default withRouter(Header) 