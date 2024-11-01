import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the path based on your project structure
import Loading from '../components/Loading'; // Ensure you have a Loading component to show while fetching data

const Profile = () => {
    const { user, loading } = useContext(AuthContext); // Get user data and loading state from context

    // Check if data is still loading
    if (loading) return <Loading />;

    // Check if user data is null or undefined
    if (!user) {
        return <div>No user data available. Please log in.</div>; // Provide a message for missing user data
    }

    // Safe to access user properties
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more user info as needed */}
        </div>
    );
};

export default Profile;
