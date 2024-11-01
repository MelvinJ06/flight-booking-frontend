import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const searchFlights = async (params) => {
    try {
        const response = await axios.get(`${API_URL}/flights`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
        return [];
    }
};

export const getFlightDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/flights/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching flight details:', error);
        return null;
    }
};

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, data);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        return { success: false };
    }
};

export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, data);
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        return { success: false };
    }
};

export const bookFlight = async (id, data) => {
    try {
        const response = await axios.post(`${API_URL}/flights/${id}/book`, data);
        return response.data;
    } catch (error) {
        console.error('Error booking flight:', error);
        return { success: false };
    }
};

export const getUserProfile = async () => {
    try {
        const response = await axios.get(`${API_URL}/users/me`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
};
