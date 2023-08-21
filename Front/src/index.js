import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/*" element={<Connexion />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
