import React from "react";

export default function Footer() {
  return (
    <footer className="h-80 bg-[#001721] text-white w-full py-10 mt-20">
      <div className="w-full flex flex-col items-center space-y-10 px-12">
        <p className="text-xl">
          © {new Date().getFullYear()} TAMSCO. All rights reserved.
        </p>
        <div className="flex space-x-6 text-lg">
          <a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-300 transition">Terms of Service</a>
          <a href="#" className="hover:text-yellow-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
