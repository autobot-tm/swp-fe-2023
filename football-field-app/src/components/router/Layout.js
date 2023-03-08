import { Outlet, Link, Routes, Route, Router } from "react-router-dom";
import About from "../customer-pages/About";
import Home from "../customer-pages/Home";
import NoPage from "../customer-pages/ErrorPage";
import Contact from "../customer-pages/Contact";
import ProductFilter from "../customer-pages/filter-pages/ProductFilter";
import LoginForm from "../customer-pages/login-pages/LoginForm";
import ProductDetail from "../customer-pages/detail-pages/ProductDetail";
import FormRegister from "../customer-pages/login-pages/FormRegister";

const Layout = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/action" element={<ProductFilter />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      
      <Outlet />
    </>
  )
};

export default Layout;