import React, { useState, useCallback, Component } from 'react'
import  {useTransition}  from 'react-spring'
import {  animated } from 'react-spring'
import { SketchPicker } from 'react-color'
import img1 from './images/i1.jpeg'
import img2 from './images/i2.jpeg'
import img3 from './images/i3.jpeg'
import _default from 'react-bootstrap/esm/ModalFooter'
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn,Button } from 'mdbreact';
import Form from 'react-bootstrap/Form'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
//import transitions from './trans'
export default class Interior extends React.Component { 
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  this.state = {name:'',email:'',color: '#fff',index:0,colors:[],files:[],changedFileIndex: -1, dropdownOpen: false,  dropDownValue: 'Select action',key:'',note:''};

  this.handleSubmit = this.handleSubmit.bind(this)
this.fileUploaderRef = React.createRef();
}
toggle() {
  this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  
  }));

}
changeValue =(event)=> this.setState({dropDownValue: event.currentTarget.textContent})
setName = (event)=>   this.setState({name: event.target.value});
setEmail =(event)=>  this.setState({email: event.target.value});
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

this.setState({changedFileIndex: index});
this.fileUploaderRef.current.click();
}

Delete(filename) {
this.setState(prevState => {
    const list = [];
    prevState.files.map((file, i) => {
        if (file.name !== filename) {
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
///handleSubmit=(e)=>alert(this.state) 

handleSubmit = (e)=>{
  //this.state.colors,this.state.name,this.state.email,this.state.files
 // console.log(this.state.colors,this.state.name,this.state.email,this.state.files,this.state.dropDownValue)
 console.log(this.state.files[0])
  // emailjs.send('service_0r9ih5c',"template_pfug14a", this.state, 'user_sjaoSadgmf5VEhR2wcW1T')
  //   .then((response) => {
  //      console.log('SUCCESS!', response.status, response.text);
  //   }, (err) => {
  //      console.log('FAILED...', err);
  //   });
    this.sendEmail(this.state).then(submited => {
      toast.success('Email sent successfully');
      
      this.setState({ key: 'cleared' })
      this.setState({ note: 'Email sent successfully', loading: false });},)
      .catch(errors => {toast.error('Error occured')
    this.setState({ errors, loading: false })});
e.preventDefault();
}

sendEmail = async emailData => 
{
  console.log(emailData);
  return axios.post('http://localhost:4444/api/v1/form', this.state)
  .then(res => res.data,err => Promise.reject(err.response.data.errors))
};

  render() {
    return (
      
      <MDBContainer>
      <form onSubmit={this.handleSubmit}>
     
   
    <MDBCardTitle>Design Application</MDBCardTitle>

    <MDBCol>
    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.setName} />
    </MDBCol>
    <MDBRow> &nbsp;</MDBRow>
    <MDBRow>
      <MDBCol>
  
    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.setEmail}   />
    </MDBCol>

    </MDBRow>
    <MDBRow> &nbsp;</MDBRow>
 <MDBRow><MDBCol middle='true'> 

    <div class="col-md-12"><Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="primary">
        <DropdownToggle caret color="btn btn-outline-primary">
        {this.state.dropDownValue}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Classic Themes</DropdownItem>
          <DropdownItem><div onClick={this.changeValue}>New Classic</div></DropdownItem>
          <DropdownItem>  <div onClick={this.changeValue}>Classic</div></DropdownItem>
          <DropdownItem divider />
          <DropdownItem header><div onClick={this.changeValue}>Others</div></DropdownItem>
          <DropdownItem><div onClick={this.changeValue}>Contemporary</div></DropdownItem>
          <DropdownItem><div onClick={this.changeValue}>Modern</div></DropdownItem>
          <DropdownItem><div onClick={this.changeValue}>Futuristic</div></DropdownItem>
        </DropdownMenu>
      </Dropdown></div>
    </MDBCol></MDBRow>
    <div class="col-md-12">
       <MDBCol>  
      
       <Form>
  <Form.File 
    id="custom-file"
    label="Custom file input"
    ref={this.fileUploaderRef}
    onChange={this.fileUpload}
    multiple="multiple"
    custom
  />
</Form>
   </MDBCol>
       <MDBRow><MDBCol><table className="filesName">

          <tbody>
          {
              this.state.files.map((file, i) =>
                  <MDBRow key={i}>
                      <th style={{textAlign: "left"}}>{file.name} :</th>
                      <th>
                          <button type="file" class="btn btn-outline-warning btn-sm" onClick={() => this.Change(i)}>Change</button>
                      </th>
                      <th>
                          <button   class="btn btn-outline-danger btn-sm" onClick={() => this.Delete(file.name)}>Delete</button>
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
   {this.state.name}
   
      </form>
     
      </MDBContainer>
     
    );
  }
}



 




  

 
   
    


  