import React, { Component } from "react";
import {Link } from 'react-router-dom';
import {
  Container,Row,Col,Button
} from 'react-bootstrap'

export default class Default extends Component {
  render() {
    return (
      <Container className="py-5 my-5">
        <Row>
          <Col className="col-12 py-5 my-5 text-center text-primary">
          <h1 className="text-danger">404</h1>
            <h1 className="pb-3">Nothing Found</h1>
            <Link to="/">
              <button className="btn btn-outline-primary text-capitalize" type="button">back Home Page</button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
