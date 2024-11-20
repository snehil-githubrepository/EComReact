import React, { useState } from "react";
import Button from "./Button";

interface CardProps {
  mode: "Log In" | "Sign Up";
}

const Card: React.FC<CardProps> = ({ mode }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const isSignup = mode === "Sign Up";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (isSignup && !confirmPassword)) {
      alert("Please fill all fields");
      return;
    }
    if (isSignup && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(`${mode} successful`, { email, password });
  };

  return (
    <div className="">
      {/* Outer Card Container */}
      <div className="relative w-full max-w-md bg-white px-10 py-3 rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative Overlay */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-sky-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-indigo-300 to-sky-300 rounded-full opacity-20 blur-2xl"></div>

        {/* Content */}
        <div className="relative w-full p-8">
          {/* Header */}
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
            {isSignup ? "Create an Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            {isSignup
              ? "Join the platform today!"
              : "Login to continue your journey."}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
              />
            </div>

            {/* Confirm Password for Signup */}
            {isSignup && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
                />
              </div>
            )}

            {/* Button */}
            <Button
              onClick={handleSubmit}
              label={mode}
              className="bg-gradient-to-t font-bold from-sky-700 to-emerald-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
