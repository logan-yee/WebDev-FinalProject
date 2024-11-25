import React from "react";
import { AuthSignup } from "../components/authSignup";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-900">
      <h1 className="text-2xl font-bold mb-4">Sign Up or Log In</h1>
      <AuthSignup />
    </div>
  );
};

export default SignupPage;
