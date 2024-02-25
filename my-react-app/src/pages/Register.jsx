// Register.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8800/api-backend/auth/register', inputs);
            console.log(res.data);
        } catch (err) {
            setError('User already exists. Please login');
            console.error(err.response.data);
        }
    };

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type='text' placeholder='Username' name='username' onChange={handleChange} />
                <input required type='email' placeholder='Email' name='email' onChange={handleChange} />
                <input required type='password' placeholder='Password' name='password' onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
                {error && <p>{error}</p>}
                <span>
                    Do you have an account? <Link to='/login'>Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
