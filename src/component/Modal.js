import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
         
          const {modalClose,openmodal } = value;
          const { img, title, price } = value.modalProduct;
          if (!openmodal) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 p-5 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <img className="img-fluid" src={img} alt={title} />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price : ${price}</h5>
                      <Link to="/" onClick={() => modalClose()}>
                        <ButtonContainer>Continue</ButtonContainer>
                      </Link>
                      <Link to="/cart" onClick={() => modalClose()}>
                        <ButtonContainer cart>Go To Cart</ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  align-content: center;
  z-index:10;
  #modal {
    background-color: var(--mainWhite);
  }
`;
