import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userdatacontext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = useContext(userdatacontext);
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();

    const userdata = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userdata
      );

      if (response.status === 200) {
        const data = response.data;
        setuser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (err) {
      console.error("Login failed:", err.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: "linear-gradient(to bottom, #f9f9f9, #ececec)",
      }}
    >
      {/* Background Design */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,abstract')`, // Abstract background
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
          opacity: 0.9,
        }}
      ></div>

      {/* Login Card */}
      <div className="bg-white shadow-xl rounded-2xl px-8 py-10 max-w-md w-full z-10">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Sign in to continue your journey with CarBuddy.
        </p>

        <form onSubmit={submithandler} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition-all"
          >
            Log In
          </button>
        </form>

        {/* Links Section */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-gray-500">
            New here?{" "}
            <Link to="/user-signup" className="text-green-500 font-medium">
              Create an account
            </Link>
          </p>
          <p className="text-sm text-gray-500">
            Want to drive?{" "}
            <Link to="/captain-login" className="text-green-500 font-medium">
              Sign in as Captain
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
