import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Register.css';
import registerImage from '../../assets/register.png';

const Register = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle Alert
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Register Successful",
      showConfirmButton: false,
      timer: 1200
    });
    // Navigate to Login Page
    navigate('/login'); 
  }
  return (
    <>
      <div className='registerMain'>
        <img src={registerImage} alt="Login" />

        <div className='registerComponentMain'>

          <div className='registerComponent'>

            <div className='registerNameMain'>
              Register
            </div>

            <div className='registerName'>
              Enter your Details below
            </div>

            <div className='inputSection'>
              <span>
                Name
              </span>
              <input type="text" required/>
            </div>

            <div className='inputSection'>
              <span>
                Email
              </span>
              <input type="email" required/>
            </div>

            <div className='inputSection'>
              <span>
                Password
              </span>
              <input type="password" required/>
            </div>

            <div className='registerButton'>
              <button onClick={handleSubmit}>
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
      </div>
    </>
  )
}

export default Register;