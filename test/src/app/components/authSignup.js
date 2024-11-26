"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IconBrandGoogle } from "@tabler/icons-react";



export const AuthSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Use the hook correctly

   // Redirect user if they're already signed in
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Redirect to home page if user is signed in
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const validateInputs = () => {
    // Clear previous errors
    setError("");

    // Email validation
    if (!email) {
      setError("Email is required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Password validation
    if (!password) {
      setError("Password is required.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    return true;
  };

  const signIn = async () => {
    if (!validateInputs()) return;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      setError("Failed to sign up. Please try again.");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      setError("Failed to sign up with Google. Please try again.");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-lg p-8 shadow-lg bg-white border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Sign Up or Log In
      </h2>

      {/* Display Error Message */}
      {error && (
        <div className="mb-4 text-red-600 text-sm text-center bg-red-50 p-2 rounded-md">
          {error}
        </div>
      )}

      <form className="space-y-6">
        {/* Email Input */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email" className="text-gray-900">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="password" className="text-gray-900">
            Password
          </Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Sign-Up Button */}
        <button
          className="w-full bg-orange-600 text-white rounded-full h-12 font-semibold shadow-md hover:bg-orange-700 transition"
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
          className="flex items-center justify-center w-full bg-amber-50 text-orange-600 rounded-full h-12 font-semibold shadow-md hover:bg-amber-100 transition space-x-2"
          type="button"
          onClick={signInWithGoogle}
        >
          <IconBrandGoogle className="h-6 w-6 text-orange-600" />
          <span>Sign Up with Google</span>
        </button>
      </form>
    </div>
  );
};
