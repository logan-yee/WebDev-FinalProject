"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

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
              <span className="ml-2 text-xl font-bold text-orange-600">Naan Stop Wok</span>
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
                  className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-orange-600 font-extrabold underline underline-offset-4"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                >
                  {item}
                </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation & Login */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
            <Link
               href="/signup"
              className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
              >
               Sign up / Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
