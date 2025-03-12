import react from 'react';
import '../login.css';

const signupComponent = () => {
    return (
<div className='container'>
        <form action="">
            <h1 className='login-name'>Registrer dig</h1>
            <div className="input-box">
              <input type="email" placeholder='E-mail' required></input>
            </div>

            <div className="input-box">
              <input type="password" placeholder='Password' required></input>
            </div>

            <div className="input-box">
              <input type="password" placeholder='Confirm Password' required></input>
            </div>

            <button type="submit">Signup</button>

            <div className="register-link">
              <p>Allerede bruger? <a href="#">Login her</a></p>
            </div>
        </form>
      </div>
    );
}

export default signupComponent;