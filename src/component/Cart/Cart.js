import React, { Component } from "react";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  render() {
    return (
      <section className="py-5">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            }
            else{
              return <div style={{marginTop:"8rem",paddingBottom:"10rem"}} >
                <EmptyCart />
              </div>
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
