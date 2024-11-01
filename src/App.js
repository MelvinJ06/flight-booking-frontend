import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FlightDetails from './pages/FlightDetails';
import Booking from './pages/Booking';
import Profile from './pages/Profile';


const App = () => {
    return (
        <Router>
            <Header />
            <main className="container mx-auto my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/flights/:id" element={<FlightDetails />} />
                    <Route path="/flights/:id/book" element={<Booking />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
