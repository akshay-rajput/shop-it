import React, { useState, useEffect } from "react";
import products from './products.json';
import { useSelector, useDispatch } from 'react-redux';
import { addProducts } from "./features/products/productsSlice";
import "./App.css";

import Navbar from "./features/shared/Navbar";
// render routes
// import ROUTES, {RenderRoutes} from './routes';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Cart from "./screens/Cart.jsx";


function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		// get products
		// console.log({products});
		dispatch(addProducts(products));
	}, [])

	return <div className="App">
		<Navbar />
    <main className="containerMid">	
      {/* <RenderRoutes />	 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart/" element={<Cart />} />
      </Routes>
    </main>
	</div>;
}

export default App;