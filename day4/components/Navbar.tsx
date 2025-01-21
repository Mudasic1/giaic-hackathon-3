"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Correct import for Next.js App Router
import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";

const NavItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/shop" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { isSignedIn } = useUser(); // Get user authentication state
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${searchQuery}`);
    }
  };

  return (
    <>
      {/* Navbar for large screens */}
      <div className="flex flex-wrap justify-between items-center w-full h-16 bg-white px-4 lg:px-6 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <h1 className="text-xl lg:text-2xl font-bold">Furniro</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-6">
          {NavItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="text-sm lg:text-lg font-medium hover:text-blue-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Icon */}
          <div onClick={() => setSearchOpen(!searchOpen)} className="cursor-pointer">
            <Image src="/search.svg" alt="Search" width={20} height={20} className="sm:w-25 sm:h-25" />
          </div>
          {/* Wishlist Icon */}
          <Link href="/wishlist">
            <Image src="/wishlist.svg" alt="Wishlist" width={20} height={20} className="sm:w-25 sm:h-25" />
          </Link>
          {/* Cart Icon */}
          <Link href="/cart">
            <Image src="/cart.svg" alt="Cart" width={20} height={20} className="sm:w-25 sm:h-25" />
          </Link>
          {/* User Authentication */}
          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <UserButton afterSignOutUrl="/" />
              <SignOutButton>
                <button className="text-red-500 text-sm sm:text-base hover:underline">Sign Out</button>
              </SignOutButton>
            </div>
          ) : (
            <SignInButton>
              <button className="rounded-full bg-blue-500 text-white text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 hover:underline">
                Sign In
              </button>
            </SignInButton>
          )}
          {/* Hamburger Menu for Mobile */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="/menu.png" alt="Menu" width={25} height={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col gap-4 p-4">
            {NavItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="block text-lg font-medium text-gray-700 hover:text-blue-500 transition"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Input */}
      {searchOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 px-4 py-2 shadow-md z-50">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </form>
        </div>
      )}
    </>
  );
}
