import style from './register.module.scss';
import { useState } from 'react';
import logo from '../images/Optimum-Logo.png'
import { Link } from 'react-router-dom';


export const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [clickable, setClickable] = useState(true);


  const handleFullnameChange = (e) => {
    setFullName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  }

  const checkFullName = () => {
    const fullNameWithoutSpaces = fullName.split(" ");
    if (fullNameWithoutSpaces.length >= 2) {
      return true;
    }
    return false;
  }

  const checkPasswordLength = () => {
    if (password.length >= 8) {
      return true;
    }
    return false;
  }

  const checkEmailValidity = () => {
    const str = email.substring(email.length - 19, email.length);
    if (str === '@optimumpartners.co') {
      return true;
    }
    return false;
  }


  const checkClickable = () => {
    if (!!email && !!password && !!fullName && !!passwordConfirm && checkPasswordLength() && checkEmailValidity() && checkFullName()) {
      return false;
    }
    return true;
  }


  const printHello = () => {
    console.log({
      fullName,
      email,
      password,
      passwordConfirm,
      checkEmailValidity
    });
    if (password === passwordConfirm) {
      console.log(true);
      return;
    }
    console.log(false);
  }


  return (
    <div className={style.register}>
      <div className={style.container}>
        <div className={style.opLogo}>
          <img src={logo} />
        </div>
        <div className={style.registerInputs}>
          <div className={style.registerInputsHeading}>
            <span>Registration</span>
          </div>
          <div className={style.fullName}>
            <p>Full Name</p>
            <input type={'text'} value={fullName} onChange={(e) => handleFullnameChange(e)}></input>
          </div>
          <div className={style.email}>
            <p>Email</p>
            <div>
              <input type={'email'} value={email} onChange={(e) => handleEmailChange(e)} placeholder={'your-email@optimumpartners.co'} />
              <span className={style.errorMessege}>hidden error messege</span>
            </div>
          </div>
          <div className={style.password}>
            <p>Password</p>
            <input type={'password'} value={password} onChange={(e) => handlePasswordChange(e)} />
          </div>
          <div className={style.passwordConfirm}>
            <p>Confirm Password</p>
            <div>
              <input type={'password'} value={passwordConfirm} onChange={(e) => handlePasswordConfirmChange(e)} />
              <span className={style.errorMessege}>hidden error messege</span>
            </div>
          </div>
        </div>
        <div className={style.signIn}>
          <div className={style.registerButton}>
            <button disabled={checkClickable()} onClick={() => printHello()}>Sign Up</button>
            <span className={style.errorMessege}>hidden error messege</span>
          </div>
          <div className={style.redirectToSignIn}>
            <p>Already have an account?</p>
            <Link to={'/'}>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
