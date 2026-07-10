"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-full mb-20 bg-[#050505]/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block relative w-36 sm:w-44 md:w-52 h-12 hover:scale-105 transition-transform">
              <Image
                src="/logo.svg"
                alt="AbhiVerse"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
