import { Route, Routes } from "react-router-dom"
import Landing from "./views/Landing"
import Products from "./views/Products"
import Navbar from "./components/NavBar"
import ProductDetail from "./views/ProductDetail"
import Cart from "./views/Cart"
import { CartProvider } from "./context/cartContext"

function App() {


  return (
    <CartProvider>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Landing/>} />
          <Route path={"/products"} element={<Products/>} />
          <Route path={"/pizza/:id"} element={<ProductDetail/>} />
          <Route path={"/cart"} element={<Cart/>} />

        </Routes>
      </CartProvider>
  )
}

export default App
