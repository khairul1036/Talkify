"use client";

import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="mx-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-indigo-600 ml-4 text-2xl font-bold">
          <Link href="/" className="text-indigo-600">
            Talkify
          </Link>
        </div>


        {/* Profile */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-600">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
