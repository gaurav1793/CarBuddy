import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userdatacontext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const navigate = useNavigate();
  const { setuser } = useContext(userdatacontext);

  const submithandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setuser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #f0f0f0, #e6e6e6)", // Subtle light gradient
      }}
    >

      {/* Signup Form Card */}
      <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 max-w-lg w-full space-y-6">
        <h2 className="text-2xl font-semibold text-green-600 text-center">
          Create Your Account
        </h2>
        <p className="text-sm text-gray-600 text-center">
          Sign up to join CarBuddy and start your journey with us.
        </p>

        <form onSubmit={submithandler} className="space-y-6">
          {/* Name Inputs */}
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="Enter your first name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              placeholder="Enter your last name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-600 text-white font-medium shadow-md hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/user-login" className="text-green-600 font-medium">
            Log in here
          </Link>
        </p>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center">
          By proceeding, you consent to receiving calls, WhatsApp, or SMS
          messages from CarBuddy, including automated means, at the provided
          number.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
