import React from "react";
import "./App.css";
import Product from "./components/Product/Product";

class App extends React.Component {
  state = {
    products: [
      { id: 1, title: "book state 1 ", price: 25 },
      { id: 2, title: "book state 2", price: 55 },
    ],
    showProducts: false,
  };

  changePriceHandler = () => {
    this.setState({
      products: [
        { title: "book new", price: 50 },
        { title: "book  2", price: 60 },
      ],
    });
  };

  chageTitleHandler = (event, id) => {
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id;
    });
    const product = { ...this.state.products[productIndex] };
    product.title = event.target.value;
    const products = [...this.state.products];
    products[productIndex] = product;
    this.setState({ products: products });
  };
  toggleProductHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
  };

  deleteProductHandler(index) {
    const products = [...this.state.products];
    products.splice(index, 1);
    this.setState({ products: products });
  }
  render() {
    const btn = {
      backgroundColor: "#7b1fa2",
      color: "#fff",
      font: "inherit",
      border: "none",
      outline: "none",
      borderRadius: "3px",
      padding: ".6rem",
      margin: ".6rem auto",
    };
    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          {this.state.products.map((item, index) => {
            return (
              <Product
                title={item.title}
                price={item.price}
                click={() => this.deleteProductHandler(index)}
                key={item.id}
                change={(event) => this.chageTitleHandler(event, item.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="center">
        <h1>Book store</h1>
        <button style={btn} onClick={this.toggleProductHandler}>
          show/hide products
        </button>
        {products}
      </div>
    );
  }
}

// const App = () => {
//   const [productState, setProductState] = useState({
//     product: [
//       { title: "book state 1 ", price: 25 },
//       { title: "book state 2", price: 55 },
//     ],
//   });

//   function changePriceHandler() {
//     setProductState({
//       product: [
//         { title: "book  1 seted ", price: 50000 },
//         { title: "book  2 seted", price: 60000 },
//       ],
//     });
//   }

//   return (
//     <div id="main" className="container">
//       <h2>React App</h2>
//       <p>hello ali</p>
//       <Product
//         title={productState.product[0].title}
//         price={productState.product[0].price}
//       />
//       <Product
//         title={productState.product[1].title}
//         price={productState.product[1].price}
//       />
//       <button onClick={changePriceHandler}>change price</button>
//     </div>
//   );
// };
export default App;
