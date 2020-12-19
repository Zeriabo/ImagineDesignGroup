    import React, { Component } from 'react';   
    import Header from './Header'  
    import Footer from './Footer'  
    import Router from './Router'
    import { Container, Row, Col } from 'reactstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
  
    export class Layout extends Component {  
        loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>  
      
        render() {  
            return ( 
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
         
            )  
        }  
    }  
      
    export default Layout  
