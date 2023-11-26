import React, { useState } from 'react';

    // const AlumniUpdateForm = () => {
    //   const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phoneNumber: '',
    //     newCompany: '',
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Form submitted:', formData);
    //     // Add logic to update alumni data
    //   };
    
const UserDetails = () => {
  return (
    
        <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md  bg-[#F4F3F3]">
          <h2 className="text-2xl font-semibold mb-6">Alumni Update</h2>
          {/* <form onSubmit={handleSubmit}> */}
          <form  >
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                // value={formData.firstName}
                // onChange={handleChange}
                // value={formData.firstName}
                // onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                // value={formData.lastName}
                // onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Telephone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                // value={formData.phoneNumber}
                // onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newCompany" className="block text-gray-700 text-sm font-bold mb-2">
                New Working Company
              </label>
              <input
                type="text"
                id="newCompany"
                name="newCompany"
                // value={formData.newCompany}
                // onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          </form>
        </div>
      );
    };
export default UserDetails;
    