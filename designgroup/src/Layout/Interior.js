import React, { useState, useCallback, Component } from 'react'
import  {useTransition}  from 'react-spring'
import {  animated } from 'react-spring'
import { SketchPicker } from 'react-color'
import img1 from './images/i1.jpeg'
import img2 from './images/i2.jpeg'
import img3 from './images/i3.jpeg'
import _default from 'react-bootstrap/esm/ModalFooter'
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn,Button } from 'mdbreact';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


//import transitions from './trans'
export default class Interior extends React.Component { 
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  this.state = {color: '#fff',index:0,colors:[],files:[],changedFileIndex: -1, dropdownOpen: false,  dropDownValue: 'Select action',};
  

this.fileUploaderRef = React.createRef();
}
toggle() {
  this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  
  }));

}
changeValue(e) {
  this.setState({dropDownValue: e.currentTarget.textContent})
}

fileUpload = (e) => {
let changedFile = e.target.files[0];
let uploadedFiles = e.target.files;

if (this.state.changedFileIndex >= 0) {
    this.setState(prevState => {
        const list = [];
        prevState.files.map((file, i) => {
            if (i === prevState.changedFileIndex)
                list.push(changedFile);
            else
                list.push(file);
        });
        return {
            files: list,
            changedFileIndex: -1,
        };
    });
} else if (this.state.files.length > 0) {
    this.setState(prevState => {
        return {files: [...prevState.files, ...uploadedFiles]}
    });
} else
    this.setState({files: [...e.target.files]});
};

Change(index, file) {
console.log("Change Function");
this.setState({changedFileIndex: index});
this.fileUploaderRef.current.click();
}

Delete(name) {
this.setState(prevState => {
    const list = [];
    prevState.files.map((file, i) => {
        if (file.name !== name) {
            list.push(file);
        }
    });
    return {
        files: list,
        changedFileIndex: -1,
    };
}); 
  
   

  
   }
 
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
});

     document.getElementsByTagName("p")[0].innerHTML+=" "+event.target.files[0].name

  
 
 
}
 
handleChangeConfirmed = () => {
  this.state.colors.push(this.state.color)

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

  e.preventDefault();
}

  render() {
    return (
      <MDBContainer>
      <form onSubmit={this.handleSubmit}>
     
   
    <MDBCardTitle>Design Application</MDBCardTitle>

    <MDBCol>
    <input type="text" name="name" placeholder="Name" />
    </MDBCol>
    <MDBRow> &nbsp;</MDBRow>
    <MDBRow>
      <MDBCol>
  
    <input type="text" name="Email" placeholder="Email" />
    </MDBCol>

    </MDBRow>
    <MDBRow> &nbsp;</MDBRow>
 <MDBRow><MDBCol middle='true'> 

    <div class="col-md-4"><Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="primary">
        <DropdownToggle caret>
        {this.state.dropDownValue}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Classic Themes</DropdownItem>
          <DropdownItem>New Classic</DropdownItem>
          <DropdownItem>  <div onClick={this.changeValue}>Another Action</div></DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Others</DropdownItem>
          <DropdownItem>Contemporary</DropdownItem>
          <DropdownItem>Modern</DropdownItem>
          <DropdownItem>Futuristic</DropdownItem>
        </DropdownMenu>
      </Dropdown></div>
    </MDBCol></MDBRow>
    <div class="col-md-12">
       <MDBCol>  
       <label for="myfile"><b>Select Your files:</b>
       <input type="file" multiple="multiple" id="file" ref={this.fileUploaderRef} onChange={this.fileUpload}/></label>
   </MDBCol>
       <MDBRow><MDBCol><table className="filesName">

          <tbody>
          {
              this.state.files.map((file, i) =>
                  <MDBRow key={i}>
                      <th style={{textAlign: "left"}}>{file.name} :</th>
                      <th>
                          <button type="file" onClick={() => this.Change(i)}>Change</button>
                      </th>
                      <th>
                          <button onClick={() => this.Delete(file.name)}>Delete</button>
                      </th>
                      
                  </MDBRow>
              )
          }
          </tbody>
      </table>
       </MDBCol></MDBRow>
   
       <MDBRow><MDBCol><p id="files"></p></MDBCol></MDBRow>
       </div>
 <MDBRow> &nbsp;</MDBRow>
 

 <MDBRow>
    <MDBCol> 
    <label htmlFor="formGroupExampleInput"><big>Color: </big></label>
      </MDBCol><MDBCol><SketchPicker 
                 width={220}
                 color={this.state.color}
                 onChange={this.handleChangeComplete}
      /></MDBCol>   
      <MDBCol rowSpan='2' ><label htmlFor="formGroupExampleInput">1<sub>st</sub> Color</label></MDBCol>
      
       <MDBCol class="myDIV" id="myDIV1">
       </MDBCol>
       <MDBCol rowSpan='2' ><label htmlFor="formGroupExampleInput">2<sub>nd</sub> Color</label></MDBCol>
       
 
  <MDBCol class="myDIV" id="myDIV2">
</MDBCol>
<MDBCol rowSpan='2' ><label htmlFor="formGroupExampleInput">3<sub>rd</sub> Color</label></MDBCol>
<MDBCol class="myDIV" id="myDIV3">
</MDBCol>
<MDBCol rowSpan='2' ><label htmlFor="formGroupExampleInput">4<sub>th</sub> Color</label></MDBCol>
<MDBCol class="myDIV" id="myDIV4">
</MDBCol>
<MDBCol rowSpan='2' ><label htmlFor="formGroupExampleInput">5<sub>st</sub> Color</label></MDBCol>
 <MDBCol class="myDIV" id="myDIV5">
</MDBCol>
       </MDBRow>
<MDBRow>
<div class="col-5">
   <MDBCol>

<Button variant="primary" action='' onClick ={this.handleChangeConfirmed}>Confirm Color</Button></MDBCol>

       <MDBCol>
       <Button variant="warning" action='' onClick ={this.handleRemoveLast}>Remove last</Button>
         </MDBCol>
       <MDBCol> <Button variant="danger"  action='' onClick ={this.handleEmptyList}>Empty list</Button>
  </MDBCol></div>
 
       
       </MDBRow>
       <div class="col-13">   
<MDBRow><MDBCol  >
          <textarea cols="50" value={this.state.value} onChange={this.handleChange} rows={6} name="info" placeholder='  Additional Informations'/>        
  </MDBCol></MDBRow>
  <div class="row-md-14">
  <Button as="input" type="submit" value="Submit" >Submit</Button>
  &nbsp;&nbsp;&nbsp;
  <Button as="input" type="reset" value="Reset" >Reset</Button> 

  </div>
 
  </div>
   
   
      </form>
      
      </MDBContainer>
     
    );
  }
}



 




  

 
   
    


  