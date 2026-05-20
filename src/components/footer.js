import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white border-t border-white/10 pt-16 pb-8 font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-[#288a3f] text-xl font-bold tracking-tighter mb-4">
              PALMBOOST
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pasteurized Raffia Palm Wine.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#288a3f] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#288a3f] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#288a3f] transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Connect
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#288a3f] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#288a3f] transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#288a3f] transition-colors">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Certification */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Regulatory
            </h3>
            <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
              <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">
                NAFDAC Reg No.
              </p>
              <p className="text-[#288a3f] font-mono text-sm tracking-wider">
                01-8175L
              </p>
              <p className="text-[10px] text-gray-500 mt-2 italic">
                Verified for safety and quality standards.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Inel Science Technic. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-600">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
