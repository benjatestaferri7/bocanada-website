import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import { productData, productDataTwo } from "./Components/Products/data";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Nuestra Especialidad" data={productData} />
      <Feature />
      <Products heading="Menú" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
