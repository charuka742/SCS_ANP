import React from "react";

const CSbatch = () => {
  const years = Array.from({ length: 6 }, (_, index) => 2005 + index);

  return (
    <div className="bg-gradient-to-br from-blue-800 via-blue-500 to-blue-45000 h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br from-blue-800 via-blue-500 to-blue-45000 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-8">Select a Year</h1>
        <div className="grid grid-cols-3 gap-4">
          {years.map((year) => (
            <button
              key={year}
              className="bg-[#7e0202] hover:bg-red-500 text-white p-12 rounded focus:outline-none focus:shadow-outline-blue"
              onClick={() => alert(`You selected ${year}`)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

 }

export default CSbatch;
          