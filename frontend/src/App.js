import data from "./data";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="index.html">
                Joseph's Shopping mall
              </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="product/:id" element={<ProductScreen />} />
              <div className="row center">
                {data.products.map((product) => {
                  return <Product product={product} />;
                })}
              </div>
            </Routes>
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
