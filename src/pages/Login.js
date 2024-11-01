import React, { useState } from 'react';
import { loginUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await loginUser({ email, password });
        if (result.success) {
            navigate('/profile');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Login</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit" className="bg-blue-600 text-white p-2 w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;
