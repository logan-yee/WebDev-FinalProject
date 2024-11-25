import { useCallback } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from "react";

export const AuthSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password); 
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider); 
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <input 
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}    
            />
            <button onClick={signIn}>Sign Up</button>

            <button onClick={signInWithGoogle}>Sign Up With Google</button>

        </div>
    );
};