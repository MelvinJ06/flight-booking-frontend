// src/components/PayPalButton.js
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount }) => {
    return (
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount, 
                            },
                        }],
                    });
                }}
                onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    alert(`Transaction completed by ${details.payer.name.given_name}`);
                }}
                onError={(err) => {
                    console.error(err);
                    alert('An error occurred with the payment.');
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
