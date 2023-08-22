import React from "react";
import { ReactComponent as Circle } from "../assets/circle-user.svg";

function Login() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <Circle />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                        >Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default Login;