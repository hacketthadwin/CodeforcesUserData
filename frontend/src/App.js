import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

import PrivateRoute from './components/PrivateRoute';
import DoctorPage from './components/DoctorPage';
import PatientPage from './components/PatientPage';
import PublicRoute from './components/PublicRoute';
function App() {
  return (
    <div className="bg-green-200 h-screen w-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route path="/patient" element={
          <PrivateRoute>
            <PatientPage />
          </PrivateRoute>
        } />
        <Route path="/doctor" element={
          <PrivateRoute>
            <DoctorPage />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
