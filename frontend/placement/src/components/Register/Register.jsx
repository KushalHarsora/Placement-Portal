import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Register.css';
import registerImage from '../../assets/register.png';

var cred = {
  email: "",
  password: ""
}

const Register = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    // Handle Alert
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Register Successful",
      showConfirmButton: false,
      timer: 1200
    });
    // Navigate to Login Page
    console.log(email);
    cred.email = email;
    console.log(password);
    cred.password = password;
    navigate('/login');
    e.preventDefault();
  }
  return (
    <>
      <div className='registerMain'>
        <img src={registerImage} alt="Login" />

        <form onSubmit={handleRegisterSubmit} className='registerForm'>
          <div className='registerComponentMain'>

            <div className='registerComponent'>

              <div className='registerNameMain'>
                Register
              </div>

              <div className='registerName'>
                Enter your Details below
              </div>

              <div className='inputSection'>
                <span className='inputSectionLabel'>
                  Name
                </span>
                <input type="text" required />
              </div>

              <div className='inputSection'>
                <span className='inputSectionLabel'>
                  Email
                </span>
                <input type="email" required onChange={e => setEmail(e.target.value)}/>
              </div>

              <div className='inputSection'>
                <span className='inputSectionLabel'>
                  Password
                </span>
                <input type="password" required onChange={e => setPassword(e.target.value)} />
              </div>

              <div className='registerButton'>
                <button type={'submit'} >
                  Register
                </button>
              </div>

              <div className='registerToRegister'>
                <span>
                  Already have an Account?
                </span>
                <button onClick={() => navigate('/login')}>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export {cred};

export default Register;