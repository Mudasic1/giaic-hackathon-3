"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
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

  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Close menus when clicking outside
  const handleClickOutside = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <nav className="relative z-50">
      {/* Navbar for large screens */}
      <div className="flex flex-wrap justify-between items-center w-full h-16 bg-white px-4 lg:px-6 shadow-md relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Furniro Logo" 
            width={30} 
            height={30}
            priority
          />
          <h1 className="text-xl lg:text-2xl font-bold">Furniro</h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-6" role="navigation">
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
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-1"
            aria-label="Toggle search"
          >
            <Image src="/search.svg" alt="" width={20} height={20} className="sm:w-[25px] sm:h-[25px]" />
          </button>
          
          {/* Wishlist Icon */}
          <Link href="/wishlist" className="p-1" aria-label="Wishlist">
            <Image src="/wishlist.svg" alt="" width={20} height={20} className="sm:w-[25px] sm:h-[25px]" />
          </Link>
          
          {/* Cart Icon */}
          <Link href="/cart" className="p-1" aria-label="Shopping cart">
            <Image src="/cart.svg" alt="" width={20} height={20} className="sm:w-[25px] sm:h-[25px]" />
          </Link>

          {/* User Authentication */}
          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <UserButton afterSignOutUrl="/" />
              <SignOutButton>
                <button className="text-red-500 text-sm sm:text-base hover:underline">
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          ) : (
            <SignInButton>
              <button className="rounded-full bg-blue-500 text-white text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 hover:bg-blue-600 transition">
                Sign In
              </button>
            </SignInButton>
          )}

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Image src="/menu.png" alt="" width={25} height={25} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={handleClickOutside}>
          <div className="bg-white shadow-md w-64" onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col gap-4 p-4">
              {NavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="block text-lg font-medium text-gray-700 hover:text-blue-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Search Input */}
      {searchOpen && (
        <div 
          className="absolute w-full bg-white shadow-lg border-t z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto px-4 py-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                aria-label="Search products"
                autoFocus
              />
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                aria-label="Submit search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
