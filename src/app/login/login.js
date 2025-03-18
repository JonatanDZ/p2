/*import React from "react";
import "./login.css";
import { login_check } from "../actions";*/
import Link from "next/link";

const loginComponent = () => {
  return (
    <div className="container">
      <form /*action={login_check}*/>
        <h1 className="login-name">Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Brugernavn/E-mail"
            name="email"
            required
          ></input>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          ></input>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Husk mig
          </label>
          <a href="#">Glemt kodeord</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Ny bruger?
            <Link href="/">Registrer dig her</Link>
            
          </p>
        </div>
      </form>
    </div>
  );
};

export default loginComponent;
