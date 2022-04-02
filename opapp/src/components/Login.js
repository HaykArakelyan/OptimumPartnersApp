import style from './login.module.scss';
import logo from '../images/Optimum-Logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const checkClickable = () => {
    if (!!email && !!password) {
      return false;
    }
    return true;
  }


  const printHello = () => {
    console.log({
      email,
      password
    });
  }

  return (
    <>
      <div className={style.login}>
        <div className={style.logo}>
          <img
            className={style.logoImg}
            src={logo}
          />
        </div>
        <div
          className={style.inputs}
        >
          <div className={style.inputsHeading}>
            <p>Log In</p>
          </div>
          <div className={style.inputsEmail}>
            <p>Email</p>
            <input
              type={'email'}
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
          </div>
          <div className={style.inputsPassword}>
            <p>Password</p>
            <input
              type={'password'}
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
          </div>
        </div>
        <div className={style.newAcc}>
          <div className={style.submitSec}>
            <button
              className={style.loginButton}
              disabled={checkClickable()}
              onClick={() => printHello()}
            >
              Log In
            </button>
            <span className={style.errorMessege}>hidden error messege</span>
          </div>
          <div className={style.reg}>
            <p>Don't have an account?</p>
            <Link to='/register'>Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}
