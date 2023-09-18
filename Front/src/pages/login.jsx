import React from "react";
import Circleuser from "../assets/Circleuser.png";
import Form from "../components/form";

function Login() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <img src={Circleuser} className="circleuser2" alt="circleuser" />
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  );
}

export default Login;
