import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Login from "./views/Login";
import Cart from "./views/Cart";
import MyOrders from "./views/My-orders";
import Privacy from "./views/Privacy";
import Contact from "./views/Contact";
import AboutUs from "./views/AboutUs";
import Product from "./views/Producto/product";
import Pago from "./views/FormadePago";
import Tarjetas from "./views/Tarjetas";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="carrito" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sobre-nosotros" element={<AboutUs />} />
          <Route path="product" element={<Product />} />
          <Route path="FormasDePago" element={<Pago />} />
          <Route path="Tarjets" element={<Tarjetas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
