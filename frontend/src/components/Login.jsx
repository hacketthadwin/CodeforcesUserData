import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onEachChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/v1/login", {
      email: email,
      password: password,
    })
      .then(response => {
        console.log(response.data);

if (response.data.success) {
    localStorage.setItem("isLoggedIn", "true"); // <- ✅ Set the key here
    localStorage.setItem("role", response.data.role); // store user role
    localStorage.setItem("userToken", response.data.token); // (optional) store JWT token
  toast.success("Logged in successfully!");
  // setTimeout(() => navigate('/loggedIn'), 1500);
setTimeout(() => {
  navigate(response.data.role === "Doctor" ? "/doctor" : "/patient");
}, 1500); 
} else {
          toast.error(response.data.message || "Invalid credentials!");
        }
      })
      .catch(error => {
        console.error(error);
        toast.error(error.response?.data?.message || "Login failed!");
      });

    console.log("Form submitted:", { username, email, password });
  };

  return (
    <div className="bg-green-200 h-screen w-screen overflow-hidden">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col ml-[5rem] w-1/2 md:w-1/3 xl:w-1/4 border-3 border-black mt-[10rem] mb-5">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-14">LOGIN</h1>
          <input name='email' type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded-lg font-bold bg-gray-700 text-white" onChange={onEachChange} required />
          <input name='password' type="password" placeholder="Password" className="mb-2 p-2 border border-gray-300 rounded-lg font-bold bg-gray-700 text-white" onChange={onEachChange} required />
        </div>
        <button type="submit" className="bg-blue-500 ml-[5rem] text-white px-4 py-2 rounded font-bold">Login</button>
      </form>

      {/* Toast messages */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default Login;
