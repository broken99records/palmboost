"use client";

import Head from "next/head";
import Image from "next/image";
import heroimg from "./heroimg.png";
import FOOTER from "@/components/footer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { insertLead } from "@/lib/functions/insertLead";

const PalmBoostLanding = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setLoading(true);
    
      if (isValidEmail(email)) {
        const result = await insertLead(email, phoneNumber);
        if (result.success) {
          setEmail("");
          setPhoneNumber("");
          setLoading(false);
          console.log("success on details input");
          alert(
            "Details entered successfully! You will be redirected to whatsapp, press OK",
          );
          router.push(`https://wa.me/2349129418676?text=${message}`);
        }
      } else {
        setEmail("");
        setPhoneNumber("");
        alert("Please enter a valid email address and phone number.");
        setLoading(false);
        setError("Invalid email address or phone number.");
      }
    
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const message = encodeURIComponent("Hi, I'm interested in PalmBoost");

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Inter',_sans-serif]">
      <Head>
        <title>PalmBoost</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-[#288a3f]  hover:text-[#7eaf2f] rounded">
          PALMBOOST
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-[#28863e] transition-colors">
            Products
          </a>
          <a href="#" className="hover:text-[#28863e] transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-[#28863e] transition-colors">
            Reviews
          </a>
        </div>
        <a
          href="#lead-form"
          className="bg-[#288a3f] hover:bg-[#7eaf2f] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
        >
          Chat With Us
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div className="space-y-6 order-2 lg:order-1">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Palm Wine <br />
            <span className="text-[#288a3f]">in A Can.</span>
          </h1>

          {/* Container for email and whatsapp number */}
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0">
            <p
              id="lead-form"
              className="text-gray-400 text-lg md:text-xl max-w-lg"
            >
              Please Enter your details.
            </p>
            <div className="w-full">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
                className="block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 shadow-sm transition-all outline-none focus:border-[#288a3f] focus:ring-2 focus:ring-[#2663eb]/20 text-sm md:text-base"
              />
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="sr-only">
                WhatsApp Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your WhatsApp number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 shadow-sm transition-all outline-none focus:border-[#288a3f] focus:ring-2 focus:ring-[#2663eb]/20 text-sm md:text-base"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              hidden
              className="bg-[#288a3f] hover:bg-[#7eaf2f] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Buy PalmBoost
            </a>
            <button
              onClick={handleSubmit}
              className="border border-white/20 bg-[#288a3f] hover:border-[#288a3f] px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Chat with Us
            </button>
            {/* Error Display */}
            {error && (
              <p id="error" className="text-red-500">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Hero Image Section */}
        <div
          className="
  relative w-full h-[240px]
  sm:h-[360px]
  lg:h-[500px]
  mx-auto
  bg-gradient-to-br from-[#288a3f]/20 to-transparent
  rounded-2xl border border-white/10
  flex items-center justify-center
  overflow-hidden
  order-1 lg:order-2
"
        >
          {" "}
          <div className="absolute inset-0  bg-[#288a3f]/5 animate-pulse"></div>
          <Image
            src={heroimg}
            alt="PalmBoost Hero"
            className="ml-5 lg:ml-10 object-contain w-full h-full rounded-2xl"
            loading="eager"
          />
        </div>
      </main>

      <FOOTER />
    </div>
  );
};

export default PalmBoostLanding;
