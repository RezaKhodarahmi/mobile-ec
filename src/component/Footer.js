import React, { Component } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import {Container,Row,Col,Nav} from 'react-bootstrap';

export default class footer extends Component {
  render() {
    return (
      <ContainerContent ContainerContent>
        <div className="footer" id="footer">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="6" xs="6">
                <h4> Sunthemess </h4>
              </Col>
              <Col lg="3" sm="2" xs="3">
                <h3> Contact </h3>
                <Nav>
                  <Nav.Item>
                    <Nav.Link className="email" >
                      mrkhodarahmi@gmail.com
                    </Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item>
                    <Nav.Link className="text-light" >
                      +98-910-07-46-903
                    </Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item>
                    <Nav.Link className="text-light">
                      +98-935-63-83-311
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg="3"sm="2" xs="3">
                <Nav>
                  <Nav.Item>
                    <h5>
                      <Nav.Link to="/" style={{ marginTop: "5rem" }}>
                        ABOUT US
                      </Nav.Link>
                    </h5>
                  </Nav.Item>
                  <Nav.Item>
                    <h5>
                      <Nav.Link to="/"> CURRENT SERIES </Nav.Link>
                    </h5>
                  </Nav.Item>
                  <Nav.Item>
                    <h5>
                      <Nav.Link to="/"> THE HOUSE </Nav.Link>
                    </h5>
                  </Nav.Item>
                  <Nav.Item>
                    <h5>
                      <Nav.Link to="/"> LOOKING BACK </Nav.Link>
                    </h5>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>
          <div className="footer-bottom">
            <Container>
              <p className="pull-left copyright">
                Copyright © Sunthemess 2020. All right reserved.
              </p>
            </Container>
          </div>
        </div>
      </ContainerContent>
    );
  }
}
const ContainerContent = styled.div`

width: 100%;
display:block;
border-bottom: 1px solid #CCCCCC;
border-top: 1px solid #DDDDDD;
position: absolute;
top:100%;
bottom:0;
margin-bottom:0;
height: auto;
background: #002147;
.full {
    width: 100%;    
}
.gap {
	height: 30px;
	width: 100%;
	clear: both;
	display: block;
}
.footer {
	background: #002147;
  padding-bottom: 30px;
}
.footer p {
	margin: 0;
}
.footer img {
	max-width: 100%;
}
.footer h3 {
	color: white;
	font-size: 18px;
	font-weight: 600;
	line-height: 27px;
	padding: 40px 0 0px;
	text-transform: uppercase;
  margin-bottom: 15px;
}

.footer h4 {
	color: white;
	font-size: 2em;
	font-weight: 600;
	line-height: 38px;
	padding: 40px 0 10px;
	font-family: cursive;
  font-weight: lighter;
}

.footer ul {
	font-size: 13px;
	list-style-type: none;
	margin-left: 0;
	padding-left: 0;
	margin-top: 0px;
	color: #7F8C8D;
  padding: 0 0 8px 0;
}

.email{
  border-bottom: 3px solid #fff;
}
.footer ul li a {
	padding: 0 0 12px 0;
	display: block;
}
.footer a {
	color: white;
  font-weight: lighter;
}

.footer p {
	color: white;
  font-weight: lighter;
  
}

.footer a:hover {
	text-decoration:none;
  font-weight: bold;
}
.supportLi h4 {
	font-size: 20px;
	font-weight: lighter;
	line-height: normal;
	margin-bottom: 0 !important;
	padding-bottom: 0;
}

.bg-gray {
	background-image: -moz-linear-gradient(center bottom, #BBBBBB 0%, #F0F0F0 100%);
	box-shadow: 0 1px 0 #B4B3B3;
}

.footer a {
	color: #78828D
}

.footer-bottom {
  margin-top: 2em;
	border-top: 1px solid #DDDDDD;
	padding-top: 20px;
	padding-bottom: 10px;
}
.footer-bottom p.pull-left {
	padding-top: 6px;
  font-size: 0.75em
}
`;
