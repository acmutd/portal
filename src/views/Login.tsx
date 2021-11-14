import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="flex flex-col justify-center align-middle h-screen w-screen">
      <div className="bg-gray-800 dark:bg-gray-200 rounded-3xl p-6 max-w-sm mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
