import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import Axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    loading: true,
    data:storeProducts,
    products: [],
    detailproduct: detailProduct,
    cart: [],
    openmodal: false,
    openLogin:false,
    modalProduct: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    query: "",
    filteredData: [],
    openSearch: false,
    dataFilter: [],
    tempBrand: "sumsung",
    tempPrice: "9999999",
  };

  componentDidMount() {
    // Axios.get("http://localhost:8000/api/products")
    //   .then((res) => {
    //     this.setState({
    //       data: res.data,
    //     });
    //   })
    //   .then(() => {
        this.setProducts();
    //   });
  }

  // Put data product in state
  setProducts = () => {
    let tempProducts = [];
    const data = this.state.data;
    data.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {
        products: tempProducts,
        dataFilter: tempProducts,
        loading: false,
      };
    });
  };

  // Get product with id
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  // Handel Details of products
  handelDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailproduct: product };
    });
  };

  // Add product to cart
  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];

    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  // Open Modal in List Of Products
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, openmodal: true };
    });
  };
  openlogin = () => {
    this.setState(() => {
      return { openLogin: true };
    });
  };

  // Close Modal in List Of Products
  closeModal = () => {
    this.setState({ openmodal: false });
  };
  closeLogin = () => {
    this.setState({ openLogin: false });
  };

  // Increment number of Product in cart
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectItem);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  // Decrement number of Product in cart
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];
    if (product.count > 1) {
      product.count = product.count - 1;
      product.total = product.count * product.price;
    } else {
      window.alert(" For delete Item Click On Trash");
    }
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  // Remove item in Cart
  removeItem = (id) => {
    // const url = `http://localhost:8000/api/mobile/`
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts],
      };
    }, this.addTotal());
  };

  // Clear All item in cart
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  // Calculate total price in cart
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  // Handel Click outsid Search component
  handleClickOutside = (event) => {
    this.setState({
      openSearch: false,
      query: "",
    });
  };

  //Handel search input
  searchInput = (e) => {
    const query = e.target.value;
    if (!query || query.length < 2) {
      this.setState({
        filteredData: null,
        query: query,
        openSearch: false,
      });
    } else {
      this.setState((prevState) => {
        const openSearch = (prevState.openSearch = true);
        const filteredData = prevState.products.filter((element) => {
          return element.title.toLowerCase().includes(query.toLowerCase());
        });
        return {
          query,
          filteredData,
          openSearch,
        };
      });
    }
  };

  handelPriceFilter = (e) => {
    const tempPrice = e.target.value;
    console.log(tempPrice);
    let tempBrand = this.state.tempBrand.toUpperCase();
    const products = this.state.products;
    let result = [];
    let filters = products.filter(
      (item) => item.price <= tempPrice && item.company === tempBrand
    );
    filters.forEach((item) => {
      result = [...result, item];
    });

    this.setState({
      dataFilter: result,
      tempPrice: e.target.value,
    });
  };
  handelBrandFilter = (e) => {
    let tempBrand = e.target.value.toUpperCase();

    const products = this.state.products;
    let tempPrice = this.state.tempPrice;
    let result = [];

    let filters = products.filter(
      (item) => item.company === tempBrand && item.price <= tempPrice
    );
    filters.forEach((item) => {
      result = [...result, item];
    });

    this.setState({
      dataFilter: result,
      tempBrand: e.target.value,
    });
  };
  commentSubmit = (e) => {
    console.log("its work");
    e.preventDefault();
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetails: this.handelDetails,
          addToCart: this.addToCart,
          modalOpen: this.openModal,
          modalClose: this.closeModal,
          closeLogin:this.closeLogin,
          openlogin:this.openlogin,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          searchInput: this.searchInput,
          handleClickOutside: this.handleClickOutside,
          handelPriceFilter: this.handelPriceFilter,
          handelBrandFilter: this.handelBrandFilter,
          commentSubmit: this.commentSubmit,
        }}
      >
        {" "}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
