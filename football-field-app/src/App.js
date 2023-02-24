import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Layout from './components/router/Layout';


import ProductFilter from './components/customer-pages/filter-pages/ProductFilter';
import ResponseAPI from './api/ResponseAPI';
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import About from "./components/customer-pages/About.js"
import Home from "./components/customer-pages/Home.js";
import ErrorPage from "./components/customer-pages/ErrorPage.js";
import Contact from "./components/customer-pages/Contact.js";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router> */}

      <Header />
      <Layout />
      <Footer fixed/>
    </>
  );
}

export default App;
