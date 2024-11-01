import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookFlight } from '../api/api';
import Loading from '../components/Loading';

const Booking = () => {
    const { id } = useParams();
    const [passengerName, setPassengerName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleBooking = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await bookFlight(id, { passengerName });
        setLoading(false);
        if (result.success) {
            alert('Booking successful!');
            // Redirect to confirmation page
        } else {
            alert('Booking failed');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Book Flight</h1>
            <form onSubmit={handleBooking}>
                <input
                    type="text"
                    placeholder="Passenger Name"
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-600 text-white p-2 w-full">Book</button>
            </form>
            {loading && <Loading />}
        </div>
    );
};

export default Booking;
