import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Signup(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Trying to sign up as ${email}`);
    }
    return (
        <>
        <h1>Signup</h1>
        <hr/>
        <form onSubmit={handleFormSubmit}>
            <label>
                Email: <input type='email' value={email} 
                onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password: <input type='password' value={password} 
                onChange={e => setPassword(e.target.value)} />
            </label>
            <br />
            <input type='submit' value='Sign Up' /> 
        </form>
        <p>Already a user? <Link to='/login'>Login </Link></p>
        </>
    )
}

export default Signup;