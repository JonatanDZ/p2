"use client"

import { useState } from "react";
import styles from "../../../styles/Login.module.css";
import Link from "next/link";

const SignupComponent = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (e) => {
    if(e.target.value !== confirmPassword) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (password !== e.target.value) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword){
      setIsPasswordValid(false);
      console.log("passwords do not match");
      return;
    }
    console.log("success");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.loginname}>Registrer dig</h1>
        
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
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          ></input>
        </div>

        <button type="subimt" className={styles.button}>Signup</button>

        <div className={styles.registerLink} disabled={password != confirmPassword}>
          <p>
            Allerede bruger? <Link href="/login">Login her</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupComponent;
