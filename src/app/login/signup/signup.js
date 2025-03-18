import react from "react";
import styles from "../../../styles/Login.module.css";
import { save_user } from "../../actions";

const signupComponent = () => {
  return (
    <div className={styles.container}>
      <form onSubmit={save_user}>
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
          ></input>
        </div>

        <div className={styles.inputBox}>
          <input
            type="password"
            placeholder="Confirm Password"
            required
          ></input>
        </div>

        <button type="subimt" className={styles.button}>Signup</button>

        <div className={styles.registerLink}>
          <p>
            Allerede bruger? <a href="#">Login her</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default signupComponent;
