/*import react from "react";
import "../login.css";
import { save_user } from "../../actions";*/
import Link from "next/link";

const signupComponent = () => {
  return (
    <div className="container">
      <form /*action={save_user}*/>
        <h1 className="login-name">Registrer dig</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="E-mail"
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

        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm Password"
            required
          ></input>
        </div>

        <button type="submit">Signup</button>

        <div className="register-link">
          <p>
            Allerede bruger?
            <Link href="/">Login her</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default signupComponent;
