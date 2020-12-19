import React, { useState, useCallback, Component } from 'react'
import { render } from 'react-dom'
import {  animated } from 'react-spring'
import { SketchPicker } from 'react-color'
import img1 from './images/i1.jpeg'
import img2 from './images/i2.jpeg'
import img3 from './images/i3.jpeg'
//import transitions from './trans'

const images = [img1,img2,img3]
var name,theme;
var colors=['#C0FFEE','#4A90E2']
var page = [
  
  ({ style }) => <animated.div style={{ ...style}}>
  
  <form>
<table border = '1'>
    <tr><td><br /></td></tr>
    <tr><td><br /></td></tr>
    <tr><td><br /></td></tr>
<tr><td>
     <label>
    Name:
    </label>
    </td>
    <td>
    <input type="text" name="name" value={name} />
   </td></tr>
<tr><td> <label>
     
     Theme:
     </label>
     </td>
     <td>
     <select name="cars" id="cars" size="10">
     <option value="volvo">Chinese</option>
     <option value="saab">Egyptian</option>
     <option value="opel">Siamese</option>
     <option value="audi">Korean</option>
     <option value="audi">Korean</option>
     <option value="audi">Korean</option>
     <option value="audi">Korean</option>
     <option value="audi">Korean</option>
     <option value="audi">Korean</option>
     <option value="audi">Korean</option>
   </select></td></tr>
 
</table>
 
,
<tr>
   <td> <label>
     
     Color:
     </label>
     </td><td><SketchPicker 
 width={220}

 color={Interior.color}
                    onChange={Interior.handleChangeComplete}

     /></td>
   </tr>
   <tr><td>
     <SketchPicker  /></td></tr>
   <input type="submit" value="Submit" /> 
 
</form>


  </animated.div>,

 ]
 

  
 export class Interior extends Component {
  constructor(props) {
    super(props);
    
    this.state = { selection:[],colors:[5],color:"" ,index:0};
    


}

    
    handleChangeComplete = (color, event) => {
      this.setState({ color:[...colors,color.hex ]});
    };
    
  
    
    
  
    render() { 
    return (
    
       
        transitions.map(({ item, props, key }) => {
          const Page = page[item]
          return <Page key={key} style={props}>  

         </Page>
        })
        
   
    )
  }
}
export default Interior
  