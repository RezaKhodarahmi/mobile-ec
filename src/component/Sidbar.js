import React, { Component } from "react";
import {
  Container,
  Row,
  Nav,
  NavItem,
  Col,
  FormGroup,
  FormControl,
  Form
} from "react-bootstrap";
import styled from "styled-components";

export default class Sidbar extends Component {
  constructor(){
    super();
    this.state ={
   
  }
}

  handelPriceFilter = (e)=>{
    
    this.props.value.handelPriceFilter(e)
  }
  handelBrandFilter = (e)=>{
    
    this.props.value.handelBrandFilter(e)
  }
  render() {
    const {tempBrand,tempPrice} =this.props.value
    return (
      <MainSidbar>
        <Container className="sidbar ">
          <Row>
            <Col className="my-4 p-2 text-center text-dark ">
              <Nav className="">
                <NavItem className="col-11 my-4 p-2 ">
                  <h5 className="text-title text-capitalize text-blue ">
                    sort by
                  </h5>
                </NavItem>
                <NavItem className="col-11 my-4 ">
                  <FormGroup>
                    <Form.Label>Brand: </Form.Label>
                    <Form.Control value={tempBrand} as="select" className="text-uppercase"  onChange={(e)=>this.handelBrandFilter(e) }>
                      <option value="">all</option>
                      <option value="sumsung">sumsung</option>
                      <option value="apple">apple</option>
                      <option value="google">google</option>
                      <option value="htc">htc</option>
                    </Form.Control>
                  </FormGroup>
                </NavItem>
                <NavItem className="col-11 my-2 ">
                  
                <FormGroup>
                    <Form.Label>Limit the price up to: $ </Form.Label>
                    <Form.Control value={tempPrice} as="select" className="text-uppercase" onChange={(e)=>this.handelPriceFilter(e)}>
                      <option value="">all</option>
                      <option value="12"> 12</option>
                      <option value="20">20</option>
                      <option value="40">40</option>
                      <option value="100">100</option>
                    </Form.Control>
                  </FormGroup>
                </NavItem>
                
              </Nav>
            </Col>
          </Row>
        </Container>
      </MainSidbar>
    );
  }
}

const MainSidbar = styled.div`
  margin: 2rem 0 0 0;
`;
