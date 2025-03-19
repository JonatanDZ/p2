import React from "react";
import styles from "../../styles/Login.module.css";
import { login_check } from "../actions";
import Link from "next/link";

const loginComponent = () => {
  return (
    <div className={styles.container}>
      <form action={login_check}>
        <h1 className={styles.loginname}>Login</h1>
        <div className={styles.inputBox}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            required
          ></input>
        </div>

        <div className={styles.inputBox}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          ></input>
        </div>

        <div className={styles.rememberForgot}>
          <label>
            <input type="checkbox" />
            Husk mig
          </label>
          <a href="#">Glemt kodeord</a>
        </div>

        <button type="submit" className={styles.button}>Login</button>

        <div className={styles.registerLink}>
          <p>
            Ny bruger? <Link href="/login/signup">Registrer dig her</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default loginComponent;
