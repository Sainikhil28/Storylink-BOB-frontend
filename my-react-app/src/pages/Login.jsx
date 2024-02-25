import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8800/api-backend/auth/login', inputs);
            console.log(res.data); // Check response data
            setError(null); // Clear any previous error
            setLoggedIn(true); // Update login status
            setTimeout(() => {
                setLoggedIn(false); // Clear login status after 3 seconds
                navigate('/'); // Redirect to home page after successful login
            }, 3000);
        } catch (error) {
            setError('Invalid username or password.'); // Error handling
            console.error(error); // Console logging
        }
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="Username" name="username" onChange={handleChange} />
                <input required type="password" placeholder="Password" name="password" onChange={handleChange} />
                <button onClick={handleSubmit}>Login</button>
                {error && <p>{error}</p>} {/* Error messages */}
                {loggedIn && <p>Successfully logged in</p>} {/* Success message */}
                <span>
                    Don't you have an account ? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
