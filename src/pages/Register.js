import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const result = await registerUser({ name, email, password });
        if (result.success) {
            navigate('/login');
        } else {
            alert('Registration failed');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-600 text-white p-2 w-full">Register</button>
            </form>
        </div>
    );
};

export default Register;
