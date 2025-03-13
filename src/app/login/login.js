import React from "react";
import "../../styles/Login.module.css";
import { login_check } from "../actions";

const loginComponent = () => {
  return (
    <div className={style.container}>
      <form action={login_check}>
        <h1 className={style.loginname}>Login</h1>
        <div className={style.input-box}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            required
          ></input>
        </div>

        <div className={style.input-box}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          ></input>
        </div>

        <div className={style.remember-forgot}>
          <label>
            <input type="checkbox" />
            Husk mig
          </label>
          <a href="#">Glemt kodeord</a>
        </div>

        <button type="submit">Login</button>

        <div className={style.register-link}>
          <p>
            Ny bruger? <a href="#">Registrer dig her</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default loginComponent;
