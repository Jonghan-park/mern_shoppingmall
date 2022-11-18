import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="App">
      <Router>
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
            </Routes>
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
