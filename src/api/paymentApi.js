import axios from 'axios';

const PAYMENT_API_URL = 'http://localhost:3000/api/payments'; 
export const createPaymentIntent = async (amount, currency) => {
    try {
        const response = await axios.post(`${PAYMENT_API_URL}/create-payment-intent`, {
            amount,
            currency,
        });
        return response.data;
    } catch (error) {
        console.error('Error creating payment intent:', error);
        return { success: false };
    }
};

export const confirmPayment = async (paymentIntentId) => {
    try {
        const response = await axios.post(`${PAYMENT_API_URL}/confirm-payment`, {
            paymentIntentId,
        });
        return response.data;
    } catch (error) {
        console.error('Error confirming payment:', error);
        return { success: false };
    }
};

