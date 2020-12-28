import React, { useState, useCallback, Component } from 'react'
import  {useTransition}  from 'react-spring'
import {  animated } from 'react-spring'
import { SketchPicker } from 'react-color'
import img1 from './images/i1.jpeg'
import img2 from './images/i2.jpeg'
import img3 from './images/i3.jpeg'
import _default from 'react-bootstrap/esm/ModalFooter'
//import transitions from './trans'
export default class Interior extends Component { 
  state = {color: '#fff',index:0,colors:[],files:[]};
  handleClickk = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };
     
   handleSubmit = this.handleSubmit.bind(this);
   handleClickk = this.handleClickk.bind(this);
onFileUpload=event=>
{
 console.log(this.state.files)
}
handleRemoveFile = (pos) =>{
  console.log(pos)
}
   onFileChange=event =>{
    var file = event.target.files[0];
 //   console.log(this.attributes[1].nodeValue)
 this.state.files.push({
  id   : this.state.files.length,
  file :  file
});//"<div><a href=\"#\" data-fileid=\"" + parseInt(this.state.files.length) + "\" onClick="+console.log(this)+">Remove</a></div>"
var removeLink ="<div><a href='#' onClick=this.handleClickk>Click me</a></div>"
console.log(removeLink)
console.log(this.state.files)

//"<a class=\"removeFile\" href=\"#\" data-fileid=\"" + this.state.files.length + "\">Remove</a>";console.log($(this).parent().children('a').data('fileid'))this.state.files.splice(this.state.files.length-1,1)
//this.state.files.splice(this.state.files.length-1,1);
     document.getElementsByTagName("p")[0].innerHTML+=" "+event.target.files[0].name+ removeLink

   function  handleDelFile  (e) {
  
    console.log('(this).parent().childr')
  
   }  
  
  
   }
  
  
   handleChangeConfirmed = () => {
     this.state.colors.push(this.state.color)
   // this.setState({ colors:[...this.state.colors,this.state.color]});
   console.log(this.state.colors)
   }
   handleRemoveLast = ()=>{

      if(this.state.colors.length==1)  { document.getElementById("myDIV1").style.backgroundColor = '#FFFAF0'
      document.getElementById("myDIV2").style.backgroundColor = '#FFFAF0'
      document.getElementById("myDIV3").style.backgroundColor = '#FFFAF0'
      document.getElementById("myDIV4").style.backgroundColor = '#FFFAF0'
      document.getElementById("myDIV5").style.backgroundColor = '#FFFAF0'}
    else if (this.state.colors.length==2)  {document.getElementById("myDIV2").style.backgroundColor = '#FFFAF0'
    document.getElementById("myDIV3").style.backgroundColor = '#FFFAF0'
    document.getElementById("myDIV4").style.backgroundColor = '#FFFAF0'
    document.getElementById("myDIV5").style.backgroundColor = '#FFFAF0'
  }
    else if   (this.state.colors.length==3)  { document.getElementById("myDIV3").style.backgroundColor = '#FFFAF0'
    document.getElementById("myDIV4").style.backgroundColor = '#FFFAF0'
    document.getElementById("myDIV5").style.backgroundColor = '#FFFAF0'}
    else if(this.state.colors.length==4) { document.getElementById("myDIV4").style.backgroundColor = '#FFFAF0'
    document.getElementById("myDIV5").style.backgroundColor = '#FFFAF0'}
    else if (this.state.colors.length==5) document.getElementById("myDIV5").style.backgroundColor = '#FFFAF0'

     if(this.state.colors.length>0)
     {
       this.state.colors.pop();

     
     }else{
       console.log("Can't Remove from Empty list")
     }
   }

   handleEmptyList = ()=>{
    if(this.state.colors.length>0)
    {
      this.state.colors=[]
        document.getElementById("myDIV1").style.backgroundColor ='#FFFAF0'
        document.getElementById("myDIV2").style.backgroundColor = '#FFFAF0'
     document.getElementById("myDIV3").style.backgroundColor = '#FFFAF0'
       document.getElementById("myDIV4").style.backgroundColor = '#FFFAF0'
        document.getElementById("myDIV5").style.backgroundColor = '#FFFAF0'
      console.log(this.state.colors)
    }else{
      console.log("Can't Empty list")
    }
  }
  
 handleChangeComplete = (color) => { 

  this.setState({ color: color.hex });

  return (this.state.colors.length==0)?   document.getElementById("myDIV1").style.backgroundColor = color.hex:
  (this.state.colors.length==1)?   document.getElementById("myDIV2").style.backgroundColor = color.hex:
  (this.state.colors.length==2)?   document.getElementById("myDIV3").style.backgroundColor = color.hex:
  (this.state.colors.length==3)?   document.getElementById("myDIV4").style.backgroundColor = color.hex:
  (this.state.colors.length==4)?   document.getElementById("myDIV5").style.backgroundColor = color.hex:null
 };
  handleSubmit(e) {
    alert('The value is: ' + this.state.colors);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <table border = '1' >
    <tr><td><br /></td></tr>
    <tr><td><br /></td></tr>
    <tr><td><br /></td></tr>
 <tr><td>
      <label>
     Name:
     </label>
     </td>
    <td>
    <input type="text" name="name"  />
    </td></tr>
 <tr><td> <label>
     
      Theme:
      </label>
     </td>
      <td>
      <select name="theme" id="cars" size="10">
     <option value="Chinese">Chinese</option>
     <option value="Egyptian">Egyptian</option>
      <option value="Siamese">Siamese</option>
      <option value="Korean">Korean</option>
     <option value="Korean">Korean</option>
     <option value="audi">Korean</option>
    <option value="audi">Korean</option>
      <option value="audi">Korean</option>
      <option value="audi">Korean</option>
      <option value="audi">Korean</option>
    </select></td></tr>
 
 </table>
 

 <tr>
    <td> <label>
     
     Color:
     </label>
      </td><td><SketchPicker 
                 width={220}
                 color={this.state.color}
                 onChange={this.handleChangeComplete}
      /></td>   
      <td></td>
     
       <td><label>Color 1</label>
         <div class="myDIV" id="myDIV1">

</div></td><td><label>Color 2</label>
  <div class="myDIV" id="myDIV2" >

</div></td>
<td><label>Color 3</label><div class="myDIV" id="myDIV3" >

</div></td>
<td><label>Color 4</label><div class="myDIV" id="myDIV4" >

</div></td>
<td><label>Color 5</label><div class="myDIV" id="myDIV5" >

</div></td>
       </tr>
<tr> <td><button  type='button' action='' onClick ={this.handleChangeConfirmed}>Confirm Color</button></td>
       <td><button  type='button' action='' onClick ={this.handleRemoveLast}>Remove last</button></td>
       <td><button  type='button' action='' onClick ={this.handleEmptyList}>Empty list</button></td></tr>

       <tr><td></td>
       <td>   <label for="myfile">Select a file:</label>
    
     <input type="file" onChange={this.onFileChange} /> 
   </td>
       <tr><td></td></tr>
   
       <tr><td><p id="files"></p></td></tr>
       
       </tr>

    <input type="submit" value="Submit" /> 
 
      </form>
    );
  }
}



 




  

 
   
    


  