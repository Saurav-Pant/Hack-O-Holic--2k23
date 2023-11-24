"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
 
  return (
    <div className="flex justify-between items-center p-4">
      <div className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-xl font-bold">
        <Link href="/">FriendsBook</Link>
      </div>
      <div className="flex space-x-4 justify-between items-center">
       
         <div className="flex items-center">
       </div>
       
        
          <div>
            <button className="bg-white  text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out">
              <Link href="/Login">Login</Link>
            </button>
            <button
              className="hover:bg-white hover:text-black  text-white font-semibold py-2 px-4 rounded-full
          transition-colors duration-500 ease-in-out"
            >
              <Link href="/SignUp">Signup</Link>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
