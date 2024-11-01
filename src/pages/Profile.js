import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import Loading from '../components/Loading'; 

const Profile = () => {
    const { user, loading } = useContext(AuthContext); 

    if (loading) return <Loading />;

    if (!user) {
        return <div>No user data available. Please log in.</div>; 
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;
