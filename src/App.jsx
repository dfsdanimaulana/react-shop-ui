import { BrowserRouter , Routes, Route } from 'react-router-dom'


// pages
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import Success from "./pages/Success"
import Pay from "./pages/Pay"


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
        <Route path="/success" element={<Success />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </BrowserRouter>
  )
}

