import { useState } from "react";
// import {form} from "../assets/styles/form.css"

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });

    const [loginFormError, setLoginFormError] = useState({
        username: false,
        password: false
    });

    const [inputType, setInputType] = useState('');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    const isEmail = (value) => emailPattern.test(value);
    const isPhoneNumber = (value) => phonePattern.test(value);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({ ...prev, [name]: value }));

        if (isEmail(value)) {
            setInputType('email');
        }
        else if (isPhoneNumber(value)) {
            setInputType('phone');
        }
        else {
            setInputType('');
        }
    }

    const handleBlur = (e) => {
        if (e.target.name === 'username') {
            if (!loginForm.username || (loginForm.username && inputType === '')) {
                setLoginFormError((prev) => ({ ...prev, username: true }));
            }
            else {
                setLoginFormError((prev) => ({ ...prev, username: false }));
            }
        }

        if (e.target.name === 'password') {
            if (!loginForm.password || (loginForm.password && (loginForm.password.length < 4 || loginForm.password.length > 60))) {
                setLoginFormError((prev) => ({ ...prev, password: true }));
            }
            else {
                setLoginFormError((prev) => ({ ...prev, password: false }));
            }
        }

    }

    const onSubmit = () => {
        console.log("inputType", inputType)
        if ((inputType === '')) {
            setLoginFormError((prev) => ({ ...prev, username: true }));
        }

        if (loginForm.password.length < 4 || loginForm.password.length > 60) {
            setLoginFormError((prev) => ({ ...prev, password: true }));
        }
    }

    return (
        <div style={{
            backgroundColor:"black",
            height:"300px",
            width:"300px"
            }} className="container">
            <h2 style={{color:"#fff"}}>Sign In</h2>
            <div className="form">
                <div className="username">
                    <input name="username" type="text" value={loginForm.username} onBlur={(e) => handleBlur(e)} onChange={onInputChange} placeholder="Email or mobile number" />
                    {loginFormError.username &&
                        <><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            role="img"
                            viewBox="0 0 16 16"
                            width={16}
                            height={16}
                            data-icon="CircleXSmall"
                            aria-hidden="true"
                            className="default-ltr-cache-0 e1vkmu651"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                                fill="red" />
                        </svg>
                            <p style={{color:'red'}}>Please enter a valid email or phone number.</p></>}
                </div>
                <div className="password">
                    <input name="password" type="password" value={loginForm.password} onBlur={(e) => handleBlur(e)} onChange={onInputChange} placeholder="Password" />
                    {loginFormError.password &&
                        <><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            role="img"
                            viewBox="0 0 16 16"
                            width={16}
                            height={16}
                            data-icon="CircleXSmall"
                            aria-hidden="true"
                            className="default-ltr-cache-0 e1vkmu651"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                                fill="red" />
                        </svg><p style={{color:'red'}}>Your must contain 4 and 60 characters.</p></>}
                </div>

                <button onClick={onSubmit}>Sign In</button>

            </div>
        </div>


    )
}

export default LoginForm;