import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import styled from 'styled-components'
import SearchBox from "./SearchBox";
import {
  Navbar,
  Nav,
  NavDropdown,
  ButtonGroup,
  NavbarBrand,
  FormGroup,
  FormControl,
} from "react-bootstrap";

export default class SecondNavbar extends Component {
  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.value.handleClickOutside(event.target);
    }
  };
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <NavStyle>
              <Navbar
                collapseOnSelect=""
                style={{ borderBottom: "0.02rem solid lightgray",background:"#002147" }}
                fixed="top"
                expand="md"
                
                variant="dark"
              >
                <ButtonGroup sm="">
                  <Link to="/cart">
                    <ButtonContainer>
                      <span className="mr-2">
                        <i className="fas fa-cart-plus"></i>
                      </span>
                    </ButtonContainer>
                  </Link>
                  
                  <ButtonContainer cart
                  onClick={() => value.openlogin()}
                  >Login</ButtonContainer>
                  
                </ButtonGroup>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav  className="mr-auto  ">
                    <Nav.Item className="my-auto">
                  <Link to="/"><div className="nav-link text-light active-link ">Products</div></Link>
                  </Nav.Item>
                    
                    <Nav.Link disabled href="#pricing " className="text-light">Pricing</Nav.Link>
                    <NavDropdown disabled title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1" className="text-light">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <div className="main mx-auto ">
                    <FormGroup className="has-search" inline="">
                      <span className="fa fa-search form-control-feedback"></span>
                      <FormControl
                        id="searchInput"
                        type="text"
                        placeholder="Search..."
                        className="mr-sm-2 col-10"
                        mr="5"
                        autoComplete="off"
                        value={value.query}
                        onChange={value.searchInput}
                      />
                      <div  ref={this.setWrapperRef}>
                      <div className=" search-content ">
                        <SearchBox value={value} />
                        </div>
                      </div>
                    </FormGroup>
                  </div>
                  <div className="d-none d-sm-block">
                    <Link to="/">
                      <NavbarBrand id="navbar-brand">
                        <h3 className=" text-light "> SUNTHEMESS STORE</h3>
                      </NavbarBrand>
                    </Link>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </NavStyle>
          );
        }}
      </ProductConsumer>
    );
  }
}
const NavStyle = styled.div`



#searchInput {
  width: 40rem;
  border-radius: 0;
  outline:none;
  
  
}

.form-group {
  margin: 0 0 0 auto;
  
}
.has-search .form-control {
  padding-left: 2.375rem;
}
.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}
.search-content {
  
  position: absolute;
  width: 33.7rem;
  max-height: 20.7rem;
  display: flex;

  z-index: 2;
  padding: 0.05rem;
  /* margin-top:0.05rem */
}
@media only screen and (max-width: 768px) {
 
  .has-search .form-control-feedback {
    width: 2.375rem;
    line-height: 2.375rem;
  }
  .search-content {
    max-height: 100%;
    max-width: 90%;
    
  }
  
  #navbar-brand{
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  #searchInput {
    float: right;
    margin-top: 1rem;
    width: 100%;
  }
  .main{
    display: block;
  }
  .has-search .form-control-feedback {
    width: 11.375rem;
    height: 2.375rem;
    line-height: 4.375rem;
  }
  .search-content {
    margin-top: 3.5rem;
    max-width: 92%;
    
    
  }
 
}









`; 