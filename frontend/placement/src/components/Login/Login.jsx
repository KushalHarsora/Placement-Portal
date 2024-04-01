import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css';
import loginImage from '../../assets/login.png';
import Validation from '../../userCredentials';

const Login = () => {

    const [emailError, setEmailError] = useState("");

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        console.log(data);
    }, [data, emailError]);

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
        if(Validation(email) != "") {
            setEmailError(Validation(email));
            console.log("outside");
            console.log(emailError);
        } else if(Validation(email) == "") {
            setEmailError("");
            console.log("inside");
            console.log(emailError);
        }
        e.preventDefault();
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
                                <span className='inputSectionLabel'>
                                    Email
                                </span>
                                <input type="email" id='email' onChange={(e) => { setData({ email: e.target.value }); }} />
                                {emailError && <span className='error'>
                                    {emailError}
                                </span>}
                            </div>

                            <div className='inputSection'>
                                <div className='loginForgotMain'>
                                    <span className='inputSectionLabel'>
                                        Password
                                    </span>
                                    <span className='loginForgot'>
                                        <button>
                                            Forgot?
                                        </button>
                                    </span>
                                </div>
                                <input type="password" id='password' onChange={(e) => { setData({ password: e.target.value }); }} />
                                {emailError && <span className='error'>
                                    {emailError}
                                </span>}
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