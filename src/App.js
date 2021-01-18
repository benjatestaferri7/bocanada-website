import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Feature from './Components/Feature';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData } from './Components/Products/data';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Nuestra Especialidad' data={productData}/>
      <Feature />
    </Router>
  );
};

export default App;
