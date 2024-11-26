"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { auth } from "../config/firebase"; // Your Firebase instance
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import signOut here

const Navbar = () => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Call signOut with the auth instance
      setUser(null); // Clear the user state
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/NaanStopWok.jpg"
                alt="Naan Stop Wok Logo"
                width={40}
                height={40}
                className="rounded-full h-10 w-10"
              />
              <span className="ml-2 text-xl font-bold text-orange-600">
                Naan Stop Wok
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {["Menu", "About Us", "Reservations", "Contact"].map((item) => {
              const href = `/${item.toLowerCase().replace(" ", "-")}`;
              const isActive = pathname === href;
              
              return (
                <Link
                  key={item}
                  href={href}
                  className={`text-sm transition-colors ${
                      isActive
                        ? "text-orange-600 font-bold underline underline-offset-4"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                >
                  {item}
                </Link>
              );
              })}
            </div>
          </div>

          {/* Log In/Out Buttons */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
            {user ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center rounded-full bg-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-400 transition-colors"
              >
                Log Out
              </button>
            ) : (
              <Link
                href="/signup"
                className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
              >
                Sign up / Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
