import react from "react";
import "../login.css";
import { save_user } from "../../actions";

const signupComponent = () => {
  return (
    <div className="container">
      <form action={save_user}>
        <h1 className={style.loginname}>Registrer dig</h1>
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

        <div className={style.input-box}>
          <input
            type="password"
            placeholder="Confirm Password"
            required
          ></input>
        </div>

        <button type={style.submit}>Signup</button>

        <div className={style.register-link}>
          <p>
            Allerede bruger? <a href="#">Login her</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default signupComponent;
