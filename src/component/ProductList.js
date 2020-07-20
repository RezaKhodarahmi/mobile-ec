import React, { Component } from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../context";

// import Pagination from "react-js-pagination";
import { Container, Row, Col } from "react-bootstrap";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="row">
            <Col md="12" lg="12" sm="12" className="pt-5 ">
              <Title name="our" title="products" />
              <Row>
                <ProductConsumer>
                  {(value) => {
                    const { dataFilter } = value;
                    if (!value.loading && dataFilter.length < 1) {
                      return (
                        <Container>
                          <Row>
                            <Col className="col-12 py-5 my-5 text-center text-primary">
                              <h3>Nothing Found</h3>
                            </Col>
                          </Row>
                        </Container>
                      );
                    }
                    if (value.loading) {
                      return (
                        <Container>
                          <Row>
                            <Col className="col-12 py-5 my-5 text-center text-primary">
                              <div
                                className="spinner-border mb-5"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      );
                    }

                    return value.dataFilter.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </Row>
            </Col>
           
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
const StyleSlider = {
  background: "#f3f3f3",
  border: " 0.02rem solid lightgray",
};
