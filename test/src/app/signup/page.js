import React from "react";
import { AuthSignup } from "../components/authSignup";
import Image from "next/image";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Banner Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Banner.jpg"
            alt="Sign Up or Log In"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Sign Up or Log In
            </h1>
            <p className="mt-4 text-lg text-gray-100">
              Join Naan Stop Wok for exclusive offers today.
            </p>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <AuthSignup />
      </div>
    </div>
  );
};

export default SignupPage;
