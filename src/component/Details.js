import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import Title from "./Title";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";


export default class Details extends Component {
  commentSubmit=(e)=>{
    e.preventDefault();
  console.log('sdssdsd')
}

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {commentSubmit} = value.commentSubmit;
          const {
            id,
            company,
            title,
            img,
            price,
            info,
            inCart,
          } = value.detailproduct;
          if (value.detailproduct.length < 1) {
            return (
              <Container className="py-5 my-5">
                <Row>
                  <Col className="col-12 py-5 my-5 text-center  ">
                    <Title title="found" name="nothing" />
                    <Link to="/">
                      <button
                        className="btn btn-outline-primary text-capitalize"
                        type="button"
                      >
                        back home page
                      </button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            );
          }
          return (
            <Container className="py-5">
              {/* start title */}
              <Row>
                <Col className="col-10 mx-auto text-center text-blue text-slanted my-5">
                  <h1>{title}</h1>
                </Col>
              </Row>
              {/* end title */}
              {/* start info */}
              <Row>
                <Col md="6" className="col-10  mx-auto my-3 ">
                  {/* <Carousel>
                    <div>
                      <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
                        alt="Hong Kong"
                        
                      />
                      <p className="legend">Hong Kong</p>
                    </div>
                    <div>
                      <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
                        alt="Singapore"
                      />
                      <p className="legend">Italy</p>
                    </div>
                    <div>
                      <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
                        alt="Japan"
                      />
                      <p className="legend">Japan</p>
                    </div>
                    <div>
                      <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
                        alt="Las Vegas"
                      />
                      <p className="legend">Las Vegas</p>
                    </div>
                  </Carousel> */}
                  <Image src={img} fluid />
                </Col>

                <Col col="10" md="6" className="mx-auto my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span className="">$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back To Product</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      onClick={() => {
                        value.addToCart(id);
                        value.modalOpen(id);
                      }}
                      disabled={inCart ? true : false}
                    >
                      {inCart ? " inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="my-5">
                <Col sm="12" md="12" lg="12">
                  <Form onSubmit={this.commentSubmit}>
                    <Col lg="4" md="6" sm="12" className="d-inline-block">
                      <Form.Group controlId="formBasicEmail ">
                        <Form.Label>
                          Name<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="4" className="d-inline-block">
                      <Form.Group controlId="formBasicEmail ">
                        <Form.Label>
                          Email<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  required />
                      </Form.Group>
                    </Col>

                    <Col lg="10" md="12" sm="12" className="d-inline-block">
                      <Form.Group controlId="formBasicPassword ">
                        <Form.Label>Comment<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control as="textarea"  required/>
                      </Form.Group>
                      
                    </Col>
                    <Col
                      lg="10"
                      md="6"
                      sm="6"
                      className="form-group d-inline-block"
                    >
                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </Col>
                  </Form>
                </Col>
              </Row>
              {/* start info */}
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}
