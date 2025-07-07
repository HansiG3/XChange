import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar.jsx"; 
import HomePage from "../src/HomePage.jsx";
import './index.css';
function App(){
    return(
        <Router>
            <Navbar></Navbar>
            <Routes>
            <Route path="/" element={<HomePage />} /> 
            </Routes>
        </Router>
    )
}
export default App