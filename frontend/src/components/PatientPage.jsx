import React from 'react'
  // const handleLogout = () => {
  //   localStorage.removeItem("isLoggedIn"); // Remove the key
  //   localStorage.removeItem("userToken"); // (optional) remove JWT token
  //   window.location.href = "/login"; // Redirect to login page
  // }

  import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
const name= ()=> {
  const token = localStorage.getItem("userToken");
  if (token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.name || "User";
    } catch (err) {
      console.error("Invalid token:", err);
      return "User";
    }
  }
  return "User";
}
const PatientPage = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Welcome, {name()}!</h1>
      <p className="text-center mt-4">This is the Patient Page.</p>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userToken");
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default PatientPage