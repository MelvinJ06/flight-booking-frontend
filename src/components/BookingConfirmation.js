// src/pages/BookingConfirmation.js
import React from 'react';
import PayPalButton from '../components/PayPalButton';

const BookingConfirmation = () => {
    const amountToPay = '10.00'; 
    return (
        <div>
            <h2>Booking Confirmation</h2>
            <p>Your total amount is: ${amountToPay}</p>
            <PayPalButton amount={amountToPay} />
        </div>
    );
};

export default BookingConfirmation;
