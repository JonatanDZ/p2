import React from 'react';
import LoginComponent from './login';
import './page.css';
import Users from '../../components/Users';

export default function Login() {
  return (
    <div className="main-container">
       <LoginComponent />
    </div>
  );
}