import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import "./sass/main.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import User from "./pages/user";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>
);
