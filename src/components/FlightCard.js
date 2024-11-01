import React from 'react';
import { Link } from 'react-router-dom';

const FlightCard = ({ flight }) => {
    return (
        <div className="border rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold">{flight.name}</h2>
            <p>From: {flight.departure} To: {flight.arrival}</p>
            <p>Date: {flight.date}</p>
            <Link to={`/flights/${flight._id}`} className="text-blue-600">View Details</Link>
        </div>
    );
};

export default FlightCard;
