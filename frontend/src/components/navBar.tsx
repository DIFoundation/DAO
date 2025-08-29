"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-start">
      {/* NAVBAR */}
      <nav className="fixed w-full p-4 shadow-2xl bg-purple-950 top-0 left-0 flex items-center justify-between z-50">
        {/* Logo */}
        <div>
          <h2 className="text-lg font-bold text-white">Logo</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Connect Wallet */}
        <p className="md:px-4 py-2 text-xs md:text-sm px-2 rounded-lg font-bold bg-white text-purple-700 cursor-pointer">
          Connect Wallet
        </p>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1 ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-purple-900 flex flex-col items-center py-4 gap-4 md:hidden">
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <header className="w-full h-[60vh] flex flex-col justify-center items-center bg-purple-100 mt-20">
        <h1 className="text-4xl font-bold text-purple-900">
          Welcome to DAO Lending
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Decentralized loans, governed by the community.
        </p>
      </header>

      {/* TEAM SECTION */}
      <section className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Sherif",
              role: "Frontend Engineer",
              img: "/avatar-one.jpg",
            },
            {
              name: "Thompson",
              role: "Frontend Engineer",
              img: "/avatar-two.jpg",
            },
            {
              name: "Daniel",
              role: "Smart Contract Dev",
              img: "/avatar-three.jpg",
            },
            {
              name: "Ibrahim",
              role: "Smart Contract Dev",
              img: "/avatar-four.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4">
                <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700">
                  in
                </span>
                <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700">
                  X
                </span>
                <span className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700">
                  🌐
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIALS SECTION */}
      <section className="w-full max-w-4xl px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6 text-purple-900">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <Link
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full text-purple-700 text-xl"
          >
            X
          </Link>
          <Link
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full text-purple-700 text-xl"
          >
            in
          </Link>
          <Link
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full text-purple-700 text-xl"
          >
            IG
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-purple-950 text-white py-6 text-center mt-10">
        <p>© 2025 DAO Lending. All rights reserved.</p>
      </footer>
    </div>
  );
}
