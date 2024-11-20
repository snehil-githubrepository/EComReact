import React from "react";
import Card from "../Components/Common/Card";

function Login() {
  return (
    <div className="flex flex-col bg-gray-100 justify-center space-y-3 items-center h-screen">
      <Card mode="Log In" />
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          <>
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-500 hover:text-indigo-700 font-medium transition-all"
            >
              Sign Up
            </a>
          </>
        </p>
      </div>
    </div>
  );
}

export default Login;
