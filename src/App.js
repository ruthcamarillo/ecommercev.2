
import './App.css';
// import Nav from './components/Navbar';
// import Footer from './components/Footer';
// import SlideShow from './components/SlideShow';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';
export const AppContext = React.createContext();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
