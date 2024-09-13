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
        if(name === 'username'){
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

    const handleFocus =(e)=>{
        setLoginFormError((prev) => ({ ...prev, [e.target.name]: false }));
    }

    const inputForm = {
        width:"90%",
        height:"30px",
        padding:".6rem",
        margin:"0.5rem 0",
        border:"1px solid #444",
        backgroundColor:"rgba(0, 0, 0, 0.7)",
        fontSize:"16px",
        borderRadius:"4px",
        color:"#fff"
    }

    const button = {
        width:"100%",
        margin:"1rem 0",
        border:"none",
        borderRadius:"4px",
        backgroundColor:"#f40612",
        color:"#fff",
        fontSize:"18px",
    }

    const container = {
        backgroundColor:"rgba(0, 0, 0, 0.7)",
        borderRadius:"8px",
        padding:"2rem",
        width:"350px",
        boxShadow:"0 4px 8px rgba(0,0,0,0.3)"
        }

    return (
       
     
           
            <div style={container} className="form">
            <h1 style={{color:"#fff", textAlign:"left",fontSize:"24px", margin:"0 0.3rem 1.4rem"}}>Sign In</h1>
                <div className="username">
                    <input style={inputForm} name="username" type="text" value={loginForm.username} onFocus={handleFocus} onBlur={(e) => handleBlur(e)} onChange={onInputChange} placeholder="Email or mobile number" />
                    {loginFormError.username &&
                        <div style={{margin:"-20px 5px", display:"flex", alignItems:"center", padding:"10px", gap:"4px"}}><svg
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
                            <p style={{color:'red'}}><small>Please enter a valid email or phone number.</small></p></div>}
                </div>
                <div className="password">
                    <input style={inputForm} name="password" type="password" value={loginForm.password} onFocus={handleFocus} onBlur={(e) => handleBlur(e)} onChange={onInputChange} placeholder="Password" />
                    {loginFormError.password &&
                        <div style={{margin:"-20px 5px",display:"flex", alignItems:"center", padding:"10px", gap:"4px"}}><svg
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
                        </svg><p style={{color:'red'}}><small>Your must contain 4 and 60 characters.</small></p></div>}
                </div>

                <button style={button} onClick={onSubmit}>Sign In</button>

            </div>



    )
}

export default LoginForm;