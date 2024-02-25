// Userlist.jsx (Frontend)
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Userlist = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8800/api-backend/users', formData); // Updated endpoint
            alert('User created successfully');
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Error creating user');
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Userlist;
