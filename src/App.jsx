import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Cart from "./views/Cart";
import MyOrders from "./views/My-orders";
import Privacy from "./views/Privacy";
import Contact from "./views/Contact";
import AboutUs from "./views/AboutUs";
import Product from "./views/Producto/product";
import Pago from "./views/FormadePago";
import Tarjetas from "./views/Tarjetas";
import { AuthContextProvider } from "./Contexts/AuthContext/AuthContext";
import RegistroLogin from "./views/RegistroLogin/RegistroLogin";

function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<RegistroLogin />} />
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
    </AuthContextProvider>

  );
}

export default App;
