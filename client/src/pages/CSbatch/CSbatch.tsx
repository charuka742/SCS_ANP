import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CSbatch = () => {
  const years = Array.from({ length: 10 }, (_, index) => 2018 + index);
  const [streamParam, setStreamParam] = useState<any>();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const streamParameter = searchParams.get("stream");

    if (streamParameter) {
      // Do something with the streamParam value
      setStreamParam(streamParameter);
    }
  }, [window.location.search]);

  return (
    <>
      {streamParam && (
        <div className='bg-gradient-to-br from-blue-800 via-blue-500 to-blue-45000 h-screen flex justify-center items-center'>
          <div className='bg-gradient-to-br from-blue-800 via-blue-500 to-blue-45000 p-8 rounded shadow-md'>
            <h1 className='text-3xl font-bold mb-8'>Select a Year</h1>
            <div className='grid grid-cols-3 gap-4'>
              {years.map((year) => (
                <Link
                  key={year}
                  className='bg-[#7e0202] hover:bg-red-500 text-white p-12 rounded focus:outline-none focus:shadow-outline-blue'
                  to={`/alumnies?stream=${streamParam}&batch=${year}`}>
                  {year}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CSbatch;
