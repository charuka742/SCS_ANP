import React, { useState } from "react";

const Card = ({ name, company, telephone, email,year}:any) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-4 py-">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-600 text-sm">{company}</p>
      </div>
      {showInfo && (
        <div className="px-4 py-4">
          <p className="text-gray-700">Telephone: {telephone}</p>
          <p className="text-gray-700">Email: {email}</p>
          <p className="text-gray-700">Year: {year}</p>
        </div>
      )}
      <div className="px-4 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleInfo}
        >
          {showInfo ? "Hide" : "See"}
        </button>
      </div>
    </div>
  );
};

export default Card;
