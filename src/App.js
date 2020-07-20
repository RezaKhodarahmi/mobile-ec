import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Details from "./component/Details";
import ProductList from "./component/ProductList";
import Default from "./component/Default";
import Cart from "./component/Cart/Cart";
import Footer from "./component/Footer";
import Login from "./component/login/login";
import Modal from "./component/Modal";

import { ProductConsumer } from "./context";



class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <React.Fragment>
              <Navbar value={value} />
  
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                
                <Route component={Default} />
              </Switch>
             
              <Modal />
              <Login />
              <Footer />
            </React.Fragment>
            
          );
        }}
      </ProductConsumer>
    );
  }
}

export default App;
