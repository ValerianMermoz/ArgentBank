import React from "react";
import { ReactComponent as Circle } from "../assets/circle-user.svg";
import Form from "../components/form";

function Login() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <Circle />
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  );
}

export default Login;
