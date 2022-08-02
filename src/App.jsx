import { BrowserRouter , Routes, Route } from 'react-router-dom'


// pages
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"


// create router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

