import './App.css';
import { HashRouter as Router } from "react-router-dom"
import Header from './components/Header';
import Content from "./components/Content"
import Home from './pages/Home';
import Guitars from "./pages/Guitars"
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { CartContext, CartContextDefaults } from "./contexts/CartContext"
import { useEffect, useState } from 'react';
import Contact from './pages/Contact';
import { SymbolContext, SymbolContextDefaults } from './contexts/SymbolContext';
import PageNotFound from './pages/PageNotFound';


const config = require("../package.json")


function App() {



  const [cart, setCart] = useState(CartContextDefaults.value)
  const [symbol, setSymbol] = useState(SymbolContextDefaults.value)

  console.log(cart)

  const pages = [
    { id: 1, name: "Kezdőlap", path: "/", element: <Home />, menubar: true },
    { id: 2, name: "Gitárok", path: "/guitars", element: <Guitars />, menubar: true },
    { id: 3, name: "Kosár", path: "/cart", element: <Cart />, menubar: true },
    { id: 4, name: "Kapcsolat", path: "/contact", element: <Contact />, menubar: true },
    { id: 5, name: "PageNotFound", path: "/*", element: <PageNotFound />, menubar: false }

  ]

  const [initialized, setInitialized] = useState(false);


  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("cart")))
    }



    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }

  })


  useEffect(() => {
    document.title = config.name
  })


  return (
    <CartContext.Provider value={{ cart, setCart }} >
      <SymbolContext.Provider value={{ symbol, setSymbol }} >
        <div className="App">
          <Router>

            <Header menu={pages} />
            <Content routes={pages} />
            <Footer />

          </Router>
        </div>
      </SymbolContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
