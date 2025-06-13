import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

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
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    axios.post("http://localhost:5000/api/v1/signup", {
      email,
      password,
      name: username,
      role
    })
      .then(response => {
        if (response.data.success) {
          toast.success("Signup successful!");
          setTimeout(() => navigate('/homePage'), 1500); // Delay so toast is visible
        } else {
          toast.error(response.data.message || "Signup failed!");
        }
      })
      .catch(error => {
        console.error(error);
        toast.error(error.response?.data?.message || "Signup failed!");
      });

    console.log("Form submitted:", { username, email, password, role });
  };

  return (
    <div className="bg-green-200 h-screen w-screen overflow-hidden">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col ml-[5rem] w-1/2 md:w-1/3 xl:w-1/4 border-3 border-black mt-[10rem] mb-5">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-14">SIGNUP</h1>
          <input name='username' type="text" placeholder="Your Name" className="mb-2 p-2 border border-gray-300 rounded-lg font-bold bg-gray-700 text-white" onChange={onEachChange} />
          <input name='email' type="email" placeholder="Email" className="mb-2 p-2 border border-gray-300 rounded-lg font-bold bg-gray-700 text-white" onChange={onEachChange} />
          <input name='password' type="password" placeholder="Password" className="mb-2 p-2 border border-gray-300 rounded-lg font-bold bg-gray-700 text-white" onChange={onEachChange} />
          <input name='confirmPassword' type="password" placeholder="Confirm Password" className="mb-8 p-2 border border-gray-300 rounded-lg font-bold bg-gray-700 text-white" onChange={onEachChange} />
          
          <label className='text-black font-bold text-lg md:text-2xl mb-5'>
            <input type="radio" name="role" value="Doctor" className='mr-5 accent-black scale-125 md:scale-150' onChange={onEachChange} />
            I am a Doctor
          </label>
          <label className='text-black font-bold text-lg md:text-2xl mb-5'>
            <input type="radio" name="role" value="Patient" className='mr-5 accent-black scale-125 md:scale-150' onChange={onEachChange} />
            I am a Patient
          </label>
        </div>
        <button type="submit" className="bg-blue-500 ml-[5rem] text-white px-4 py-2 rounded font-bold">Sign Up</button>
      </form>

      {/* Toast container for feedback messages */}
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default Signup;
