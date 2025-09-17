import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-6">Login</h2>
        <LoginForm />
        <p className="text-center mt-4 text-red-600 hover:underline cursor-pointer">
          Forgot Password?
        </p>

        <p className="text-center mt-4 text-red-600 hover:underline cursor-pointer">
          Don't have an account?
        </p>
      </div>
    </div>
  );
};

export default Login;
