    import React, { Component } from 'react';   
  
    import Router from './Router'
    import { Container, Row, Col } from 'reactstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
  
    export class Layout extends Component {  
        loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
      
        render() {  
            return ( <div  >
                <Container>
               <Row>
                   <Col>
         
                   </Col>
               </Row>
               <Row>
               <Col>
               <Router />
                   </Col>
                   
                   
               </Row>
         
           
             
               
                </Container> 
         </div>
            )  
        }  
    }  
      
    export default Layout  
