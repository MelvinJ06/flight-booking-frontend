import React, { useState, useEffect } from 'react';
import FlightCard from '../components/FlightCard';
import { searchFlights } from '../api/api';
import Loading from '../components/Loading';
import planeImage from "../assets/plane.jpg"

const Home = () => {
    const [flights, setFlights] = useState([]);
    const [searchParams, setSearchParams] = useState({ departure: '', arrival: '', date: '' });
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        const results = await searchFlights(searchParams);
        setFlights(results);
        setLoading(false);
    };

    return (
        
        <div className="p-4">
            <img src={planeImage} alt="Plane" className=" mx-auto" />
            <h1 className="text-3xl font-bold text-center">Flight Search</h1>
            <form onSubmit={handleSearch} className="my-4">
                <input
                    type="text"
                    placeholder="From"
                    onChange={(e) => setSearchParams({ ...searchParams, departure: e.target.value })}
                    className="border p-2 mr-2 "
                />
                <input
                    type="text"
                    placeholder="To"
                    onChange={(e) => setSearchParams({ ...searchParams, arrival: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="date"
                    onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button type="submit" className="bg-blue-600 text-white p-2">Search</button>
            </form>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    {flights.map((flight) => (
                        <FlightCard key={flight._id} flight={flight} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
