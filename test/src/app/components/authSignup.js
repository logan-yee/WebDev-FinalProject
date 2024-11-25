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
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Sign Up for Your Account
      </h2>
      <form className="my-8 space-y-6">
        {/* Email Input */}
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="password">Password</Label>
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
          className="w-full bg-gradient-to-br from-black to-neutral-600 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-md h-10 font-medium shadow-md hover:bg-black/80"
          type="button"
          onClick={signIn}
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

        {/* Sign Up With Google */}
        <button
          className="flex items-center justify-center w-full bg-gray-50 dark:bg-zinc-900 text-black dark:text-white rounded-md h-10 font-medium shadow-md hover:bg-gray-100 dark:hover:bg-zinc-800 space-x-2"
          type="button"
          onClick={signInWithGoogle}
        >
          <IconBrandGoogle className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
          <span>Sign Up with Google</span>
        </button>
      </form>
    </div>
  );
};
