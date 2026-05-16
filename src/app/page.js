"use client"

import Head from 'next/head';
import Image from "next/image";
import heroimg from "./heroimg.png";
import FOOTER from "@/components/footer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



const PalmBoostLanding = () => {

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  

  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  

  const handleSubmit = () => {
    setLoading(true);

    if (isValidEmail(email)) {
      addEmailToDb(email, phoneNumber);
      router.push("https://wa.me/2349129418676"); // Redirects to WhatsApp link
      //router.push("/sign-up");
    } else {
      setEmail("");
      setPhoneNumber("");
      alert("Enter valid email address and phone number.");
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };




  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Inter',_sans-serif]">
      <Head>
        <title>PalmBoost | Elevate Your Performance</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-[#288a3f]  hover:text-[#c1c9ad] rounded">
          PALMBOOST
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-[#1d7933] transition-colors">Products</a>
          <a href="#" className="hover:text-[#28863e] transition-colors">Blog</a>
          <a href="#" className="hover:text-[#2b8d42] transition-colors">Reviews</a>
        </div>
        <button className="bg-[#288a3f] hover:bg-yellow-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
          Chat With Us
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Palm Wine <br />
            <span className="text-[#288a3f]">in A Can.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            Shipping Across Nigeria.
          </p>

          {/* for email and whatsapp number*/}
          <div className="flex flex-col sm:flex-column gap-4 w-98 sm:w-full">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6
            px-4 py-2 mb-2 sm:mb-0 border border-gray-300 focus:outline-none"
          />

          <input
            type="phone"
            placeholder="Enter your WhatsApp number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6
            px-4 py-2  mb-2 sm:mb-0 border border-gray-300 focus:outline-none"
          />

          
          
          </div>


          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#288a3f] hover:bg-[#7eaf2f] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Buy PalmBoost
            </button>
            <button className="border border-white/20 hover:border-[#288a3f] px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Chat with Us
            </button>
          </div>
        </div>

        {/* Hero Photo Section (500x500) */}
        <div className="relative w-full max-w-[500px] aspect-square mx-auto bg-gradient-to-br from-[#288a3f]/20 to-transparent rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0  bg-[#288a3f]/5 animate-pulse"></div>
          <Image src={heroimg} alt="PalmBoost Hero" className="z-10 ml-10 object-cover w-full h-full rounded-2xl" />
        </div>
      </main>

      <FOOTER/> 

      
    </div>
  );
};

export default PalmBoostLanding;