"use client";
import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IconBrandGoogle } from "@tabler/icons-react";

export const AuthSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-lg p-6 shadow-lg bg-white border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 text-center">
      Sign Up or Log In
      </h2>
      <form className="mt-6 space-y-6">
        {/* Email Input */}
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="email" className="text-gray-800 font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="password" className="text-gray-800 font-medium">
            Password
          </Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Sign-Up Button */}
        <button
          className="w-full bg-orange-600 text-white rounded-lg h-10 font-semibold shadow-md hover:bg-orange-700 transition"
          type="button"
          onClick={signIn}
        >
          Sign Up / Log In
        </button>

        {/* Divider */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-600">or</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Sign Up With Google */}
        <button
          className="flex items-center justify-center w-full bg-amber-50 text-orange-600 rounded-lg h-10 font-semibold shadow-md hover:bg-amber-100 transition space-x-2"
          type="button"
          onClick={signInWithGoogle}
        >
          <IconBrandGoogle className="h-5 w-5 text-orange-600" />
          <span>Sign Up with Google</span>
        </button>
      </form>
    </div>
  );
};
