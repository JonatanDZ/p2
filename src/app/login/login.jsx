import React from 'react';
import './login.css';

const loginComponent = () => {
    return (
      <div className='container'>
        <form action="">
            <h1 className='login-name'>Login</h1>
            <div className="input-box">
              <input type="email" placeholder='Brugernavn/E-mail' required></input>
            </div>

            <div className="input-box">
              <input type="password" placeholder='Password' required></input>
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" />Husk mig</label>
              <a href='#'>Glemt kodeord</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>Ny bruger? <a href="#">Registrer dig her</a></p>
            </div>
        </form>
      </div>
    );
  }

export default loginComponent;
