import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import MyBasket from './Pages/MyBasket';
import NavBar from './Components/NavBar';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myBasket" element={<MyBasket />} />
      </Routes>
    </div>
  );
}