import data from "./data";
import Product from "./components/Product";

function App() {
  return (
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
          <div className="row center">
            {data.products.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </div>
  );
}

export default App;
