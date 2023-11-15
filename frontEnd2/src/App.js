import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import MyBasket from './Pages/MyBasket';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/styles/index.css";


export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myBasket" element={<MyBasket />} />
      </Routes>
      <Footer />
    </div>
  );
}