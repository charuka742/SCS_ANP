import React, { useState } from "react";
import { Await, Link, useNavigate } from "react-router-dom";

const ButtonComponent = () => {
  return (
    <div className="bg-gradient-to-br from-blue-800 via-blue-500 to-blue-45000 h-screen flex justify-center items-center">
      <div className="space-x-4">
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-10 px-20 rounded text-xl ">
          <Link to ="/CS" >Computer Science</Link>
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-10 px-20 rounded text-xl">
        <Link to="/Stat"> Statistics</Link>
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold text-xl py-10 px-20 rounded shadow-lg focus:outline-none transform hover:scale-105 transition-transform">
        <Link to="/DS">  Data Science </Link>
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;