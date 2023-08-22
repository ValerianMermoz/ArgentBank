import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login"
import { Provider } from "react-redux";
import './sass/main.scss'
import Header from './components/header';
import Footer from './components/footer';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>

);
