import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate}  from 'react-router-dom'
import LoginPage from './LoginPage'
import SecondPage from './SecondPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login/step-1" />} />
                <Route  path="/login/step-1" element={<LoginPage />} />
                <Route path="/login/step-2" element={<SecondPage />}/>
            </Routes>
        </Router>
    )
}

