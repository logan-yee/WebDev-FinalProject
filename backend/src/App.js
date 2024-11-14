import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;


