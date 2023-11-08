import React, { useState } from "react";
import { Await, Link, useNavigate } from "react-router-dom";

const Batches = () => {
  return (
    <div className="bg-gradient-to-br from-blue-800 via-blue-500 to-blue-45000 h-screen flex justify-center items-center">
      <div className="space-y-4 flex flex-col items-center">
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm">
          2010
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm">
          2011
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm ">
          2012
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm">
          2013
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm">
          2014
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm">
          2015
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm">
          2016
        </button>
        <button className="bg-[#7e0202] hover:bg-red-500 text-white font-bold py-5 px-10 rounded text-sm">
          2017
        </button>
      </div>
    </div>
  );
};
export default Batches;
