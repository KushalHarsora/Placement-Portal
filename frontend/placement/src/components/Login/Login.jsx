import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css';
import loginImage from '../../assets/login.png';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        // Handle Alert
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1200
        });

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        console.log(email.value);
        console.log(password.value);
        email.value = '';
        password.value = '';
        
        console.log(data);
        e.preventDefault();
        // console.log(data);
    }

    return (
        <>
            <div className='loginMain'>
                <img src={loginImage} alt="Login" />
                <form className='loginForm'>

                    <div className='loginComponentMain'>

                        <div className='loginComponent'>

                            <div className='loginName'>
                                Login
                            </div>

                            <div className='inputSection'>
                                <span>
                                    Email
                                </span>
                                <input type="email" id='email' onChange={(e) => {setData({email: e.target.value});}}/>
                            </div>

                            <div className='inputSection'>
                                <div className='loginForgotMain'>
                                    <span>
                                        Password
                                    </span>
                                    <span className='loginForgot'>
                                        <button>
                                            Forgot?
                                        </button>
                                    </span>
                                </div>
                                <input type="password" id='password' onChange={(e) => {setData({password: e.target.value});}} />
                            </div>

                            <div className='loginButton'>
                                <button onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>

                            <div className='loginToRegister'>
                                <span>
                                    Don't have an Account?
                                </span>
                                <button onClick={() => navigate('/register')}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;