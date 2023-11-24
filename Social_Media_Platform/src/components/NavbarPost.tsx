import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

const NavbarPost = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-full p-4 flex items-center text-white border-b-4 border-gray-300 fixed -mt-5">
      <div className="text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        friendsBook
      </div>
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-full bg-gray-500 focus:outline-grey"
        />
      </div>
      <div className="flex">
        <div className="mx-10 cursor-pointer"> {<IoHome size={30}/>}</div>
        <div className="mx-10 cursor-pointer"><FaUserFriends size={30} /></div>
        <div className="mx-10 cursor-pointer">< AiFillMessage size={30} /></div>
      </div>
    </div>
  );
};

export default NavbarPost;