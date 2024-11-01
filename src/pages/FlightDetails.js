import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFlightDetails } from '../api/api';
import Loading from '../components/Loading';

const FlightDetails = () => {
    const { id } = useParams();
    const [flight, setFlight] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlightDetails = async () => {
            const result = await getFlightDetails(id);
            setFlight(result);
            setLoading(false);
        };
        fetchFlightDetails();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">{flight.name}</h1>
            <p>From: {flight.departure}</p>
            <p>To: {flight.arrival}</p>
            <p>Date: {flight.date}</p>
            <p>Price: ${flight.price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default FlightDetails;
