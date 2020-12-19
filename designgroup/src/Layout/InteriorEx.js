
// import React from 'react';
// import { PhotoshopPicker } from 'react-color';

// export default class Interior extends React.Component {
//   state = {
//     background: '#fff',
//   };

//   handleChangeComplete = (color, event) => {console.log(color.hex)
//     this.setState({ background: color.hex });
//   };

//   render() {
//     return <PhotoshopPicker onChangeComplete={ this.handleChangeComplete } />;
//   }
// }


import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import { useTransition, animated } from 'react-spring'
import { SketchPicker } from 'react-color'
import img1 from './images/i1.jpeg'
import img2 from './images/i2.jpeg'
import img3 from './images/i3.jpeg'

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
     </td><td><SketchPicker  /></td>
   </tr>
  
   <input type="submit" value="Submit" /> 
 
</form>


  </animated.div>,

 ]
 

  
 export default class InteriorEx extends React.Component {
  state = {
    background: '#fff',selection:[],index:0,colors:[5],color:''
  };
   
  
  handleChangeComplete = (color) => {console.log(color.hex)
    this.setState({ background: color.hex });
  };

  render() {
    return (<animated.div >
  
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
         </td><td><SketchPicker  /></td>
       </tr>
      
       <input type="submit" value="Submit" /> 
     
    </form>
    
    
      </animated.div>,
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
      
    );
  }
}
  

  /*import React from 'react';
import { SketchPicker } from 'react-color';

class Component extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}*/
/* const handleChangeComplete = (color, event) => {
      this.setState({ color:[...colors,color.hex ]});
    };
    const transitions = useTransition(index, p => p, {
      from: { opacity: -1, transform: 'translate3d(20%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    
  
  console.log(color)
    return (
      <div className="simple-trans-main"  >
       
        {transitions.map(({ item, props, key }) => {
          const Page = page[item]
          return <Page key={key} style={props}>  

         </Page>
        })}
        
      </div>
    )
  }
  
  render(<Interior />, document.getElementById('root'))*/