import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black mt-0 flex flex-col ">
        <div className=" flex justify-center items-center h-16 font-bold mt-10 text-center">
      <p className="text-white ">
        Made With 💗 by
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent pl-2">
          Bitmystics
        </span>
      </p>
      </div>
      {/* <div className=" bg-white flex flex-row item-center justify-center">

      
      <FaSquareXTwitter   />
      <FaSquareInstagram />
      <FaSquareFacebook />
    

      </div> */}
    </div>
  );
};

export default Footer;
